angular
    .module('MyApp', ['ngMaterial'])
    .controller('MyController', MyController);

function MyController() {

    var c = this;
    c.languages = ['Abc', 'Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi'];
    c.tags = ['Abc', 'Bcd', 'Cde','Def', 'Efg', 'Fgh', 'Ghi'];
    c.SELECTS = {
        languages: 'languages',
        tags: 'tags'
    }

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

    c.updateSelectedList = function(res) {
        if(res) {
            if(res.controlName == c.SELECTS.languages) c.selectedLanguages = res.selectedList;
            if(res.controlName == c.SELECTS.tags) c.selectedTags = res.selectedList;
        } 
    }

    c.onTop = function(res) {
        if(res) moveSelectedToTop(res.controlName, res.selectedList);
        
    }

    function moveSelectedToTop(name, list) {
        var noSelectedList = c.languages.filter(function(item) {
            return list.indexOf(item) === -1;
        });
        noSelectedList.sort();
        list.sort();
        c[name] = list.concat(noSelectedList);
    }
}