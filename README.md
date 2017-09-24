[![Author](https://img.shields.io/badge/author-Daniel%20M.%20Hendricks-blue.svg)](https://www.danhendricks.com)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/danielhendricks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Total Downloads](https://img.shields.io/packagist/dt/dmhendricks/file-icon-vectors.svg)](https://packagist.org/packages/dmhendricks/file-icon-vectors)
[![Bower](https://img.shields.io/bower/v/file-icon-vectors.svg)](https://github.com/dmhendricks/file-icon-vectors)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dmhendricks/file-icon-vectors.svg?style=social)](https://twitter.com/danielhendricks)

# File Vector Icons

A collection of file type vector (SVG) icons.

**This project is currently a work-in-progress.**

* If you have [feedback, bugs or requests](https://github.com/dmhendricks/file-icon-vectors/issues), please feel free to post them.
* I paid to license many of the icons used in these sets. [Donations](https://paypal.me/danielhendricks) are appreciated.

## Usage

Currently, there are two icon sets in the `icons` directory - "Classic" (which expands on the [Redbooth](https://github.com/redbooth/free-file-icons) designs and "Vivid" (which borrows inspiration from [Erlen Masson](https://www.sketchappsources.com/svg-resource/1856-vector-file-type-icons-sketch-freebie-resource.html)).

To uae, simply link to one or both of the CSS files in the `css` directory.

```
<link rel="stylesheet" href="css/file-icon-classic.css" />
<link rel="stylesheet" href="css/file-icon-vivid.css" />
```

From there, you can use CSS classes to display the icons:

```
<span class="fiv-cla fiv-icon-ppt"></span>
<span class="fiv-cla fiv-icon-xls"></span>
<span class="fiv-viv fiv-icon-pdf"></span>
<span class="fiv-viv fiv-icon-wav"></span>
```

Notice that the classes contain either `flv-cla` for the Classic set or `flv-viv` for the Vivid set.

If you want to override the size of the icons, you can do so with CSS:

```
<style>
   .fiv-cla, .fiv-viv { font-size: 3em; }
</style>
```

If you prefer, you may also use `.fiv-size-md`, `.fiv-size-lg` and `.fiv-size-xl` to modify the icon sizes:

```
<span class="fiv-viv fiv-icon-pdf fiv-size-lg"></span>
```

## Goals

Before I create an initial release and add these libraries to Packagist and Bower, I want to:

* Finish up missing icons in both sets.

### Future Items

* Create a demo page for all sets
* Add the libraries to a CDN
* Add additional libraries, such as square icons, et al

## Legal Stuff

### Required Attribution

* [Android icon](https://www.flaticon.com/free-icon/android-logo_61120) made by [Google](https://www.flaticon.com/authors/google) via [flaticon.com](https://www.flaticon.com/)
* [BitTorrent icon](http://www.icons101.com/icon/id_73504/setid_2388/Minimalist_Black_Icons__WIP_by_noshery/bittorrent) made by [noshery](http://www.icons101.com/artist/id_2388/noshery) from [icons101.com](http://www.icons101.com/) (in the lowest quality possible)

### The Apache Un-License

[The Apache Software Foundation](https://www.apache.org/) denied my request to use their "orb" logo for the vivid set. The icons used for the classic set are licensed MIT, but they don't work well with the vivid design. As such, I used similar generic icons for [ClosedOffice](https://arstechnica.com/information-technology/2017/09/massive-equifax-hack-reportedly-started-4-months-before-it-was-detected/) on the vivid set as I did for Microsoft.
