function CountryFlagList(local) {

    var countryList = [];
    countryList = local;
    var message = "";

    function addCountry(c_name) {
        if (c_name != '') {
            var countryName = c_name[0].toUpperCase() + c_name.slice(1).toLowerCase();
            if (!countryList.includes(countryName)) {
                countryList.push(countryName)
            } else {
                message = "Country already added.."
            }
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