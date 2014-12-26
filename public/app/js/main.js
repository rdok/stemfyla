/**
 * Credits due: http://www.nickkaye.com/info/
 *
 * @author Rizart Dokollari
 * @version 12/3/2014
 */

(function () {

    var app = angular.module('stemfylaApp', ['ngRoute']);

    /**
     * Configure routes
     */
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider

            // Home
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "PageController"
            })

            // Pages
            .when("/material",
            {
                templateUrl: "partials/material.html",
                controller: "PageController"
            })
            .when("/catalog",
            {
                templateUrl: "partials/catalog.html",
                controller: "PageController"
            })
            .when("/live-events",
            {
                templateUrl: "partials/live-events.html",
                controller: "PageController"
            })
            .when("/contact",
            {
                templateUrl: "partials/contact.html",
                controller: "PageController"
            })

            // else 404
            .otherwise("/404",
            {
                templateUrl: "partials/404.html",
                controller: "PageController"
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    });

    /**
     * Control all pages
     */
    app.controller('PageController', function (/* $scope, $location, $http */) {
        console.log("Page Controller reporting for duty.");

    });

    app.directive('partialHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/header.html'
        };
    });


    app.directive('partialFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/footer.html'
        };
    });

})();