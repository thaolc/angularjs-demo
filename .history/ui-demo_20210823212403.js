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
        var self = this;

        self.dataSource = ['Corn', 'Onions', 'Kale', 'Arugula', 'Peas', 'Zucchini'];
        self.searchTerm = '';
        self.clearSearchTerm = function () {
            self.searchTerm = '';
        };

        $element.find('.select-language').on('keydown', function (ev) {
            ev.stopPropagation();
        });
    }
})();