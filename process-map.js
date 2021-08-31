angular.module('MyApp', ['ngMaterial', 'ui.bootstrap'])
  .controller('MyController', function () {
    var c = this;

    c.groups = [
      {label: "Business Line", value: 1, children: [
        {label: "Energy and Commodity Management", value: 11},
        {label: "Power Generation", value: 12},
        {label: "Infrastructure and Network", value: 13},
        {label: "Enel X", value: 14},
        {label: "Market", value: 15}
      ]},
      {label: "Staff", value: 2, children: [
        {label: "Administra- tion, Finance and Control", value: 21},
        {label: "Audit", value: 12},
        {label: "Regulatory and Antitrust", value: 22},
        {label: "Communica- tions", value: 23},
        {label: "Institutional Affairs", value: 24},
        {label: "Security", value: 25},
        {label: "Legal and Corporate Affairs & Compliance", value: 26},
      ]},
      {label: "Cross", value: 3, children: [
        {label: "Digital Solutions", value: 31},
        {label: "Procure- ment", value: 32},
        {label: "HSEQ", value: 33},
        {label: "Innovation", value: 34},
        {label: "Market", value: 15},
        {label: "Risk Manament", value: 35},
        {label: "Services", value: 36},
        {label: "Sustainabi- lity", value: 37},
        {label: "Lorem ipsum", value: 38}
      ]}
    ];

    c.groupBusinessLine = c.groups[0];
    c.businessLineTitle = c.groupBusinessLine.label;
    c.businessLine = c.groupBusinessLine.children;

    c.groupStaff = c.groups[1];
    c.staffTitle = c.groupStaff.label;
    c.staff = c.groupStaff.children;

    c.groupCross = c.groups[2];
    c.crossTitle = c.groupCross.label;
    c.cross = c.groupCross.children;
  });