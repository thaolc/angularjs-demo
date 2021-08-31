// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

angular
    .module('MyApp')
    .component('mySelect', {
        templateUrl: './my-select/my-select.component.html',
        bindings: {
            data: '<',
            onUpdate: '&',
            controlName: '@',
            myPlaceholder: '@'
        },
        controller: ControllerFn,
        controllerAs: 'c'
    });

function ControllerFn() {
    var c = this;

    c.searchTerm = '';
    c.clearSearchTerm = function () {
        c.searchTerm = '';
        c.onSelectedList({
            controlName: c.controlName,
            selectedList: c.selectedList
        });
    };

    c.toggleAllItems = function () {
        c.selectedList = c.isAllChecked ? c.data : [];
    }

    c.updateSelectedList = function () {
        c.isAllChecked = c.selectedList.length === c.data.length;
        c.onUpdate({
            controlName: c.controlName,
            selectedList: c.selectedList
        });
    }
}
