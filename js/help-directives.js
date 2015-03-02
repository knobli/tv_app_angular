/**
 * Created by knobli on 02.03.2015.
 */
(function(){
    var app = angular.module('helpDirectivesApp', []);

    app.directive("datetimePicker", function() {
        return {
            restrict: 'E',
            templateUrl: "datetime-picker.html"
        };
    });

})();