/**
 * Credits due: http://www.nickkaye.com/info/
 *
 * @author Rizart Dokollari
 * @version 12/3/2014
 */

(function () {

    var app = angular.module('stemfylaApp', ['ngRoute', 'ngAnimate']);

    /**
     * Configure routes
     */
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider

            // Home
            .when("/", {
                templateUrl: "partials/home.html",
                controller: "PageController",
                resolve: {
                    delay: function ($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1500);
                        return delay.promise;
                    }
                }
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
    app.controller('PageController', function ($scope) {
        $scope.viewLoading = true;
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

    app.directive('showDuringResolve', function ($rootScope) {

        return {
            link: function (scope, element) {

                element.addClass('ng-hide');

                var unregister = $rootScope.$on('$routeChangeStart', function () {
                    element.removeClass('ng-hide');
                });

                scope.$on('$destroy', unregister);
            }
        };
    });


    app.directive('resolveLoader', function ($rootScope, $timeout) {

        return {
            restrict: 'E',
            replace: true,
            template: '<div class="fa fa-spinner fa-spin fa-5x" ng-hide style="position:fixed;top:50%;left:50%"></div>',
            link: function (scope, element) {

                $rootScope.$on('$routeChangeStart', function (event, currentRoute, previousRoute) {
                    if (previousRoute) return;

                    $timeout(function () {
                        element.removeClass('ng-hide');
                    });
                });

                $rootScope.$on('$routeChangeSuccess', function () {
                    element.addClass('ng-hide');
                });
            }
        };
    });
})();