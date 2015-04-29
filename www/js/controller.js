angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, $cordovaCalendar) {

    $scope.createEvent = function() {
        $cordovaCalendar.createCalendar({
            calendarName: 'Cordova Calendar',
            calendarColor: '#FF0000'
        }).then(function (result) {
            // success
        }, function (err) {
            // error
        });
    }

    $scope.createEvent = function() {
        $cordovaCalendar.createEvent({
            title: 'Camsel Workshop',
            location: 'Camsel',
            notes: 'Try to make Tracy happy.',
            startDate: new Date(2015, 3, 28, 10, 30, 0, 0, 0),
            endDate: new Date(2015, 3, 28, 12, 0, 0, 0, 0)
        }).then(function (result) {
            // success
            alert("Camsel Workshop added to calendar.");
        }, function (err) {
            // error
        });
    }
});