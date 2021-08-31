// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });


angular
    .module('MyApp', ['ngMaterial'])
    .controller('MyController', MyController);

function MyController() {
    var c = this;

    c.languages = ['Abc', 'Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi'];

    c.tags = ['Abc', 'Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi'];

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
        tag: 'tag'
    }

    c.updateSelectedList = function(res) {
        if(res) {
            if(res.controlName == c.SELECTS.language) {
                c.listOfLanguages = res.selectedList;
            }

            if(res.controlName == c.SELECTS.tag) {
                c.listOfTestData = res.selectedList;
            }
        } 
    }

    function init() {
        c.tags = ['Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi', 'Abc'];
    }

    init();
}