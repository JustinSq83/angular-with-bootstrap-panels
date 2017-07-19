angular.module('denialGuideApp', ['ui.router'])
.config (["$stateProvider", "$urlRouterProvider", "$locationProvider", function  ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.
        state({
            abstract: true,
            name: 'base',
            url: "/",
            templateUrl: "partials/navigation.html",
        }).
        state({
            name: 'base.codes',
            url: "codes",
            templateUrl: "partials/codes.html",
            controller: "DenialCodeCtrl"
        }).
        state({
            name: 'base.about',
            url: "about",
            templateUrl: "partials/about.html"
        }).
        state({
            name: 'base.resources',
            url: "resources",
            templateUrl: "partials/resources.html"
        }).
        state({
            name: 'base.contact',
            url: "contact",
            templateUrl: "partials/contact.html",
            controller: "ContactCtrl"
        });
    $urlRouterProvider.otherwise("/codes");
    $locationProvider.html5Mode(true)
}])

// .run(function($rootScope){

// //event, toState, toParams, fromState, fromParams
// $rootScope.$on('$stateChangeStart', function(){console.info("start", arguments)});

// $rootScope.$on('$stateChangeError', function(){console.info("error", arguments)});

// $rootScope.$on('$stateChangeSuccess', function(){console.info("success", arguments)})
// })

.controller('ContactCtrl', ["$scope", "ContactFactory", function($scope, ContactFactory) {
    $scope.ContactFactory = ContactFactory;
    $scope.contactSubmit = function(){
        ContactFactory.submit($scope.message, $scope.email, $scope.subject)
        .then(function(response) {
            alert("Email sent");
        }, function(response){
            console.error("There was an error submitting request")
        });
    };
}])

.factory('ContactFactory', ["$http", "$log", function($http, $log) {
    var factory = {};
    factory.submit = function(message, email, subject) {
        $log.log(message, email, subject);
        return $http.post('php/contact.php',
        {
            message: message,
            email: email,
            subject: subject
        });
    };
    return factory;
}])

.controller('DenialCodeCtrl', ["$scope", "DenialCodeFactory",function($scope, DenialCodeFactory) {
    DenialCodeFactory.getCodes().then(function(response) {
        $scope.codes = response.data;
    }, function(reason) {
        $scope.error = reason;
    });
}])

.factory('DenialCodeFactory', ["$http", "$log", function($http, $log) {
    var factory = {};
    factory.getCodes = function() {
    return $http.get('php/denial.php');
    }
return factory;
}])

.filter('denialCodeFilter', function(){
    return function(allCodes, searchTerm){
        
        if(searchTerm === undefined || searchTerm === "")
            return allCodes;

        var filtered = [];

        allCodes.forEach(function(item){
        
            var combined = item.denial_code_pre + item.denial_code_num;
        
            if( combined.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1 ){
                filtered.push(item);
            }
        
        });
        return filtered;
    }
});