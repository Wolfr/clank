<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="page">
  <div class="bar-title">
      <a href="index.php" class="btn"><span><span>Back</span></span></a>
      <div class="title">Table view</div>
  </div>
  <div class="content cl-article">
    <div class="cl-article__inner">
      <p>Regular table view</p>
    </div>
    <div class="cl-table-view">
      <div class="cl-table-view__cell">
        <a href="#">Item 1</a>
      </div>
      <div class="cl-table-view__cell">
        <a href="#">Item 2</a>
      </div>
    </div>
    <div class="cl-article__inner">
      <p>Regular table view with disclosure arrows</p>
    </div>
    <div class="cl-table-view">
      <div class="cl-table-view__cell">
        <a href="#">Item 1</a>
        <i class="icon icon-arrow-right"></i>
      </div>
      <div class="cl-table-view__cell">
        <a href="#">Item 2</a>
        <i class="icon icon-arrow-right"></i>
      </div>
    </div>
    <div class="cl-article__inner">
      <p>Extended table view</p>
    </div>
    <div class="cl-table-view__extended">
      <div class="cl-table-view__cell">
        <a href="#">Item 1</a>
      </div>
      <div class="cl-table-view__cell">
        <a href="#">Item 2</a>
      </div>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>
