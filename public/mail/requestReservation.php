<?php

require '../../vendor/autoload.php';
use Mailgun\Mailgun;

# First, instantiate the SDK with your API credentials and define your domain.
$mg = new Mailgun("key-ecf1d54016cfe483503ae64b32958f70");
$domain = "sandbox1012c53b3b844f6d8b0714212c039a7f.mailgun.org";

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$html = file_get_contents('reservation.html');

date_default_timezone_set('Europe/Athens');
$currentDate = date('m/d/Y h:i:s a', time());

# Now, compose and send your message.
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