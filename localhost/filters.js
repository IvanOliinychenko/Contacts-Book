(function(){
    var app = angular.module('filters',[]);

    app.controller('sortController',['$scope','$filter', function($scope,$filter){

        //sort by and reverse
        this.order = function(predicate, reverse) {
            $scope.contactBook.contacts = $filter('orderBy')($scope.contactBook.contacts, predicate, reverse);
        };

        this.findOnMap = function(address) {
            return 'http://maps.google.com/?q=' + address;
        };

        this.makeCall = function(tel) {
            return 'tel:' + tel;
        };

        this.calcAge = function(age) {

            //milliseconds from 1 jan 1970
            var currentDate = (new Date).getTime();
            var birthDay = new Date( ($filter('date')(age,'yyyy')) ,($filter('date')(age,'M')) , ($filter('date')(age,'dd')) );
            var birthDayToDisplay = $filter('date')(age,'yyyy-MM-dd');

            //age difference in milliseconds
            var ageDifMs = currentDate - birthDay.getTime();

            // miliseconds from epoch
            var ageDate = new Date(ageDifMs);

            //calculating how old is person
            var yearsOld = Math.abs(ageDate.getUTCFullYear() - 1970);

            return yearsOld+" ("+birthDayToDisplay+")";
        };

        this.birthDaySoon = function(age) {
            var currentDate = new Date;
            var birthdayDate = new Date( ($filter('date')(age,'yyyy')) ,($filter('date')(age,'M')) , ($filter('date')(age,'dd')) );

            //calculate birthday date
            birthdayDate.setFullYear(currentDate.getFullYear());

            //to get correct difference, because we have 1-12 in age. We will get 1-12 months instead 0-11
            currentDate.setMonth(currentDate.getMonth()+1);

            //calculate birthday date if birthday in next year
            if(birthdayDate-currentDate < 0){
                birthdayDate.setFullYear(currentDate.getFullYear()+1);
            }

            //days left to birthday. +2 to offset current day and birthday day
            var dataDiff =  Math.floor((birthdayDate-currentDate) / (1000*60*60*24))+2; //milliseconds*seconds*minutes*hours

            //if < 30 days to birthday apply class warning. if < 15 days apply class danger
            if ( dataDiff <= 30 && dataDiff >= 0){
                if (dataDiff <= 15){
                    return 'danger';
                }
                return 'warning';
            }
        };
    }]);
})();
