<?php
if (count(get_included_files()) == 1) {
    header('Location: ../index.php', true, 301);
    exit;
}
?>
<div id="admintoolsPage">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title"><?= $categoryName ?></h3>
        </div>
        <div class="panel-body">
            <table class="table table-striped">
                <tbody>
                    <?php foreach ($myTools as $tool) { ?>
                        <tr>
                            <td>
                                <a href="<?= ADMIN_URL . $typeDir . "/$toolFile?tool=" . $tool['directory'] ?>">
                                    <?= $tool['name'] ?>
                                </a>
                            </td>
                            <td>
                                <p><?= $tool['description'] ?></p>
                            </td>
                        </tr>
                    <?php } ?>
                </tbody>
            </table>
            <hr />
            {TOOL_LIST}
        </div>
    </div><!-- /.panel.panel-default -->
</div><!-- /#admintoolsPage -->
