// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

angular
    .module('MyApp')
    .component('MySelect', {
        templateUrl: './my-select.component.html',
        bindings: {
            data: '<',
            onUpdate: '&'
        },
        controller: ControllerFn,
        controllerAs: 'c'
    });

function ControllerFn() {
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
        c.onUpdate(c.selectedList);
    }
}
