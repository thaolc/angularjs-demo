var TEMPLATE = '' +
  '    <div class="service-card layout-column" ng-class="c.size">' +
  '      <div ng-transclude="meHeader">' +
  '      <div class="layout-align-space-between layout-align-start-center layout-row padder-md padder-t-md">' +
  '        <div class="layout-align-start-center layout-row">' +
  '		   <div ng-if="c.service.image_text" class="m-r-sm ei" ng-class="c.service.image_text" style="font-size: 30px;" ng-style="{\'color\' : c.service.color }"></div>' +
  '          <img ng-if="c.service.image" class="icon-title m-r-sm" src="{{c.service.image}}" ng-style="{\'color\' : c.service.color }">' +
  '          <h3 class="font-bold m-r-sm text-lg" ng-style="{\'color\' : c.service.color }" me-dict="{{c.service.name}}"></h3>' +
  '          <div ng-if="c.service.short_description" class="icon-info text-primary text-xl">' +
  '		     <md-tooltip md-direction="top"><me-dict>{{c.service.short_description}}</me-dict></md-tooltip>	' +
  '		   </div>' +
  '          </div>' +
  '          <div tabindex="0" aria-label="Rimuovi dai preferiti" ng-if="c.service.deleteCallback" ng-click="c.service.deleteCallback(c.service.sys_id)" class="material-icons text-warm-grey">close</div>' +
  '        </div>' +
  '      </div>' +
  '      <div flex="100" class="service-card-box-content padder-md">' +
  '         <me-widget-loader show="c.loading"></me-widget-loader>' +
  '         <ng-transclude ng-if="!c.message && !c.loading" ng-transclude-slot="content"></ng-transclude>' +
  '         <me-widget-message message="c.message" ng-if="c.message"></<me-widget-message>' +
  '      </div>' +
  '      <div ng-if="c.hasFooter || c.service.url_ext || c.service.url" ng-transclude="meFooter" class="layout-align-end layout-column padder-md padder-b-md padder-t-lg">' +
  '	      <a ng-attr-target="{{!!c.service.url_ext && !c.isMobile ? \'_blank\'  : null}}" ng-href="{{c.service.url_ext || c.service.url}}" ' +
  '         		ng-if="c.service.url_ext || c.service.url" class="text-right text-primary text-sm" me-dict="{{c.service.alias_url}}"></a>' +
  '	   </div>' +
  '      <!--div ng-if="c.hasFooter || c.urlFooter.length" ng-transclude="meFooter" class="layout-align-end layout-column padder-md padder-b-md padder-t-lg">' +
  '	      <a ng-class="{\'m-t-xs\' : !$first}" ng-repeat="urlF in c.urlFooter" ng-attr-target="{{!!urlF.isExt && !c.isMobile ? \'_blank\'  : null}}" ng-href="{{urlF.url}}" ' +
  '         		class="text-right text-primary text-sm" me-dict="{{urlF.alias}}"></a>' +
  '	   </div-->' +
  '    </div>';

var TEMPLATE = ''+
'<div class="process-card-item" ng-class="c.isOpen">'+
  '<div class="layout-row layout-align-space-between-center" ng-click="c.onClickCardItem()" >'+
    '<div class="font-bold process-card-title" ng-class="c.isActived" ng-transclude="header">{{c.label}}<span class="attachment-number">{{c.number}}</span></div>'+
    '<div class="fa fa-{{c.icon}} transition text-primary"></div>'+
  '</div>'+
  '<div uib-collapse="c.isCollapsed" ng-transclude="content"></div>'+
'</div>';

angular.module('MyApp')
  .component("odcaProcessCollapsible", {
    template: TEMPLATE,
    transclude: {
      header: '?header',
      content: '?content'
    },
    controllerAs: 'c',
    bindings: {
      label: '@?',
      number: '@?',
      iconClass: '@?',
      labelClass: '@?',
      css: '@?'
    },
    controller: controllerFn
  });

  function controllerFn() {
    var c = this; 
    c.isCollapsed = true;
    c.isOpen = '';
    c.isActived = '';
    c.icon = 'plus';

    c.onClickCardItem = function() {
      c.isCollapsed = !c.isCollapsed;
      if(!c.isCollapsed) {
        c.isOpen = 'is-open';
        c.isActived = 'is-actived';
        c.icon = 'minus';
      } else {
        c.isOpen = '';
        c.isActived = '';
        c.icon = 'plus';
      }
    }
  };