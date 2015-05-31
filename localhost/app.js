(function(){
var app = angular.module('contactBook',['filters','components']);

    app.controller('ContactBookController',['$http', function($http){
        var contactBook = this;

        // array that contains received daaa
        contactBook.contacts = [];

        //amount of contacts in contacts book
        contactBook.amount = 0;

        //when data is loaded loading bar == false
        contactBook.show_bar = true;

        $http.get('https://script.google.com/macros/s/AKfycbzrnl4RsjevblKaA71SbqQxfL2_lYWezClDLDMZyX4yy2VlEOM_/exec').success(function(data){
            for (var key in data.values) {
                contactBook.contacts[key] = data.values[key];
            }
            contactBook.amount =  contactBook.contacts.length;
            contactBook.show_bar = false;
        });
    }]);
})();
