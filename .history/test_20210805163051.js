// angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
//   .controller('MyController', function () {
//     var c = this;
//   });

(function (angular) {

  var app = angular.module('meApp');
  var TEMPLATE = '<div class="odca-document-card">' +
    '<div class="document-card-header">' +
    '<div class="bg-button bg-{{c.document.ENELHRMMDocument.bgColor}}" role="button" ng-click="c.gotoODWebLink()" ng-if="c.isEnabled(c.document.documentName)" >' +
    '<span>{{c.document.ENELHRMMDocument.label}}</span>' +
    '</div>' +
    '<div class="bg-button bg-{{c.document.ENELHRMMDocument.bgColor}}" ng-if="!c.isEnabled(c.document.documentName)" >' +
    '<span>{{c.document.ENELHRMMDocument.label}}</span>' +
    '</div>' +
    '<div class="more">' +
    '<me-menu-cascade document="c.document" ng-click="$event.stopPropagation();" favorites="c.favorites()" share="c.share()"></me-menu-cascade>' +
    '</div>' +
    '</div>' +
    '<div class="document-card-main" ng-click="c.gotoODWebLink()" ng-if="c.isEnabled(c.document.documentName)">' +
    '<span class="document-number">n. {{c.document.ENELHRNumber}}</span>' +
    '<h4 class="document-title">{{c.document.title}}</h4>' +
    '</div>' +
    '<div class="document-card-main" ng-click="c.goToWebDocument()" ng-if="!c.isEnabled(c.document.documentName)">' +
    '<span class="document-number">n. {{c.document.ENELHRNumber}}</span>' +
    '<h4 class="document-title">{{c.document.title}}</h4>' +
    '</div>' +
    '<div class="document-card-footer">' +
    '<div class="document-org" ng-bind="c.generateStringDocOrg(c.document)"></div>' +
    '<div class="document-version-publicdate">v. {{c.document.ENELHRFatherVersion}} | {{c.document.ENELHRIssueDate ? (c.document.ENELHRIssueDate | date: \'dd/MM/yyyy\') : \'\'}}' +
    '</div>' +

    '<div ng-if="!c.isDisplayVideo(c.document.ENELHRMMDocument.label)" class="document-link" ng-click="c.download()">' +
    '<span me-dict="ODCA_LOOK_DOCUMENT">Look at the document</span>' +
    '<img src="odca_pdf.png" width="24" height="24"/>' +
    '</div>' +
    '<div ng-if="c.isDisplayVideo(c.document.ENELHRMMDocument.label)" class="document-link" ng-click="c.openVideo()">' +
    '<span me-dict="ODCA_WATCH_VIDEO">Watch Video</span>' +
    '<img src="odca_play_video.png" width="24" height="24"/>' +
    '</div>' +
    '</div>' +
    //'<me-share-dialog identifier="shareDialog-{{c.document.sys_id}}" subject="{{c.document.title}}" link="{{c.link}}"></me-share-dialog>'+
    '</div>';


  app.component("meStandardDocumentFrame", {
    template: TEMPLATE,
    controllerAs: 'c',
    bindings: {
      document: '<',
      css: '@',
      webDocumentId: '@',
      onFavorites: '&?',
      onShare: '&?'
    },
    controller: controllerFn
  });

  controllerFn.$inject = ['$scope', '$window', 'meNavigationSrv', 'meDialogService'];

  function controllerFn($scope, $window, meNavigationSrv, meDialogService) {
    var c = this;
    c.widgetWebDocumentId = c.webDocumentId ? c.webDocumentId : "odca_web_document";
    c.link = encodeURIComponent($window.location.origin + $window.location.pathname + meNavigationSrv.getUrl(c.widgetWebDocumentId, { sys_id: c.document.sys_id }, true));
    c.goToWebDocument = goToWebDocument;
    c.download = download;
    c.openVideo = openVideo;
    c.share = share;
    c.favorites = favorites;
    c.isDisplayVideo = isDisplayVideo;
    c.generateStringDocOrg = generateStringDocOrg;
    c.gotoODWebLink = gotoODWebLink;
    c.isEnabled = isEnabled;

    function generateStringDocOrg(doc) {
      return [
        doc.ENELHRMMBusinessLine || doc.ENELHRMMServiceFunction || doc.ENELHRMMStaffFunction,
        doc.ENELHRMMPerimeter
      ].filter(function (i) { return i; }).join(' | ');
    }

    function openNewTab(page, params) {
      var path = location.origin + location.pathname;
      var parameters = meNavigationSrv.getUrl(page, params, true);
      var fullPath = path + parameters;
      $window.open(fullPath, "_blank");
    }

    function goToWebDocument() {
      openNewTab(c.widgetWebDocumentId, { sys_id: c.document.sys_id });
    }

    function download() {
      $window.open(c.document.path);
    }

    function share() {
      //meDialogService.openDialog('shareDialog-'+c.document.sys_id, {fullscreen: false});
      c.onShare(c.document);
    }

    function favorites() {
      c.onFavorites();
    }

    function openVideo() {
      $window.open(c.document.path);
    }

    function isDisplayVideo(title) {
      if ((title !== '') && (title.toLowerCase() === 'video')) {
        return true;
      }
      return false;
    }

    function gotoODWebLink() {
      $window.open(c.document.ODWebLink, "_blank");
    }

    function isEnabled(doc) {
      if (doc == 'Organizational Directive') {
        return true;
      }
      return false;
    }
  }
})(window.angular);
