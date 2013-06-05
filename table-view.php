<?php require_once('_head.php') ?>
<?php require_once('_device_top.php') ?>

<div class="cl-page cl-page-table-view">
  <div class="cl-bar-title">
      <a href="index.php" class="cl-btn"><span><span>Back</span></span></a>
      <div class="cl-title">Table view</div>
  </div>
  <div class="cl-content">
    <h3 class="cl-table-title">Regular table view</h3>
    <div class="cl-table">
      <div class="cl-table-cell">
        <a href="#">
          <span class="label">Item 1</span>
        </a>
      </div>
      <div class="cl-table-cell">
        <a href="#">
          <span class="label">Item 2</span>
        </a>
      </div>
    </div>

    <h3 class="cl-table-title">Regular table view with disclosure arrows</h3>
    <div class="cl-table">
      <div class="cl-table-cell">
        <a href="#">
          <span class="label">Item 1</span>
          <i class="icon icon-ios-arrow-right"></i>
        </a>
      </div>
      <div class="cl-table-cell">
        <a href="#">
          <span class="label">Item 2</span>
          <i class="icon icon-ios-arrow-right"></i>
        </a>
      </div>
    </div>
    <h3 class="cl-table-title">Regular table view with disclosure arrows and help text near disclosure</h3>
    <div class="cl-table">
      <div class="cl-table-cell">
        <a href="#">
          <i class="icon icon-ios-arrow-right"></i>
          <span class="label">Item 1</span>
          <span class="disclosure-help">Note</span>
        </a>
      </div>
      <div class="cl-table-cell">
        <a href="#">
          <i class="icon icon-ios-arrow-right"></i>
          <span class="label">Item 2</span>
          <span class="disclosure-help">Note</span>
        </a>
      </div>
    </div>
    <h3 class="cl-table-title">Regular table view with icons in front of labels</h3>
    <div class="cl-table">
      <div class="cl-table-cell">
        <a href="#">
          <i class="icon icon-ios-square"></i>
          <span class="label">Item 1</span>
          <i class="icon icon-ios-arrow-right"></i>
        </a>
      </div>
    </div>
    <h3 class="cl-table-title-extended">Extended table view</h3>
    <div class="cl-table__extended">
      <div class="cl-table-cell">
        <a href="#">
          <span class="label">Item 1</span>
        </a>
      </div>
    </div>
  </div>
</div>

<?php require_once('_device_bottom.php') ?>
<?php require_once('_footer.php') ?>
