// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

(function () {
    'use strict';
    angular
        .module('MyApp')
        .component('MySelect', {

        });

    function MySelectCtrl() {

        c.searchTerm = '';
        c.clearSearchTerm = function () {
            c.searchTerm = '';
        };

        c.toggleAllItems = function () {
            c.selectedList = c.isAllChecked ? c.dataSource : [];
        }

        c.isCheckAllItems = function () {
            c.isAllChecked = JSON.stringify(c.selectedList) == JSON.stringify(c.dataSource);
        }
    }
})();