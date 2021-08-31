// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

  (function () {
    'use strict';
    angular
        .module('MyApp', ['ngMaterial'])
        .controller('MyController', DemoCtrl);
  
    function DemoCtrl ($timeout, $q) {
      var self = this;

      self.vegetables = ['Corn', 'Onions', 'Kale', 'Arugula', 'Peas', 'Zucchini'];
      self.searchTerm = '';
      self.clearSearchTerm = function () {
        self.searchTerm = '';
      };
  
      // self.readonly = false;
      // self.selectedItem = null;
      // self.searchText = null;
      // self.querySearch = querySearch;
      // self.vegetables = loadVegetables();
      // self.selectedVegetables = [];
      // self.autocompleteDemoRequireMatch = true;
      // self.transformChip = transformChip;
  
      // /**
      //  * Return the proper object when the append is called.
      //  */
      // function transformChip(chip) {
      //   // If it is an object, it's already a known chip
      //   if (angular.isObject(chip)) {
      //     return chip;
      //   }
  
      //   // Otherwise, create a new one
      //   return { name: chip, type: 'new' };
      // }
  
      // /**
      //  * Search for vegetables.
      //  */
      // function querySearch (query) {
      //   var results = query ? self.vegetables.filter(createFilterFor(query)) : [];
      //   return results;
      // }
  
      // /**
      //  * Create filter function for a query string
      //  */
      // function createFilterFor(query) {
      //   var lowercaseQuery = query.toLowerCase();
  
      //   return function filterFn(vegetable) {
      //     return (vegetable._lowername.indexOf(lowercaseQuery) === 0) ||
      //         (vegetable._lowertype.indexOf(lowercaseQuery) === 0);
      //   };
  
      // }
  
      // function loadVegetables() {
      //   var veggies = [
      //     {
      //       'name': 'Broccoli',
      //       'type': 'Brassica'
      //     },
      //     {
      //       'name': 'Cabbage',
      //       'type': 'Brassica'
      //     },
      //     {
      //       'name': 'Carrot',
      //       'type': 'Umbelliferous'
      //     },
      //     {
      //       'name': 'Lettuce',
      //       'type': 'Composite'
      //     },
      //     {
      //       'name': 'Spinach',
      //       'type': 'Goosefoot'
      //     }
      //   ];
  
      //   return veggies.map(function (veg) {
      //     veg._lowername = veg.name.toLowerCase();
      //     veg._lowertype = veg.type.toLowerCase();
      //     return veg;
      //   });
      // }
    }
  })();


