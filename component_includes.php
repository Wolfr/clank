<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="page page-detail">
  <div class="bar-title">
    <div>
      <a href="index.php" class="btn"><span><span>Back</span></span></a>
      <div class="title">Component includes</div>
    </div>
  </div>
  <div class="content cl-article">
    <div class="cl-article__inner">
      <p class="intro">This page is about includes.</p>
      <h4>Component based</h4>
      <p>Clank is a collection of HTML/CSS components. For example, a button is a component. It has it's own SCSS file: <code>components/_button.scss</a></code>.</p>
      <p>Every component stands on its own. If a component has dependencies they are listed.</p>
      <p>A good component only defines layout and provide hooks for specific looks.</p>
      <h4>Handling the look</h4>
      <p>Clank uses variables in SCSS to provide an easy way to skin Clank-made applications to your needs. Changing the global color of headers, bars and buttons is as easy as changing one variable:</p>
<pre><code>$accent-color: red</code></pre>
      <h4>Variables for cross platform design</h4>
      <p>On Android, it makes sense to go flat and follow the look provided by ICS. In iOS, there's more gradients, strokes and subtle and inset shadows. Clank acknowledges that you are building for multiple platforms. We see each part of the design as a variable that can be altered:</p>
<pre><code>$functional-shadows: true
$decorational-shadows: false</code></pre>
      <p>Sometimes in more detail:</p>
<pre><code>$border-radius: 4px;</code></pre>
      <p>You also want to switch on a functional level i.e. you might want to swap out an iOS header for an Android action bar component. More on this in <a href="#">component includes</a>.</p>
      <h4>Philosophy</h4>
      <p>You should try to make your application using standard components. The standard components used in iOS and Android have a lot of work behind them. Face it, you don't have 2 weeks to perfect a <code>&lt;select&gt;</code>.</p>
      
    </div>
  </div>
  <!-- <div class="bar-footer">
    <div>
      <a href="#" class="btn"><span><span>My button</span></span></a>
      <a href="#" class="btn"><span><span>Another</span></span></a>
    </div>
  </div> -->
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>
