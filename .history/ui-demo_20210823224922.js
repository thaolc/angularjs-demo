// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

(function () {
    'use strict';
    angular
        .module('MyApp', ['ngMaterial'])
        .controller('MyController', DemoCtrl);

    function DemoCtrl($element) {
        var c = this;

        c.dataSource = ['Corn', 'Onions', 'Kale'];
        c.searchTerm = '';
        c.clearSearchTerm = function () {
            c.searchTerm = '';
        };

        c.toggleAllItems = function() {
            console.log(c.selectedList);
            c.selectedList = c.isAllChecked ? c.dataSource : [];
        }

        c.isCheckAllItems = function() {
            console.log(c.selectedList);
            c.isAllChecked = JSON.stringify(c.selectedList) == JSON.stringify(c.dataSource);
        }
    }
})();