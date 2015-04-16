(function(){
    var app = angular.module('mobileApp', ['meetingApp', 'memberApp', 'helpDirectivesApp', 'ui.bootstrap', 'ngSanitize']);

    app.filter('showHtml', ['$sce', function($sce) {
        return function(input){
            return $sce.trustAsHtml(input);
        }
    }]);

    app.filter('myDate', ['$filter', function($filter) {
        return function(input, format){
            return $filter('date')(createDate(input), format);
        }
    }]);

    app.filter('memberName', function() {
        return function(input){
            return input.firstname + ' ' + input.surname;
        }
    });

    app.controller('NewsController', ['$http', '$sce', function($http, $sce) {
        var newsCtrl = this;
        newsCtrl.news = [];
        $http.get(getAPIUrl() + '/content.php').success(function (response) {
            newsCtrl.news = response;
        });
    }]);

})();