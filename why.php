<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="cl-page cl-page-detail">
  <div class="cl-bar-title">
    <div>
      <a href="index.php" class="cl-btn"><span><span>Back</span></span></a>
      <div class="cl-title">Why Clank?</div>
    </div>
  </div>
  <div class="cl-content">
    <p class="cl-article-intro">Why you should use Clank for your HTML/CSS prototypes.</p>
    <div class="cl-article">
      <h4>Actually looks like a native app</h4>
      <p>We strive to actually look like a native app (as far as web tech allows us to go) instead of pseudo implementations.</p>
      <h4>Component based: pick and choose</h4>
      <p>Clank is a collection of HTML/CSS components. For example, a button is a component. It has it's own SCSS file: <code>components/_button.scss</a></code>.</p>
      <p>Every component stands on its own and can't influence other components. Clank has <a href="component_naming.php">strong rules</a> on component naming to avoid any style clashes.</p>
      <p>A good component only defines layout and provide hooks for specific looks.</p>
      <h4>Handling the look</h4>
      <p>Clank uses variables in SCSS to provide an easy way to skin Clank-made applications to your needs. Changing the global color of headers, bars and buttons is as easy as changing one variable:</p>
<pre class="cl-code-example"><code>$accent-color: red</code></pre>
      <h4>Variables for cross platform design</h4>
      <p>On Android, it makes sense to go flat and follow the look provided by ICS. On iOS, there's more gradients, strokes and subtle and inset shadows. Clank acknowledges that you are building for multiple platforms. We see each part of the design as a variable that can be altered:</p>
<pre class="cl-code-example"><code>$functional-shadows: true
$decorational-shadows: false</code></pre>
      <p>Sometimes in more detail:</p>
<pre class="cl-code-example"><code>$border-radius: 4px;</code></pre>
      <p>You also want to switch on a functional level i.e. you might want to swap out an iOS header for an Android action bar component. More on this in <a href="#">component includes</a>.</p>
      <h4>Philosophy</h4>
      <p>You should try to make your application using standard components. The standard components used in iOS and Android have a lot of work behind them. Face it, you don't have 2 weeks to perfect a <code>&lt;select&gt;</code>.</p>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>
