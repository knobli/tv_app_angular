(function(){
    var app = angular.module('memberApp', []);
  	
  	app.directive("memberList", ['$http', function($http) {
      return {
        restrict: 'E',
        templateUrl: "template/member-list.html",
        scope: {
            myModel: '='
        },
        controller: function(){
                        $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
				    	var memberController = this;
				    	this.members = [];
				    	$http.post(getAPIUrl() + '/member.php' , $.param({memberId: getUserId()})).
                            success(function(data){
				    		    memberController.members = data;
				    	    });
        },
        controllerAs: "memberCtrl"
      };
    }]);
    
})();
