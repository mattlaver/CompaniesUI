'use strict';

var CompanyViewModel = (function() {
    var url = Config.companiesUrl;

    function Company(id, code, name) {
        var self = this;

        self.Id = ko.observable(id);
        self.Code = ko.observable(code);
        self.Name = ko.observable(name);
    }

    function CompanyList() {
        var self = this;

        self.companies = ko.observableArray([]);

        self.getCompanies = function() {
            self.companies.removeAll();

            DataAccess.getCORSRequest('GET', url).then(function(data) {
                $.each(data.companies, function(key, value) {
                    self.companies.push(new Company(value.id, value.code, value.name));
                });
            });
        }
    }

    var api = {
        Company: Company,
        CompanyList: CompanyList
    }

    return api;
})();
