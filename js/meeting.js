(function(){
    var app = angular.module('meetingApp', ['memberApp', 'helpDirectivesApp', 'ui.bootstrap']);

    app.controller('MeetingController', ['$http', function($http) {
        var meetingCtrl = this;
        meetingCtrl.meetings = [];
        $http.get(getAPIUrl() + '/meeting.php?memberId='+getUserId()).success(function (response) {
            meetingCtrl.meetings = response;
        });
        this.getSigninClass = function(status){
            if(isLoggedIn()) {
                return getMemberStatusCss(status);
            }
        }

        this.meeting = {responsible: getUserId(),
                        mail: 1
        };
        this.getLocation = function(val){
            return $http.get(getAjaxUrl() + '/auto_complete.php?type=ort&term=' + val).
                then(function(response){
                    return response.data.map(function(item){
                        return item.value;
                    });
                });
        };
        var meeting = this.meeting;
        this.submitForm = function(){
            $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
            var memberController = this;
            this.members = [];
            $http.post(getAPIUrl() + '/meeting.php' , $.param(meeting)).
                success(function(data){
                    if(data.success){
                        alert("Erfolgreich eingetragen");
                    } else {
                        alertErrorMessage("Fehler beim Erstellen: ", data.error_message);
                    }
                });
        };
    }]);

})();