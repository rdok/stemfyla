/**
 * @author Rizart Dokollari
 * @version 12/3/2014
 */

(function () {
    var app = angular.module('stemfylaApp', []);

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

    app.directive('appMaterialPage', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/material.html'
        };
    });

    app.directive('appCatalogPage', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/catalog.html'
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