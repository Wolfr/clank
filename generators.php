<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="cl-page cl-page-detail">
  <div class="cl-bar-title">
    <div>
      <a href="index.php" class="cl-btn">Back</a>
      <div class="cl-title">Generators</div>
    </div>
  </div>
  <div class="cl-content cl-article">
    <div class="cl-article__inner">
      <h4>What is a generator?</h4>
      <p>A generator is simply a bash script that generates code for you. This makes it easy to, for example, add new screens or components to your project.</p>
      <p><em>Note that generators are a work in progress and they do not exist yet</em>.</p>
      <h4>Available generators</h4>
      <ul>
        <li>
          <h5>generate-page.sh</h5>
          <p>Creates a new page.</p>
        </li>
        <li>
          <h5>generate-component.sh</h5>
          <p>Creates a new component.</p>
        </li>
      </ul>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>