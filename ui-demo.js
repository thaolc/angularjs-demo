angular
    .module('MyApp', ['ngMaterial'])
    .controller('MyController', MyController);

function MyController() {

    var c = this;
    c.languages = ["English", "French", "German", "Italian", "Portuguese", "Romanian", "Russian", "Spanish"];
    c.tags = ["abc", "access", "Accident", "accounting", "Accounting Closing", "Accounts", "Acquisition", "Acquisti delegati", "Acreditación", "Active", "activities", "Administradores", "Agente del mercado", "Análisis de riesgos", "Analysis", "Aneel", "Anti-manipulation", "Appalti", "Argentina", "Armazéns", "Art. 26", "Asic", "assessment", "Asset Chain", "assets", "Audit", "Authorization", "Averías relevantes", "Aviso s5", "B2C", "balances", "Balizamiento", "Baremo", "bharath", "Billing", "Bip", "Bo colombia", "Bornero", "Brigadista", "Budget", "bullying", "Burden", "Business", "Cac", "Calculation", "Capacity", "Carga nominal (burden)", "Cargas suspendidas", "Cash flow forecast.", "Causas interrupción enel", "Cct", "Cctv", "Ccz", "Centrales termoeléctricas", "Centro de control", "Cgm", "Chain Management", "Change management", "CIEN", "Client", "Cliente", "Cod-go", "Code Management", "Codice di rete", "Código de medida", "Código sic", "Commissioning", "Communication", "Communications", "Complaints", "Compliance", "components", "Concentradores", "Concepto de pago", "Concession", "Conductor", "Conexiones", "Confidentiality", "Conflict", "Conformity to type test, ctt", "Connection", "Continuidad", "Continuity of the electricity service", "Contract", "Contract Management", "Contractor", "contracts", "Control", "control method", "Control System", "Conv col", "coordination", "corporate laws", "Corrective", "Corrective action", "corrective actions", "Corrupción", "Cortes", "Separación en la fuente", "Service provider", "Services and security", "Servicio", "Servicios de conexión", "Servizio maggior tutela", "Sgp", "Sicurezza", "Sistema elettrico", "Skills alignments", "Smart working", "Solar", "Solicitudes de contratación", "Sou", "Spending", "Sponsorship", "Srini", "Standardization", "Stock exchange", "Str", "strategic plan", "strategy", "Study scenarios", "Supplier", "Supply", "Survey", "Suspension", "Sustainability", "Sustainable", "Swab", "System", "Tariff Review", "Tdc", "Technical quality of service", "Technical study", "Telematic Device", "Telemedida", "Tendido de conductores", "Territorio", "Testing Kit", "Thermal plant", "Third Party", "Tiempo de respuesta", "Tisp", "Trabajo", "Traceability", "Traffic Code", "Training", "Transfer", "Transmission", "transparency", "Trasabilitate concentratoare", "Trasabilitate contoare", "Trasabilitatea concentratoarelor", "Trasabilitatea concentratoarelor edd", "Trasabilitatea contoarelor", "Trasabilitatea contoarelor edd", "Tratamiento de residuos", "Travel", "Travel agency", "travel restriction", "Travels", "undefined", "Unidade em-go", "Unidade mkt-go", "Unidade nd-go", "Vegetable ester", "Visit", "Visitor badge", "Voltage", "W&s", "Waste treatment", "Wind", "work", "Work order", "Workcare", "Workflow", "Workforce", "Zona de servidumbre", "zzzz"];
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
        var noSelectedList = c[name].filter(function(item) {
            return list.indexOf(item) === -1;
        });
        // noSelectedList.sort();
        // list.sort();

        noSelectedList = sortCaseInsensitive(noSelectedList);
        list = sortCaseInsensitive(list);
        c[name] = list.concat(noSelectedList);
    }

    function sortCaseInsensitive(list) {
        return newList = _.sortBy(list, function(item) {
            return item.toLowerCase();
        })
    }
}