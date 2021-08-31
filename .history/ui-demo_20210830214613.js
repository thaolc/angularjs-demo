// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });


angular
    .module('MyApp', ['ngMaterial'])
    .controller('MyController', MyController);

function MyController() {
    var c = this;

    c.languages = ['Abc', 'Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi'];

    c.tags = ['Abc', 'Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi'];

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


    c.SELECTS = {
        languages: 'languages',
        tags: 'tags'
    }

    c.updateSelectedList = function(res) {
        if(res) {
            if(res.controlName == c.SELECTS.languages) {
                c.selectedLanguages = res.selectedList;
                //reOrderList(c.SELECTS.languages, c.selectedLanguages);
            }

            if(res.controlName == c.SELECTS.tags) {
                c.selectedTags = res.selectedList;
                //reOrderList(c.SELECTS.tags, c.selectedTags);
            }
        } 
    }

    c.test = function(res) {
        if(res) {
            reOrderList(res.controlName, res.selectedList);
        }
    }

    function reOrderList(name, list) {
        const listWithoutSelected = c.languages.filter(function(item) {
            return list.indexOf(item) === -1;
        });
        listWithoutSelected.sort();
        c[name] = list.concat(listWithoutSelected);
    }
}