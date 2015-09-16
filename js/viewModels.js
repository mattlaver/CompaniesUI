'use strict';

var ViewModels = (function () {

    var companyViewModel = {companyListViewModel: new CompanyViewModel.CompanyList()};

    function getCompanies() {
        companyViewModel.companyListViewModel.getCompanies();
    };

    var api = {
        companyViewModel: companyViewModel,
        getCompanies: getCompanies
    }

    return api;
})();