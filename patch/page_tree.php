<?php
/**
 * WebsiteBaker Community Edition (WBCE)
 * Way Better Content Editing.
 * Visit http://wbce.org to learn more and to join the community.
 *
 * @copyright Christian M. Stefan (Stefek)
 * @copyright WBCE Project (2015-)
 * @license GNU GPL2 (or any later version)
 */
// prevent this file from being accessed directly
if (!defined('WB_PATH'))
    die(header('Location: ../../index.php'));

// Include translation
if (is_file(WB_PATH . '/templates/fraggy-backend-theme/languages/' . LANGUAGE . '.php')) {
    require_once WB_PATH . '/templates/fraggy-backend-theme/languages/' . LANGUAGE . '.php';
} else {
    require_once WB_PATH . '/templates/fraggy-backend-theme/languages/EN.php';
}


// Include functions
require_once 'functions/renderPageTree.php';

/**
 * do the DB query to grab for all pages first
 */
$queryPages = $database->query("SELECT * FROM `" . TABLE_PREFIX . "pages` ORDER BY position ASC");
$numberOfPages = $queryPages->numRows();

$refs = array();
$pages = array();
// check if thorns wysiwyg history & draft is installed
$use_working_copy = (file_exists(WB_PATH . '/modules/wysiwyg/manage_history.php')) ? true : false;

// create $list[] Array
while ($page = $queryPages->fetchRow()) {
    $thisref = &$refs[$page['page_id']];

    $thisref['parent'] = $page['parent'];
    $thisref['root_parent'] = $page['root_parent'];
    $thisref['menu_title'] = $page['menu_title'];
    $thisref['page_title'] = $page['page_title'];
    $thisref['level'] = $page['level'];
    $thisref['visibility'] = $page['visibility'];
    $thisref['admin_groups'] = $page['admin_groups'];
    $thisref['admin_users'] = $page['admin_users'];
    $thisref['position'] = $page['position'];
    $thisref['page_id'] = $page['page_id'];
    $thisref['link'] = $page['link'];

    if ($page['parent'] == 0) {
        $pages[$page['page_id']] = &$thisref;
    } else {
        $refs[$page['parent']]['children'][$page['page_id']] = &$thisref;
    }
}

$querySettings = $database->query('SELECT `value` FROM `' . TABLE_PREFIX . 'settings` WHERE `name` = "page_level_limit"');
$settings = $querySettings->fetchRow();
$pageLevelLimit = $settings['value'];

if (count($pages) > 0) {

    ?>
    <div class="card-body">
        <div class="row">
            <div class="col-sm-6">
                <p class="small mb-0">
                    <a href="#" class="btn-collapse"><?= $TEXT['COLLAPSE_ALL'] ?></a> /
                    <a href="#" class="btn-expand"><?= $TEXT['EXPAND_ALL'] ?></a>
                </p>
            </div>
            <div class="hidden-xs col-sm-6">
                <p class="text-right small mb-0"><?= $MENU['PAGES'] ?>: <?= $numberOfPages ?></p>
            </div>
        </div>
    </div>
<?php } ?>

<div class="jsadmin"></div>
<div class="pages_list" style="display: none;">
    <table id="pageListHeader" class="table" <?= (count($pages) === 0 ? 'style="display:none;"' : '') ?>>
        <thead>
        <th class="toggle"></th>
        <th class="visibility"></th>
        <th class="title">
            <?= $TEXT['VISIBILITY'] ?> / <?= $TEXT['MENU_TITLE'] ?>
        </th>
        <th class="id d-none d-lg-table-cell">PageID</th>
        <th class="modify d-none d-xl-table-cell"></th>
        <th class="d-none d-lg-table-cell"></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="d-none d-md-table-cell"></th>
        </thead>
    </table>

    <?php if (count($pages) > 0) { ?>
        <ul class="list_pages list-unstyled" id="p0">
            <?= renderPageTree($pages, 1, $pageLevelLimit) ?>
        </ul>
    <?php } ?>

    <div class="card-body">
        <?php if (count($pages) > 0) { ?>
            <div class="row">
                <div class="col-sm-6">
                    <p class="small">
                        <a href="#" class="btn-collapse"><?= $TEXT['COLLAPSE_ALL'] ?></a> /
                        <a href="#" class="btn-expand"><?= $TEXT['EXPAND_ALL'] ?></a>
                    </p>
                </div>
                <div class="hidden-xs col-sm-6">
                    <p class="text-right small"><?= $MENU['PAGES'] ?>: <?= $numberOfPages ?></p>
                </div>
            </div>
        <?php } else { ?>
            <p class="text-center">
                <?= $TEXT['NONE_FOUND'] ?>
            </p>
            <?php
        }
        $visibilityLegends = array('public', 'hidden', 'registered', 'private', 'none', 'deleted');

        ?>
        <hr />
        <p class="h5"><?= $TEXT['VISIBILITY'] ?> (<?= $MENU['PAGES'] ?>)</p>
        <ul class="list-inline">
            <?php foreach ($visibilityLegends as $legend) { ?>
                <li class="list-inline-item">
                    <?php if ($legend === 'public') { ?>
                        <i class="fa fa-fw fa-eye"></i>
                    <?php } else if ($legend === 'private') { ?>
                        <i class="fa fa-fw fa-eye-slash"></i>
                    <?php } else if ($legend === 'registered') { ?>
                        <i class="fa fa-fw fa-key"></i>
                    <?php } else if ($legend === 'hidden') { ?>
                        <i class="fa fa-fw fa-lock"></i>
                    <?php } else if ($legend === 'deleted') { ?>
                        <i class="fa fa-fw fa-trash-o"></i>
                    <?php } else { ?>
                        <i class="fa fa-fw fa-ban"></i>
                    <?php } ?>
                    <?= $TEXT[strtoupper($legend)] ?>
                </li>
            <?php } ?>
        </ul>
    </div>
</div>
