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

It's the `index.html` and the `sass` folder who are most important. In those I do the most work. Don't worry about the `css` folder, since it's only CSS generated from the Sass files. However, there are some patches for Internet Explorer in pure CSS in there, which could be interesting later on.

### Index.html

The main HTML file provides a basic setup for a new site. There are essential stuff in the `<head>` as well as a nice site structure.
	
### sass/

In here we've got the goodness. `master.scss` is the master (duh) file which is generated into `master.css` – the only CSS file `index.html` imports. The power of Sass makes it possible to import partials, prefixed with an underscore in the filename, without having the server to make requests. 

- `_core.scss` is something of a configuration file. In there you can set variables and other small things related to the site. Sometimes you'll have to tweak things inside of there, sometimes not.
- `_main.scss` is the main, site specific style file, where you'll write everything related to your current project. Feel free to import partials inside of it (`_header.scss` and `_footer.scss` is already imported by default).
- `_print.scss` includes styles for printers. Throw a glance in there before deploying your site.
- `_repsonsive.scss` is a cool file in which you can define responsive styles for mobile devices. Depending on the width of the browser window, you can change layout, colors, font sizes – everything. You can pull off really advanced stuff with it.
- `library/`
	- `_reset.scss` is a HTML5 reset with some extra stuff by me.
	- `_utils.scss` includes some Sass mixins and helper classes. You shouldn't have to touch it, unless you want to add mixins or code for reuse. I usually keep site specific mixins in `_main.scss`.
- `master.scss` is where all other files are imported into.
- `partials/`
	- `_footer.scss, _header.scss, _frontpage.scss ..` is where you can separate your Sass into individual files, which makes the development easier. Instead of scanning through a huge `_main.scss` you can divide them into logical sections. I usually use too many partials over too few. But mind the amount – you don't want to make them too bloated!

## Outro

Dyluni is largely based on the HTML5 Boilerplate project, but with some extra stuff added by me, and of course powered by Sass. Feel free to fork or get in touch with me [here](http://johanbrook.com/about/contact "Contact"). 