function MainController($scope, $http) {
    $scope.owner = "Nick";
    $scope.projects = [];

    $http.get("/data/projects/projects.json").success(function(data) {
        $scope.projects = data;
    });
};