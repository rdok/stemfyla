/**
 * @author Rizart Dokollari
 * @version 12/3/2014
 */

(function () {
    var app = angular.module('stemfylaApp', []);

    app.directive('appNavBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/nav-bar.html'
        };
    });

    app.directive('appFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/footer.html'
        };
    });
})();