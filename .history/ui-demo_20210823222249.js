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

        c.toggleAll = function() {
            if(!c.selectedList.length) {
                c.selectedList = c.dataSource;
            } else {
                c.selectedList = [];
            }
        }

        c.toggleItem = function() {
            c.isAllChecked = JSON.stringify(c.selectedList) == JSON.stringify(c.dataSource) ? true : false
        }
    }
})();