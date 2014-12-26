[TOC] 

#STEMFYLA - PSD code conversion

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
                                                                 

##Tools
- [bower](http://bower.io/) Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.

## Source
- [T0021-airpair-angularjs-tutorial](https://github.com/airpair/T0021-airpair-angularjs-tutorial)