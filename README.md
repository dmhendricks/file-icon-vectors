[![Author](https://img.shields.io/badge/author-Daniel%20M.%20Hendricks-lightgrey.svg?colorB=9900cc )](https://www.danhendricks.com?utm_source=github.com&utm_medium=campaign&utm_content=button&utm_campaign=file-icon-vectors)
[![Release](https://img.shields.io/github/release/dmhendricks/file-icon-vectors.svg)](https://github.com/dmhendricks/file-icon-vectors/releases)
[![License](https://img.shields.io/badge/license-GPLv2-yellow.svg)](https://raw.githubusercontent.com/dmhendricks/file-icon-vectors/master/LICENSE)
[![Total Downloads](https://img.shields.io/packagist/dt/dmhendricks/file-icon-vectors.svg)](https://packagist.org/packages/dmhendricks/file-icon-vectors)
[![Bower](https://img.shields.io/bower/v/file-icon-vectors.svg)](https://github.com/dmhendricks/file-icon-vectors)
[![CloudVerve, LLC](https://img.shields.io/badge/style-CloudVerve-green.svg?style=flat&label=get%20hosted&colorB=AE2A21)](https://2lab.net?utm_source=github.com&utm_medium=campaign&utm_content=button&utm_campaign=file-icon-vectors)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/danielhendricks)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dmhendricks/file-icon-vectors.svg?style=social)](https://twitter.com/danielhendricks)

# File Vector Icons

A collection of file type vector (SVG) icons.

**This project is currently a work-in-progress.**

* If you have [feedback, bugs or requests](https://github.com/dmhendricks/file-icon-vectors/issues), please feel free to post them.
* I paid to license many of the icons used in these sets. [Donations](https://paypal.me/danielhendricks) are appreciated.

## Icon Sets

Currently, there are two icon sets in the `icons` directory:

* **Classic** - An expansion of the Redboot [free-file-icons](https://github.com/redbooth/free-file-icons) designs.
* **Vivid** - Inspired by [Erlen Masson](https://www.sketchappsources.com/svg-resource/1856-vector-file-type-icons-sketch-freebie-resource.html)

#### Demo: [View Icon Sets](https://danhendricks.com/demo/github/dmhendricks/file-icon-vectors/demo/)

## Installation

To install with Bower:

```
bower install file-icon-vectors
```

To install with Composer:

```
composer require dmhendricks/file-icon-vectors
```

## Usage

To display a file icon, simply link to one or both of the icon set CSS files in the `css` directory:

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

## TODO

* Fix inconsistent sizing issues in classic set
* Add additional Adobe Suite, Microsoft Office icons
* Add to Bower, NPM, CDN
* Add additional libraries, such as square icons, et al

## Legal Stuff

All icons used in the creation of this library were licensed MIT or purchased royalty-free, with exceptions noted below.

If you feel that you have a copyright issue, please feel free to [post it](https://github.com/dmhendricks/file-icon-vectors/issues).

### Attribution

* [Android icon](https://www.flaticon.com/free-icon/android-logo_61120) made by [Google](https://www.flaticon.com/authors/google) via [flaticon.com](https://www.flaticon.com/)
* [BitTorrent icon](http://www.icons101.com/icon/id_73504/setid_2388/Minimalist_Black_Icons__WIP_by_noshery/bittorrent) made by [noshery](http://www.icons101.com/artist/id_2388/noshery) from [icons101.com](http://www.icons101.com/)
* [GIMP Icon](https://icons8.com/icon/39867/gimp#filled) provided by [Icons8 LLC](https://icons8.com/)
* Vivid set [Folder Icon](https://www.iconfinder.com/icons/173016/close_folder_icon) made by [Snip Master](https://www.iconfinder.com/snipicons) from [Iconfinder](https://www.iconfinder.com)
