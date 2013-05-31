<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="cl-page cl-page-detail">
  <div class="cl-bar-title">
    <div>
      <a href="index.php" class="cl-btn"><span><span>Back</span></span></a>
      <div class="cl-title">Headers &amp; Footers</div>
    </div>
  </div>
  <div class="cl-content cl-article">
    <div class="cl-article__inner">
      <p class="intro">This page is about the headers and footers component. Adding headers and footers is as simple as adding specific markup.</p>
      <h4>Adding a header</h4>
      <p>Add header markup as a direct descendant of a <code>.cl-page</code>:</p>
      <pre class="cl-code-example">&lt;div class=&quot;bar-title&quot;&gt;&lt;/div&gt;</pre>
      <h4>Adding a footer</h4>
      <p>Add a footer as a direct descendant of a  <code>.cl-page</code>:</p>
      <pre class="cl-code-example">&lt;div class=&quot;bar-footer&quot;&gt;&lt;/div&gt;</pre>
      <h4>Adding another bar</h4>
      <p>Add a bar as direct descendant of <code>.content</code>:</p>
      <pre class="cl-code-example">&lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;</pre>
      <p>To easily create new pages, see <a href="generators.php">generators</a>.</p>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>