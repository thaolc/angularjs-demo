// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });


angular
    .module('MyApp', ['ngMaterial'])
    .controller('MyController', MyController);

function MyController() {
    var c = this;

    c.languages = ['English', 'Italy', 'France'];

    c.testData = ['Corn', 'Onions', 'Kale', 'Test'];
    // c.searchTerm = '';
    // c.clearSearchTerm = function () {
    //     c.searchTerm = '';
    // };

    // c.toggleAllItems = function() {
    //     c.selectedList = c.isAllChecked ? c.dataSource : [];
    // }

    // c.isCheckAllItems = function() {
    //     c.isAllChecked = JSON.stringify(c.selectedList) == JSON.stringify(c.dataSource);
    // }

    c.SELECTS = {
        language: 'language',
        test: 'test'
    }

    c.updateSelectedList = function (res) {
        if(res) {
            if(res.controlName == c.SELECTS.language) c.listOfLanguages = res.selectedList;
            console.log(c.listOfLanguages);
            if(res.controlName == c.SELECTS.test) c.listOfTestData = res.selectedList;
            console.log(c.listOfTestData);
        } 
    }
}