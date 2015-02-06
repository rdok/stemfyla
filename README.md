[TOC] 

#STEMFYLA - PSD code conversion

## Deployment on production server

### Configuration files/variables | .env 
- If the hosting server used for production allows for environment variables to be set, see [heroku example](https://devcenter.heroku.com/articles/config-vars#setting-up-config-vars-for-a-deployed-application), that's great. Use the [.env.example](https://bitbucket.org/nmathioudiakis-rdokollari/stemfyla/src/b057a1dec7a0c458c687d46d4588f5e83b789886/.env.example?at=master) and just set those variables accordingly from the hosting side.
- If the hosting server does not allow this feature, then you'll need to copy and create a file from .env.example to .env ONLY to the production server. This file will contain sensitive data and should not be added only to but the production server. And just set those variables in this new file.
- In either case, the app will know what to use.
#### Keys
- **RECAPTCHA_SITE_KEY & RECAPTCHA_SECRET_KEY**:  Please go to [Google ReCaptcha](https://www.google.com/recaptcha/admin#list) preferably with an account associated with Stemfyla.gr. At this Google page you'll have to generate the reCAPTCHA API keys using the domain stemfyla.gr. Then fill accordingly.
- **MAILGUN_API_KEY && MAILGUN_PUBLIC_API_KEY &&  MAILGUN_DOMAIN_NAME**: Please go to [mailgun.com](https://mailgun.com) and register a account associated with stemfyla.gr. For the mails to not be flagged as spam, or worst blocked from mail server it's recommended to [verify the production domain nam](https://help.mailgun.com/hc/en-us/articles/202052074-How-do-I-verify-my-domain-) stemfyla.gr in this case. As it is now, the production is using a free domain registered on the stemfyla@outlook.com account. It does work. And most probably email won't be flagged. But I had to give this recommendation. 
- **RECIPIENT_CONTACT_EMAIL:** Just add the email you the contact message to go at.
- **APP_ENV:** If you're running this app on your dev machine then add `development`. If this app is running on a production, add `production`.


### Composer update  
Composer is a tool for dependency management in PHP. It allows you to declare the dependent libraries your project needs and it will install them in your project for you. These files are not tracked into CVS(git). Hosting servers like heroku & forge, auto install these libraries when we push code on productions servers.

- If the production server is similar to [heroku](https://dashboard.heroku.com/), [forge](https://forge.laravel.com/) then great! As soon as you push into those server, they'll automatically install the libraries dependencies for the app.
- If the production server does not have these features, and you have to ftp into the server and push the code then there are some additional steps. Please note these steps are only for the production server, and the files generated from these steps should not be included on the heroku/bitbucket/dropbox shared with other people.  

#### Option 1 (server with ssh & php cli NOT php cgi-fcgi): (5 min)   Recommended 
1. SSH into server
2. On root dir: `git clone git@bitbucket.org:nmathioudiakis-rdokollari/stemfyla.git`
3. Install [composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
4. `composer update`
5. `cp .env.example .env`
6. Fill the .env key as required
7. Done  
8. Note with ssh & git it takes literally less than 10 seconds to update the code :P. Even more, if something goes wrong on the production server and the code has a bug, again in less than **5 seconds** you can revert to a previous commit, where the code worked fine--is this great or not!!  

#### Option 2 (development machine with only ftp access to server): (10 min--depends on your connection speed)    
1. In your development machine, on your projects code: `git clone git@bitbucket.org:nmathioudiakis-rdokollari/stemfyla.git`
2. Install [composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)
3. At root location of app: `composer update`
4. At root location of app: `cp .env.example .env`
5. Fill the .env key as required
6. ftp and push code
*** 

## [Asana Task Link](https://app.asana.com/0/21425644731737/21425644731744) 

***

## Development
The below are valid when the project is already prepared. That is, no instruction on initializing a new repo are written. In this case @rdokollari has already done so. 
### Prepare developing environment
1. Install [git](http://git-scm.com/downloads)
2. On your git bash:
	At your developing environment, at your location you prefer to save this repo:  
	`git clone git@bitbucket.org:stemfyla/stemfyla.bitbucket.org.git`  
3. Your bitbucket username/password will be asked. If you prefer to not input these credentials each time you push/pull then you can [Set up SSH for Git](https://confluence.atlassian.com/display/BITBUCKET/Set+up+SSH+for+Git)  
4. All files are now downloaded.  

### Deployment (for development server: [stemfyla.herokuapp.org](http://stemfyla.herokuapp.org))
1. Install [heroku toolbelt](https://toolbelt.heroku.com/)
2. On a new terminal:  
	`heroku login` Add your credentials
3. After making and commiting your changes:
	`git push heroku master`
	
	Note that we use an 'index.php' file only for the development heroku server to actually deploy our site. However, on the production server there is no need to actually use this file. 
***

## Plugins
- [Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup) Fast, light and responsive lightbox plugin, for jQuery and Zepto.js.
- [Mailgun](https://mailgun.com/) Mailgun is an email automation service provided by Rackspace. It offers a complete cloud-based email service for sending, receiving and tracking email sent through your websites and applications
- [recaptcha - Google](https://www.google.com/recaptcha/intro/index.html) A significant number of your users can now attest they are human without having to solve a CAPTCHA. Instead with just a single click they’ll confirm they are not a robot.                               

##Tools
- [bower](http://bower.io/) Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.
- [composer](https://getcomposer.org/)Composer is a tool for dependency management in PHP. It allows you to declare the dependent libraries your project needs and it will install them in your project for you.

## Source
- [T0021-airpair-angularjs-tutorial](https://github.com/airpair/T0021-airpair-angularjs-tutorial)