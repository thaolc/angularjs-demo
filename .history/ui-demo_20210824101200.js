// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });


angular
    .module('MyApp', ['ngMaterial'])
    .controller('MyController', MyController);

function MyController() {
    var c = this;

    c.dataSource = ['Corn', 'Onions', 'Kale'];
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

    c.update = function (controlName, value) {
        if(controlName == 'language')
        c.selectedList = value;
    }
}