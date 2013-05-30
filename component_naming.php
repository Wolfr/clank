<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="page page-welcome">
  <div class="bar-title">
    <div class="title">Component naming</div>
  </div>
  <div class="content cl-article">
    <div class="cl-article__inner">
      <p>Every component should be prefixed with <code>cl-</code>:</p>
      <pre><code>.cl-accordion</code></pre>
      <p>This is verbose but the only way to not clash with other libraries until Web Components are commonplace.</p>
      <p>A child element dependent on the component should be added with a double hyphen:</p>
      <pre><code>.cl-accordion__item</code></pre>
      <p>State should be added with a double underscore:</p>
      <pre><code>.cl-accordion__item--disabled</code></pre>
      <p>This prevents nesting in SCSS.</p>

      <p>This naming technique has been coined <a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">BEM</a>.</p>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>