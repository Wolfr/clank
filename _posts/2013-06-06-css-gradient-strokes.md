---
layout: post
title: CSS Gradient Strokes
---

<p>If you look closely at iOS buttons, you’ll see that they actually have a gradient running in their strokes:</p>
<p><img src="http://getclank.files.wordpress.com/2013/06/grad-strokes.png?w=584"></p>
<p>There is no CSS gradient stroke feature in CSS. Fortunately, we can fake it with pseudo elements.</p>
<p>In the first version of <a href="https://github.com/Wolfr/clank">Clank</a>, I had extra elements around my buttons to make it work properly:</p>
{% highlight html %}
  <a class="btn"><span><span>Hello</span></span></a>
{% endhighlight %}
<p>This is problematic for framework adoption since it’s another thing people will have to learn.</p>
<p>This pretty messy code since changed to:</p>

{% highlight html %}
  <a class="cl-btn">Hello</a>
{% endhighlight %}

<p>I did manage the gradient strokes by hooking them to the :before and :after elements. E.g. let’s say you have a button with a green to dark green gradient background:</p>

{% highlight css %}
.cl-btn {
  background: linear-gradient(to bottom, green 0%, darkgreen 100%); /* W3C */
}{% endhighlight %}

<p>If we include two pseudo elements that contains 100% of the space of the original element, we can use these to fake our new background:</p>

{% highlight css %}
.cl-btn:before,
.cl-btn:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  min-width: 100%;
  white-space: nowrap;
}{% endhighlight %}

<p>By using a negative z-index we can order the :before and :after elements:</p>

{% highlight css %}
.cl-btn:after {
  top: -1px;
  left: -1px;
  padding: 1px; /* This makes for 1px gradient border */
  z-index: -2;
}

.cl-btn:before {
  top: 0;
  left: 0;
  padding: 0;
  z-index: -1;
}{% endhighlight %}
<p>Because we used negative z-index, create a new stacking context on .cl-btn so the elements don’t go below the original “page”.</p>

{% highlight css %}
.cl-btn {
    // Create new stacking context for :before and :after
    z-index: 1;
}{% endhighlight %}


<p>Now if we apply our backgrounds to the new pseudo elements, we have gradient borders without extra markup:</p>
{% highlight css %}.cl-btn:before {
    background: linear-gradient(to bottom, green 0%, darkgreen 100%); /* W3C */
}

.cl-btn:after {
    background: linear-gradient(to bottom, darkgreen 0%, reallydarkgreen 100%); /* W3C */
}{% endhighlight %}
<p>Now, the reality is a bit more complicated.</p>
<p>A simple implementation without z-indexing can be found <a href="https://github.com/Wolfr/css-gradient-strokes">here</a> (<a href="http://www.wolfslittlestore.be/css-gradient-strokes/">demo</a>).</p>
<p>If you’re feeling brave, poke around in the SCSS source for Clank <a href="https://github.com/Wolfr/clank/blob/master/scss/components/_buttons.scss">here</a>.</p>
