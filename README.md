# Dyluni Framework

By Johan Brook

## What is this?

Dyluni is a site framework, sort of a boilerplate, which provides a basic site structure in HTML and CSS. It's written in HTML5 and uses [Sass](http://sass-lang.com "Sass") (which is the real power of Dyluni). 

The framework evolved from my own work: after seeing myself copying code into the same files over and over again, I decided to extract the stuff I was reusing and format it into a site structure I just could drop into new projects and start using. 

## How to use Dyluni

When you first clone or download the framework you'll see this folder structure:

	css/
	fonts/
	images/
	index.html
	js/
	README.md
	sass/

The index.html and sass folder are the interesting guys. Don't worry about the `css` folder since it's only CSS generated from the Sass files. However, there are some patches for Internet Explorer in pure CSS in there, which could be interesting later on.

Just drop this structure into a new project folder, or implement it with your CMS or server framework of choice. If you're using Compass or some Sass plugin in Rails, the Sass files will live inside the `app/stylesheets/` directory. In this case `master.scss` is compiled into `master.css` in the `public/stylesheets/compiled/` directory. 

### Compiling Sass

For a crash course in Sass, head over to [the project's website](http://sass-lang.com/tutorial.html).

That'll give you [Haml](http://haml-lang.com/) and Sass. So, from now on you can forget regular CSS files. We'll now work with the `.scss` extension. Sass is really just an extension of CSS, so every CSS file is a valid SCSS file. You write styles in `.scss` files and then compile them into `.css` files (which you don't have to touch after compiling them). When I begin my work session I start with typing this in a terminal window:

	sass --watch sass:css

Now Sass will watch the `.scss` files in the `sass` directory and automatically compile and generate `.css` files. Although, in Dyluni this is actually not true – only `master.scss` is generated to regular CSS. Files prefixed with and underscore (_) are not compiled into individual files. This is very useful for partials which you don't want to be individual CSS files, since they are imported into the `_main.scss` and `master.scss` amongst others. So it's basically only the master Sass file that is generated to regular CSS.

In production I usually minify my CSS. That's possible by appending a --style parameted to the `sass` command:

	sass --watch sass:css --style compressed

Now you'll get nice and compressed CSS.

### Index.html

The main HTML file provides a basic setup for a new site. There are essential stuff in the `<head>` as well as a nice site structure.
	
### sass/

In here we've got the goodness. `master.scss` is the master (duh) file which is generated into `master.css` – the only CSS file `index.html` imports. The power of Sass makes it possible to import partials, prefixed with an underscore in the filename, without having the server to make requests. 

- `_core.scss` is something of a configuration file. In there you can set variables and other small things related to the site. Sometimes you'll have to tweak things inside of there, sometimes not.
- `_main.scss` is the main, site specific style file, where you'll write everything related to your current project. Feel free to import partials inside of it (`_header.scss` and `_footer.scss` is already imported by default).
- `_print.scss` includes styles for printers. Throw a glance in there before deploying your site.
- `_responsive.scss` is a cool file in which you can define responsive styles for mobile devices. Depending on the width of the browser window, you can change layout, colors, font sizes – everything. You can pull off really advanced stuff with it.
- `library/`
	- `_reset.scss` is a HTML5 reset with some extra stuff by me.
	- `_utils.scss` includes some Sass mixins and helper classes. You shouldn't have to touch it, unless you want to add mixins or code for reuse. I usually keep site specific mixins in `_main.scss`.
	- `_hashgrid.scss` is the "config" file for [Hashgrid](http://hashgrid.com) which I use to align the design to a grid. Dyluni is based on a 980px wide, six column responsive grid. If you do any major changes in width of the body container, you may adjust stuff in this file. As you can see, I've used Sass variables to keep things in order.
- `master.scss` is where all other files are imported into.
- `partials/`
	- `_footer.scss, _header.scss, _frontpage.scss ..` is where you can separate your Sass into individual files, which makes the development easier. Instead of scanning through a huge `_main.scss` you can divide them into logical sections. I usually use too many partials over too few.
	
### Responsive styles

I've included a couple of media queries (in `_responsive.scss`) where you may customize the appearance to the viewport. It's also maintaining the grid all the way down (six columns, four columns, three columns, two columns). Play around with it and be amazed.

### Hashgrid

I replaced my own hacky solution of viewing the baseline and vertical grid on the page with the mature [Hashgrid](http://hashgrid.com). It's built by typographic masters and even provides the functionality of creating several grids. I often create one grid for each media query (not included in Dyluni) to make everything add up. Please see the Hashgrid documentation for fine tuning.


### Javascript

I've kept the JS to a minimum since I'm not that fond of using scripts to enhance too much of a site. jQuery is of course included, as well as a smoothscroll script when navigating with text anchors (I think it's great UX). The general setup and dump file is `js/dyluni.js`.


## Outro

Dyluni is based on the HTML5 Boilerplate project (especially the HTML markup), but with some extra stuff added by me, and of course powered by Sass. Feel free to fork or get in touch with me [here](http://johanbrook.com "Contact"). 

I plan on constantly updating Dyluni according to current best practices, and I once again happily recieve suggestions and contributions.

I'm also sharing my [Textmate theme with support for Sass syntax highlighting](https://github.com/johanbrook/dyluni-textmate-theme).