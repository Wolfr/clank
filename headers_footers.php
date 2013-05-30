<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="page page-detail">
  <div class="bar-title">
    <div>
      <a href="index.php" class="btn"><span><span>Back</span></span></a>
      <div class="title">Headers &amp; Footers?</div>
    </div>
  </div>
  <div class="content cl-article">
    <div class="cl-article__inner">
      <p class="intro">This page is about the headers and footers component.</p>
      <h4>Adding a header</h4>
      <p>Add header markup as a direct descendant of a <code>.page</code>:</p>
<pre>&lt;div class=&quot;bar-title&quot;&gt;&lt;/div&gt;</pre>
      <h4>Adding a footer</h4>
      <p>Add a footer as a direct descendant of a  <code>.page</code>:</p>
      <pre>&lt;div class=&quot;bar-footer&quot;&gt;&lt;/div&gt;</pre>
      <h4>Adding another bar</h4>
      <p>Add a bar as direct descendant of <code>.content</code>:</p>
      <pre>&lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;</pre>
      
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>