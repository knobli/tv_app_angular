(function(){
    var app = angular.module('memberApp', []);
  	
  	app.directive("memberList", ['$http', function($http) {
      return {
        restrict: 'E',
        templateUrl: "member-list.html",
        scope: {
            myModel: '='
        },
        controller: function(){
				    	var memberController = this;
				    	this.members = [];
				    	$http.get(getAPIUrl() + '/member.php').success(function(data){
				    		memberController.members = data;
				    	});        	
        },
        controllerAs: "memberCtrl"
      };
    }]);
    
})();
