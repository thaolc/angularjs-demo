// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

(function () {
    'use strict';
    angular
        .module('MyApp')
        .component('MySelect', {
            bindings: {
                data: '<',
                onUpdate: '&'
            }
        });

    function MySelectCtrl() {
        var c = this;

        c.searchTerm = '';
        c.clearSearchTerm = function () {
            c.searchTerm = '';
        };

        c.toggleAllItems = function () {
            c.selectedList = c.isAllChecked ? c.data : [];
        }

        c.isCheckAllItems = function () {
            c.isAllChecked = JSON.stringify(c.selectedList) == JSON.stringify(c.data);
        }
    }
})();