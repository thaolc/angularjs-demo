angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
  .controller('MyController', function () {
    var c = this;
    c.isShowAdvancedFilter = true;

    c.onToggleAdvancedFilter = function () {
      c.isShowAdvancedFilter = !c.isShowAdvancedFilter;
    }
  });
