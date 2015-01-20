<?php

/**
 * Created by PhpStorm.
 * User: rdok
 * Date: 9/16/2014
 * Time: 4:56 PM
 */
class ReCAPTCHARetriever
{
    /** stemfyla.gr */
	const PRODUCTION_HOST = "";
	const SITE_KEY_PRODUCTION = "";
	const PRIVATE_KEY_PRODUCTION = "";

	const STAGE_HOST = "stemfyla.herokuapp.com";
	const SITE_KEY_STAGE = "6LcDrwATAAAAADJopKdn7jXOr585kHiSKmcVJ0E-";
	const PRIVATE_KEY_STAGE = "6LcDrwATAAAAAJYjjXwNFdZYfg47l5d8ya6ZD7Fw";

	const DEVELOPMENT_RDOK_HOST = "stemfyla.app";
	const SITE_KEY_DEVELOPMENT_RDOK = "6LcErwATAAAAAEEpxMH1DbLDt7qgTYNDCxHPosy3";
	const PRIVATE_KEY_DEVELOPMENT_RDOK = "6LcErwATAAAAAEe3lVNHe5ciZeU2lkr8e_FDsHqW";


	public static function retrieveSiteKey() {
		$currentHost = $_SERVER['SERVER_NAME'];

		if (strcmp($currentHost, self::PRODUCTION_HOST) === 0) return self::SITE_KEY_PRODUCTION;
		if (strcmp($currentHost, self::STAGE_HOST) === 0) return self::SITE_KEY_STAGE;
		if (strcmp($currentHost, self::DEVELOPMENT_RDOK_HOST) === 0) return self::SITE_KEY_DEVELOPMENT_RDOK;
	}

	public static function retrieveSecretKey() {
		$currentHost = $_SERVER['SERVER_NAME'];

		if (strcmp($currentHost, self::PRODUCTION_HOST) === 0) return self::PRIVATE_KEY_PRODUCTION;
		if (strcmp($currentHost, self::STAGE_HOST) === 0) return self::PRIVATE_KEY_STAGE;
		if (strcmp($currentHost, self::DEVELOPMENT_RDOK_HOST) === 0) return self::PRIVATE_KEY_DEVELOPMENT_RDOK;
	}
}