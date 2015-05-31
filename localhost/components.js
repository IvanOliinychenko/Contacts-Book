(function(){
    var app = angular.module('components',[]);

    app.directive("contactsList", function() {
        return {
            restrict: "E",
            templateUrl: "list.html"
        };
    });

    app.directive("progressBar", function() {
        return {
            restrict: "E",
            templateUrl: "loader.html"

        };
    });

})();
