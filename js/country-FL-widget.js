function CountryFlagList(local) {

    var countryList = [];
    countryList = local;
    var message = "";

    function addCountry({flag, country}) {

        console.log(flag, country)

        if (flag != '' && country != '') {
            country = country[0].toUpperCase() + country.slice(1).toLowerCase();
        }
        if (!countryList.includes({ flag, country })) {
            countryList.push({ flag, country })
        } else {
            message = "Country already added.."
        }
    }

    function getCountry() {
        console.log(countryList)
        return countryList;
    }

    return {
        addCountry,
        getCountry
    }
}