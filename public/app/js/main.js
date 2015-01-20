/**
 * Credits due: http://www.nickkaye.com/info/
 *
 * @author Rizart Dokollari
 * @version 12/3/2014
 */

(function () {

    var app = angular.module('stemfylaApp', ['ngRoute', 'ngAnimate', 'vcRecaptcha']);

    /**
     * Configure routes
     */
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider

            // Home
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "PageController",
                activeTab: '/'
            })

            // Pages
            .when("/material",
            {
                templateUrl: "partials/material.html",
                controller: "PageController",
                activeTab: '#material'
            })
            .when("/catalog",
            {
                templateUrl: "partials/catalog.html",
                controller: "PageController",
                activeTab: '#catalog'
            })
            .when("/live-events",
            {
                templateUrl: "partials/live-events.html",
                controller: "PageController",
                activeTab: '#live-events'
            })
            .when("/contact",
            {
                templateUrl: "partials/contact.html",
                controller: "PageController",
                activeTab: '#contact'
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
    app.controller('PageController', function ($scope, $route) {
        // Modify spinner animation settings
        $scope.isViewLoading = false;
        $scope.$on('$routeChangeStart', function () {
            $scope.isViewLoading = true;
        });
        $scope.$on('$routeChangeSuccess', function () {
            $scope.isViewLoading = false;
        });
        $scope.$on('$routeChangeSuccess', function () {
            $scope.isViewLoading = false;
        });

        // Expose $route to controller
        $scope.$route = $route;
    });


    app.controller('ReservationController', function ($http, $scope) {
        this.reservation = {};
        $scope.response = null;
        $scope.widgetId = null;
        $scope.model = {
            key: '6LcDrwATAAAAADJopKdn7jXOr585kHiSKmcVJ0E-'
        };

        $scope.setResponse = function (response) {
            $scope.response = response;
        };

        $scope.setWidgetId = function (widgetId) {
            $scope.widgetId = widgetId;
        };

        this.sendReservation = function () {
            this.reservation.gRecaptchaResponse = $scope.response;
            console.log("test:" + this.reservation.gRecaptchaResponse);
            $http({
                method: 'POST',
                url: "mail/requestReservation.php",
                data: this.reservation,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                success(function (data, status, headers, config) {
                    alert("success");
                    console.log(data);
                }).
                error(function (data, status, headers, config) {
                    // In case of a failed validation you need to reload the captcha
                    // because each response can be checked just once
                    vcRecaptchaService.reload($scope.widgetId);
                    console.log(data);
                });
        };
    });

    app.directive('templateHeader', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/header.html'
        };
    });


    app.directive('templateFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/footer.html'
        };
    });

    app.directive('templateSpinner', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/spinner.html'
        };
    });


    // background. credit due: http://stackoverflow.com/a/13782311
    app.directive('backImg', function () {
        return function (scope, element, attrs) {
            attrs.$observe('backImg', function () {
                element.css({
                    'background': 'url("/app/img/backgrounds/background-1920x1080.jpg") no-repeat center center fixed',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                });
            });
        };
    });
})();