---
  layout: post
  title: Towards 0.1 - update 2
  date: 2013-06-24 12:00:00 GMT+1
---

<p>So, Clank is evolving at a rapid pace. The goal of the 0.1 release has mostly been reached with the addition of new components. The only bigger todo left is implementing an improved homepage design.</p>

### New components: forms, article, data table, sliders, toggles

<table class="table table-striped">
  <tr>
    <td><a href="/demos/article.html">Article</a></td>
    <td>Provides styles for articles</td>
  </tr>
  <tr>
    <td><a href="/demos/forms.html">Forms</a></td>
    <td>Provides styles for forms</td>
  </tr>
  <tr>
    <td><a href="/demos/data-table.html">Data table</a></td>
    <td>Provides styles for data table styling (similar to Bootstrap tables)</td>
  </tr>
  <tr>
    <td><a href="/demos/sliders.html">Sliders</a></td>
    <td>Provides styles for slideshows (similar to Ratchet sliders)</td>
  </tr>
  <tr>
    <td><a href="/demos/sliders.html">Toggles</a></td>
    <td>Provides styles for on/off toggles (similar to Ratchet toggles)</td>
  </tr>
</table>

<p><img class="shaded" src="/images/blog/forms.png" alt="Clank forms on iPhone 5"></p>

### 0.2 aims aka the future of Clank

I've been thinking about the ways Clank will evolve. These are some of the things I'm thinking about:

* A way to switch between pages without reloading the page, <a href="http://pjax.heroku.com/">pjax</a> style
* Page transitions: implement CSS animations between pages
* Choose a lightweight JS framework for basic DOM manipulation (<a href="http://zeptojs.com/">zepto.js</a>?)
* Implement a working "radio list" (see <a href="/demps/forms.html">radio button implementation</a>)
* Improve the <a href="/documentation.html#skinning-mechanism">skinning mechanism</a> so it accounts for all kinds of color choices
* Make multi touch demos work on desktop (e.g. <a href="https://github.com/maker/ratchet/blob/master/docs/js/fingerblast.js">fingerblast.js</a>)

### This blog's theme is open source

The theme of this blog has been <a href="http://wolfslittlestore.be/2013/06/cactus-a-theme-for-jekyll/">open sourced</a>.

### Release date

Clank 0.1 will be released by the end of the month.