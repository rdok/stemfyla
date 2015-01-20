<?php


require '../../vendor/autoload.php';
use Mailgun\Mailgun;

require_once "recaptchalib.php";

// Google recaptcha preparations
$siteKey = "6LcErwATAAAAAEEpxMH1DbLDt7qgTYNDCxHPosy3";
$secret = "6LcDrwATAAAAAJYjjXwNFdZYfg47l5d8ya6ZD7Fw";
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
if ($request->gRecaptchaResponse) {
    $resp = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $request->gRecaptchaResponse
    );
}

// Someone tried to bypass recaptcha. Block them.
if (!($resp != null && $resp->success)) {
    exit();
}

# mailgun. First, instantiate the SDK with your API credentials and define your domain.
$mg = new Mailgun("key-ecf1d54016cfe483503ae64b32958f70");
$domain = "sandbox1012c53b3b844f6d8b0714212c039a7f.mailgun.org";

// Load mail template
$html = file_get_contents('reservation.html');

// Make sure server uses Greece/Athens hours
date_default_timezone_set('Europe/Athens');
$currentDate = date('m/d/Y h:i:s a', time());

# Now, compose and send the message.
$mg->sendMessage($domain, array('from' => 'no-reply@stemfyla.gr',
    'to' => 'r.dokollari@gmail.com',
    'subject' => 'Stemfyla | New Reservation Request',
    'text' => 'Your mail does not support html',
    'html' => $html,
    'vars' => '{"phone": "$request->phone"}',
    'recipient-variables' => '{"r.dokollari@gmail.com": {"fName":"' . $request->fName . '","lName":"' . $request->lName
        . '", "id":1, "phone":"' . $request->phone . '", "currentDate":"' . $currentDate . '", "email":"' .
        $request->email . '", "message":"' . $request->message . '"}}'
));