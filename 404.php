<!doctype html>
<html lang="en">
<?php include 'app/includes/head-404.inc.php'; ?>
<body>

<div ng-app="errorApp">
    <?php include 'app/includes/404.inc.php'; ?>
</div>

<script>
    (function(){
        require(['error', function(){

        }]);
    }());
</script>

</body>
</html>