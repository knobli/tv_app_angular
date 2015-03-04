(function(){
    var app = angular.module('meetingApp', ['memberApp', 'helpDirectivesApp']);

    app.controller('MeetingController', function(){
        this.meeting = {};
    });

})();