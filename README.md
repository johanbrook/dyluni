# Dyluni Framework

By Johan Brook

## What is this?

Dyluni is a site framework, sort of a boilerplate, which provides a basic site structure in HTML and CSS. It's written in HTML5 and uses [Sass](http://sass-lang.com "Sass") (which is the real power of Dyluni). 

The framework evolved from my own work: after seeing myself copying code into the same files over and over again, I decided to extract the stuff I was reusing and format it into a site structure I just could drop into new projects and start using. 

## How to use Dyluni

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

### Compiling Sass

For a crash course in Sass, head over to [the project's website](http://sass-lang.com/tutorial.html).

When I begin my work session I start with this in a terminal window (when standing in the site's root directory):

	sass --watch sass:css

Now Sass will watch the `.scss` files in the `sass` directory and automatically compile and generate `.css` files. Although, in Dyluni this is actually not true – only `master.scss` is generated to regular CSS. Files prefixed with and underscore (_) are not compiled into individual files. This is very useful for partials which you don't want to be individual CSS files, since they are imported into the `_main.scss` and `master.scss` amongst others. So it's basically only the master Sass file that is generated to regular CSS.

In production I usually minify my CSS. That's possible by appending a --style parameted to the `sass` command:

	sass --watch sass:css --style compressed

Now you'll get nice and compressed CSS.

## Index.html

The main HTML file provides a basic setup for a new site. There are essential stuff in the `<head>` as well as a nice site structure. 
	
## SCSS

In here we've got the goodness. `master.scss` is the master (duh) file which is generated into `master.css` – the only CSS file `index.html` imports. The power of Sass makes it possible to import partials, prefixed with an underscore in the filename, without having the server to make requests. 

Import scheme:

	master.scss
		utils
		reset
		core
			hashgrid
		main
			header
			frontpage
			forms
			sidebar
		responsive
		print
	

### `master.scss`

The master file of doom. Every SCSS file below is imported into this file, which in turn is compiled into `master.css`. This is therefore the CSS file you refer from the HTML file. 


### `_core.scss`

Basically the SCSS config file. In here you'll define site specific mixins, color variables, font stacks, helper classes, and other global styles for your project. 

### `_main.scss`

This is your main site style file. Start designing from here, so to speak. I recommend you to use Sass's nifty `@import` feature which lets you branch out your project into modules. Great for organization and re-use (i.e. don't dump all styles in here, dumbnut).

### `_print.scss`

What you think it is. Print styles.

### `_responsive.scss`

Styles for responsive web design. I've specified a couple of widths I often use (iPad, small screens, and iPhone-sized screens) but feel free to write your own. 

When resizing the browser window the site's body container will shrink to a four, three and two column grid respectively. 

Please note that the styles for larger smartphone screens will be inherited down to the iPhone/smartphone media query (there's no min-width property you see). That is because these two media queries tend to be very much alike. Just override stuff in the iPhone media query.


### `_hashgrid.scss`

I replaced my own hacky solution of viewing the baseline and vertical grid on the page with the mature [Hashgrid](http://hashgrid.com). It's built by typographic masters and even provides the functionality of creating several grids. I often create one grid for each media query (not included by default in Dyluni) to make everything add up. Please see the Hashgrid documentation for fine tuning. 

To view the grid, open up `index.html` and simply press and hold **'G'** on your keyboard. Dyluni is built by default with a six column 980px wide grid, which you'll see when viewing for the first time.

### `_reset.scss` and `_utils.scss`

Slightly modified Meyer reset for HTML5 goes in `_reset.scss`. 

In the utils file global mixin definition live, such as cross-browser box-shadow, border-radius and more handy stuff which makes your life easier. I recommend you to explore this file to see how it may help you.

### The `pages` and `partials` directories

Since the `@import` rule of Sass makes it easy to organize your project without having to maintain several CSS files which have to be referred from the HTML, you should branch out your project in these directories. Simply put header styles in `_header.scss` and styles for the front page in `_frontpage.scss` etc. It's great for maintenance as well as namespacing.


### Javascript

I've kept the JS to a minimum since I'm not that fond of using scripts to enhance too much of a site. jQuery is of course included, as well as a smoothscroll script when navigating with text anchors (I think it's great UX). The general setup and dump file is `js/dyluni.js`.


## Outro

Dyluni is based on the HTML5 Boilerplate project (especially the HTML markup), but with some extra stuff added by me, and of course powered by Sass. Feel free to fork or get in touch with me [here](http://johanbrook.com "Contact"). 

I plan on constantly updating Dyluni according to current best practices, and I once again happily recieve suggestions and contributions.

I'm also sharing my [Textmate theme with support for Sass syntax highlighting](https://github.com/johanbrook/dyluni-textmate-theme).