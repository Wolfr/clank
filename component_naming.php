<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="cl-page">
  <div class="cl-bar-title">
    <a href="index.php" class="cl-btn"><span><span>Back</span></span></a>
    <div class="cl-title">Component naming</div>
  </div>
  <div class="cl-content">
    <div class="cl-article">
      <p>Every component should be prefixed with <code>cl-</code>:</p>
    </div>
    <pre class="cl-code-example"><code>.cl-accordion</code></pre>
    <div class="cl-article">
      <p>This is verbose but the only way to not clash with other libraries until Web Components are commonplace.</p>
      <p>A child element dependent on the component should be added with a double hyphen:</p>
    </div>
    <pre class="cl-code-example"><code>.cl-accordion__item</code></pre>
    <div class="cl-article">
      <p>State should be added with a double underscore:</p>
    </div>
    <pre class="cl-code-example"><code>.cl-accordion__item--disabled</code></pre>
    <div class="cl-article">
      <p>This prevents nesting in SCSS.</p>
      <p>This naming technique has been coined <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">BEM</a>.</p>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>