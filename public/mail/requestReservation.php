<?php
require '../../vendor/autoload.php';
// See #14.
if (!getenv('APP_ENV'))
{
	Dotenv::load(__DIR__ . '/../..');
}
use Mailgun\Mailgun;

// if this functioncality becomes more complex then use a config.php file and use absolute paths instead of relative
require_once "../../app/recaptchalib.php";
require_once "../../app/ReCAPTCHARetriever.class.php";

// Google recaptcha preparations | ALERT: if you update this then also update public/app/js/main.js
$siteKey = getenv('RECAPTCHA_SITE_KEY');
$secret = getenv('RECAPTCHA_SECRET_KEY');

$lang = "el";
// The response from reCAPTCHA
$resp = null;
// The error code from reCAPTCHA, if any
$error = null;
$reCaptcha = new ReCaptcha($secret);

// Retrieve data from angularjs
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// Was there a reCAPTCHA response?
if ($request->gRecaptchaResponse)
{
	$resp = $reCaptcha->verifyResponse(
		$_SERVER["REMOTE_ADDR"],
		$request->gRecaptchaResponse
	);
}

// Someone tried to bypass recaptcha. Block them.
if (!($resp != null && $resp->success))
{
	exit();
}

# mailgun. First, instantiate the SDK with your API credentials and define your domain.
$mg = new Mailgun(getenv('MAILGUN_API_KEY'));
$domain = getenv('MAILGUN_DOMAIN_NAME');

// Load mail template
$html = file_get_contents('reservation.html');

// Make sure server uses Greece/Athens hours
date_default_timezone_set('Europe/Athens');
$currentDate = date('m/d/Y h:i:s a', time());

$recipientEmail = getenv('RECIPIENT_CONTACT_EMAIL');

# Now, compose and send the message.
$mg->sendMessage($domain, ['from'                => 'no-reply@stemfyla.gr',
                           'to'                  => $recipientEmail,
                           'subject'             => 'Stemfyla | Νέο αίτημα κράτησης',
                           'text'                => 'Your mail does not support html',
                           'html'                => $html,
                           'vars'                => '{"phone": "$request->phone"}',
                           'recipient-variables' => '{"' . $recipientEmail . '": {"fName":"' . $request->fName . '","lName":"' . $request->lName
	                           . '", "id":1, "phone":"' . $request->phone . '", "currentDate":"' . $currentDate . '", "email":"' .
	                           $request->email . '", "message":"' . $request->message . '"}}'
]);
