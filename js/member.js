(function(){
    var app = angular.module('memberApp', []);
  	
  	app.directive("memberList", ['$http', function($http) {
      return {
        restrict: 'E',
        templateUrl: "member-list.html",
        controller: function(){
				    	var memberController = this;
				    	var selectedItem;
				    	this.members = [];
				    	$http.get(getAPIUrl() + '/member').success(function(data){
				    		memberController.members = data;
				    	});        	
        },
        controllerAs: "memberCtrl"
      };
    }]);
    
  	app.controller("memberController", ['$http', function($http) {
		var memberController = this;
		this.members = [{firstname: 'Test'}, {firstname: 'Test2'}];
		$http.get(getAPIUrl() + '/member').success(function(data){
			//memberController.members = data;
		});   
    }]);    
    
})();