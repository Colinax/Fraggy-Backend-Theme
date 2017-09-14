<?php
if (count(get_included_files()) == 1) {
    header('Location: ../index.php', true, 301);
    exit;
}
?>
<div id="settingsPage">
    <div class="row">
        <?php foreach ($myTools as $tool) { ?>
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xs-4 col-lg-3">
                                <i class="<?= $tool['icon'] ?> fa-fw fa-5x"></i>
                            </div>
                            <div class="col-xs-8 col-lg-9 text-right">
                                <div class=""><?= $tool['description'] ?></div>
                            </div>
                        </div>
                    </div>
                    <a href="<?= ADMIN_URL . $typeDir . "/$toolFile?tool=" . $tool['directory'] ?>">
                        <div class="panel-footer">
                            <span class="pull-left"><?= $tool['name'] ?></span>
                            <span class="pull-right"><i class="fa fa-fw fa-chevron-right"></i></span>
                            <div class="clearfix"></div>
                        </div>
                    </a>
                </div><!-- /.panel.panel-primary -->
            </div><!-- /.col-md-6.col-lg-4 -->
        <?php } ?>
    </div><!-- /.row -->
</div><!-- /#settingsPage -->
