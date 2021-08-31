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
        languages: 'languages',
        tags: 'tags'
    }

    c.updateSelectedList = function(res) {
        if(res) {
            if(res.controlName == c.SELECTS.languages) {
                c.listOfLanguages = res.selectedList;
                reOrderList(c.SELECTS.language, c.listOfLanguages);
            }

            if(res.controlName == c.SELECTS.tags) {
                c.listOfTestData = res.selectedList;
                reOrderList(c.SELECTS.tags, c.listOfLanguages);
            }
        } 
    }

    function reOrderList(name, list) {
        
    }
}