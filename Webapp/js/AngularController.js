
    var arkhives = angular.module('Arkhives', ['ngRoute']);

    // configure our routes
    arkhives.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    arkhives.controller('mainController', function($scope) {
        // create a message to display in our view
    	Arkhives.message = 'Everyone come and see how good I look!';
    });

    arkhives.controller('aboutController', function($scope) {
    	Arkhives.message = 'Look! I am an about page.';
    });

    arkhives.controller('contactController', function($scope) {
    	Arkhives.message = 'Contact us! JK. This is just a demo.';
    });