/**
 * @author Rizart Dokollari
 * @version 12/3/2014
 */

(function () {
    var app = angular.module('stemfylaApp', ['uiGmapgoogle-maps'])
        .config(function (uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                //    key: 'your api key',
                v: '3.17',
                libraries: 'weather,geometry,visualization'
            });
        })
        .controller("mainCtrl", function ($scope, uiGmapGoogleMapApi) {
            // Do stuff with your $scope.
            // Note: Some of the directives require at least something to be defined originally!
            // e.g. $scope.markers = []

            // uiGmapGoogleMapApi is a promise.
            // The "then" callback function provides the google.maps object.
            uiGmapGoogleMapApi.then(function (maps) {
                $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
                $scope.options = {scrollwheel: false};
            });
        });

    app.controller('AppController', function () {

    });

    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (tab) {
            if (tab === null || typeof tab === 'undefined') {
                this.tab = 1;
            } else {
                this.tab = tab;
            }
        };

        this.isSelected = function (tab) {
            return this.tab === tab;
        };
    });

    app.directive('appNavBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/nav-bar.html'
        };
    });

    app.directive('appContactPage', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/contact.html'
        };
    });

    app.directive('appFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/footer.html'
        };
    });


})();