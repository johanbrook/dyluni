# What is this?

Dyluni is my personal starting point when beginning a new web project. It's essentially [Sass](http://sass-lang.com) code organized in files, a collection of utils, and boilerplate code.

I saw myself writing the same CSS code over and over again, so I decided to once and for all create a solid foundation which you can build upon. People's CSS files are usually a mess, so I hope that this will bring some organization to the disorder.


**[Demo](http://johanbrook.com/dyluni-demo)**

# How to use Dyluni

When you first clone or download the framework you'll see this folder structure:

	index.html
	README.md
	css
	fonts
	images
	js
	sass
		library
		pages
		partials

The index.html and sass folder are the interesting guys. Don't worry about the `css` folder since it's only CSS generated from the Sass files. However, there are some patches for Internet Explorer in pure CSS in there, which could be interesting later on.

## Compiling Sass

For a crash course in Sass, head over to [the project's website](http://sass-lang.com/tutorial.html).

When I begin my work session I start with this in a terminal window (when standing in the site's root directory):

	sass --watch sass:css

Now Sass will watch the `.scss` files in the `sass` directory and automatically compile and generate `.css` files. Although, in Dyluni this is actually not true – only `master.scss` is generated to regular CSS. Files prefixed with and underscore (_) are not compiled into individual files. This is very useful for partials which you don't want to be individual CSS files, since they are imported into the `_main.scss` and `master.scss` amongst others. So it's basically only the master Sass file that is generated to regular CSS.

In production I usually minify my CSS. That's possible by appending a --style parameted to the `sass` command:

	sass --watch sass:css --style compressed

Now you'll get nice and compressed CSS.

# Index.html

The main HTML file provides a basic setup for a new site. There are essential stuff in the `<head>` as well as a nice site structure. Nothing interesting.
	
# Sass

In here we've got the goodness. `master.scss` is the master (duh) file which is generated into `master.css` – the only CSS file `index.html` imports. The power of Sass makes it possible to import partials, prefixed with an underscore in the filename, without having the server to make requests. 

Import scheme:

	master.scss
		utils
		reset
		core
			hashgrid
		main
			header
			pages
				frontpage
				.. etc ..
			forms
			sidebar
		responsive
		print
	

## master.scss

The master file of doom. Every SCSS file below is imported into this file, which in turn is compiled into `master.css`. This is therefore the CSS file you refer from the HTML file. 


## _core.scss

Basically the config file. In here you'll define site specific mixins, color variables, font stacks, helper classes, and other global styles for your project. It also includes a `$DEBUG` variable, which could be handy when switching between production and development (defaults to 'true').

## _main.scss

This is your main site style file. Start designing from here, so to speak. I recommend you to use Sass's nifty `@import` feature which lets you branch out your project into modules. Great for organization and re-use (i.e. don't dump all styles in the root, dumbnut).

## _responsive.scss

Styles for responsive web design. I've specified a couple of widths I often use (iPad, small screens, and iPhone-sized screens) but feel free to write your own. Responsive web design is about designing for the content, so don't restrain yourself to these pre-written widths. It's all about your individual project and audience.


## _hashgrid.scss

I replaced my own hacky solution of viewing the baseline and vertical grid on the page with the mature [Hashgrid](http://hashgrid.com). It's built by typographic masters and even provides the functionality of creating several grids. I often create one grid for each media query (not included by default in Dyluni) to make everything add up. Please see the Hashgrid documentation for fine tuning. 

To view the grid, open up `index.html` and simply press and hold **'G'** on your keyboard. Dyluni is built by default with a six column 980px wide grid, which you'll see when viewing for the first time. Hit 'J' to cycle through all grids. I've added a second, 28px grid as well.

## _reset.scss and _utils.scss

Slightly modified Meyer reset for HTML5 goes in `_reset.scss`. 

In the utils file global mixin definition live, such as cross-browser box-shadow, border-radius and more handy stuff which makes your life easier. I recommend you to explore this file to see how it may help you.

	### List of included mixins
	
	- debugmessage($message)
		Requires the `$DEBUG` variable in `_core.scss` to be true
		
	- clearfix
		Includes a clearfix. Included by default to the `.clearfix` CSS class
		
	- columns($count, [$gap: $square, $width: auto])
		CSS3 columns
		
	- box-shadow($args)
		CSS3 Box Shadow
	
	- box-sizing([$type: border | padding | content])
		CSS3 Box Sizing
	
	- border-radius($radius)
		CSS3 Border Radius
		
	- transition($args)
		CSS3 Transition
	
	- gradient($from, $to)
		CSS3 Gradient (simple, vertical)
		
	- transform($args)
		CSS3 Transform
		
	- block([$width: 100%, $centered: false])
		Make floated elements span 100% and remove the float. Useful in responsive web design. Also included into the `.block` CSS class.
		
	- column($number, [$margin: false])
		Generates the width property based on the `$column` and `$square` variables. Just define how many columns you want the element to span. If you set $margin to true, the element will get a right margin of $square.
		

## The pages and partials directories

Since the `@import` rule of Sass makes it easy to organize your project without having to maintain several CSS files which have to be referred from the HTML, you should branch out your project in these directories. Simply put header styles in `_header.scss` and styles for the front page in `_frontpage.scss` etc. It's great for maintenance as well as namespacing.

# Javascript

I've kept the JS to a minimum since I'm not that fond of using scripts to enhance too much of a site. jQuery (1.6) is included, as well as a smoothscroll script when navigating with text anchors (I think it's great UX).

The general setup and dump file is `dyluni.js`. `jquery.hashgrid.js` is included for showing the site grid. I've chosen not to link the HTML5 shiv from Google Code, since it's quite vital for IE6-8 when styling HTML5 elements. Imagine if something would happen to the Google hosted repository! Instead I'm using a local html5.js file instead.


# Grid

I use the [Square Grid](http://thesquaregrid.com/) as a starting point for all my projects, including this one. It's a 980px wide 35 column flexible grid. Therefore you'll find that most dimensions are based on the number 28 (each column in the grid is 28px wide and tall).

Since you're able to specify variables in Sass, you're fully free to use your own column widths in Dyluni. Have a look at the variables `$page_width`, `$square`, and `$column` in `_core.scss`. Don't forget to adjust dimensions in `_hashgrid.scss` according to your grid.

The variable `$lineheight` contains by default the value **24px**, so whenever you specify dimensions in your design, base it on `$lineheight`:

	div{
		width: $lineheight*3;
		height: $lineheight*2;
		margin-bottom: $lineheight / 2;
		padding-bottom: $lineheight / 2;
	}

This will maintain the grid throughout the design. You should also use this technique in the typographic styles:

	h1{
		font-size: 4em;
		margin-bottom: $lineheight;
		line-height: $lineheight*2;
	}


When resizing the browser window or viewing on a small-screen device, the body element will adjust its width with help from responsive design (see `_responsive.scss`).

# Typography

You may set the body font size and line height with the `$fontsize` and `$lineheight` variables in `_core.scss`. Heading sizes are calulated with the Golden Ratio based on the body font size, like this:

	h1{
		font-size: $fontsize*1.618*1.618;
		margin-bottom: $lineheight;
		line-height: $lineheight*2;
	}
	


# Outro

Feel free to fork or get in touch with me [here](http://johanbrook.com "Contact"). 

I plan on constantly updating Dyluni according to current best practices, and I once again happily receive suggestions and contributions.