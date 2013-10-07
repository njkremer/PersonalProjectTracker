function MainController($scope) {
    $scope.owner = "Nick";

    $.ajax("data/projects/projects.json").done(function(data) {
        $scope.projects = eval(data)
    });
};