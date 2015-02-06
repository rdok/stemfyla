<?php
/**
 * @author Rizart Dokollari
 * @since 2/6/15
 */

// Load all classes  automatically
require '../../vendor/autoload.php';

// load config var
if (!getenv('APP_ENV'))
{
	Dotenv::load(__DIR__ . '/../..');
}

$siteKey['RECAPTCHA_SITE_KEY'] = getenv('RECAPTCHA_SITE_KEY');

echo json_encode($siteKey);
