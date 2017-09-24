[![Author](https://img.shields.io/badge/author-Daniel%20M.%20Hendricks-blue.svg)](https://www.danhendricks.com)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/danielhendricks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Total Downloads](https://img.shields.io/packagist/dt/dmhendricks/file-icon-vectors.svg)](https://packagist.org/packages/dmhendricks/file-icon-vectors)
[![Bower](https://img.shields.io/bower/v/file-icon-vectors.svg)](https://github.com/dmhendricks/file-icon-vectors)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/dmhendricks/file-icon-vectors.svg?style=social)](https://twitter.com/danielhendricks)

# File Vector Icons

A collection of file type vector (SVG) icons.

**This project is currently a work-in-progress.**

If you have [feedback, bugs or requests](https://github.com/dmhendricks/file-icon-vectors/issues), please feel free to post them.

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

Notice that the classes contain wither `flv-cla` for the Classic set or `flv-viv` for the Vivid set.

If you want to override the size of the icons, you can do so with CSS:

```
<style>
   .fiv-cla, .fiv-viv { font-size: 3em; }
</style>
```

## Goals

Before I create an initial release and add these libraries to Packagist and Bower, I want to:

* Finish up missing icons in both sets.
* For now, the OpenOffice images will have generic icons, pending approval from the Apache Foundation to use their logo. **Update: They are not cooperative.**

### Future Items

* Create a demo page for all sets
* Add the libraries to a CDN
* Add additional libraries, such as square icons, et al

## Licensing & Copyright

All original and derivative content is licensed under [The MIT License](https://github.com/dmhendricks/file-icon-vectors/blob/master/LICENSE) with the following exceptions:

* The Apache OpenOffice "orb" logo is licensed under the [Apache License 2.0](https://openoffice.apache.org/license.html) and is copyright [The Apache Software Foundation](https://www.apache.org/)

If there is an error or omission related to copyrighted work contained in this repository, please [let me know](https://github.com/dmhendricks/file-icon-vectors/issues/) and I will rectify.

## Required Attribution

* [Android icon](https://www.flaticon.com/free-icon/android-logo_61120) made by [Google](https://www.flaticon.com/authors/google) via [flaticon.com](https://www.flaticon.com/)
* [BitTorrent icon](http://www.icons101.com/icon/id_73504/setid_2388/Minimalist_Black_Icons__WIP_by_noshery/bittorrent) made by [noshery](http://www.icons101.com/artist/id_2388/noshery) from [icons101.com](http://www.icons101.com/)
