[TOC] 

#STEMFYLA - PSD code conversion

***

## [Asana Task Link](https://app.asana.com/0/21425644731737/21425644731744) 

***
 
## TODO
### Convert PSD to website - done
### Nav Bar - done
- Αρχική, Υλικό, Κατάλογος, Ζωντανό Πρόγραμμα, Επικοινωνία 

### Fix UI for Motorola RAZR V3m

##Issues
1. [Font-Awesome](http://fortawesome.github.io/Font-Awesome/icons/): Apparently, Adblock Plus can remove Font Awesome brand icons with their "Remove Social Media Buttons" setting. We will not use hacks to force them to display. Please report an issue with Adblock Plus if you believe this to be an error. To work around this, you'll need to modify the social icon class names.
2. Provide font family as Adobe Photoshop CC 2014 cannot recognize from psd.
3. Nav bar cannot fit all options for screen resolutions of width: 768px - 1200px (approximately). Please select on of those options: 
      - [Align nav bar options to 2 lines](http://pbrd.co/1FYBN15)
      - [Move nav bar options below logo image](http://pbrd.co/1FYCw2h)
      - [Collapse to nav bar to mobile like](http://pasteboard.co/)
      - Suggest another idea.
4. Safari does not render family fonts correctly. This issue will be solved after issue #2 is solved

 
### Footer 
Modify: 
"oxi like us on" => "Κάντε μας like στο " 
 
***

## Installation
1. Install [git](http://git-scm.com/downloads)
2. On your git bash:
	- At your developing environment, at your location you prefer to save this repo: `git clone git@bitbucket.org:stemfyla/stemfyla.bitbucket.org.git`
	- Your bitbucket username/password will be asked. If you prefer to not input these credentials each time you push/pull then you can [Set up SSH for Git](https://confluence.atlassian.com/display/BITBUCKET/Set+up+SSH+for+Git)
	- All files are now downloaded.
***

##Tools
- [bower](http://bower.io/) Web sites are made of lots of things — frameworks, libraries, assets, utilities, and rainbows. Bower manages all these things for you.