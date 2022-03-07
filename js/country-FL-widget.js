function CountryFlagList(local) {

    var countryList = [];
    countryList = local;
    var message = "";

    function addCountry({ flag, country }) {

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
        return countryList;
    }
    
    // function sortAsce() {
        // countryList.sort()
    // }

    // function sortDesc(){
    //     countryList.reverse()
    // }

    function clearStorage() {
        setTimeout(function () {
            localStorage.clear();
            location.reload();
        }, 0000)
    }

    
    return {
        addCountry,
        getCountry,
        // sortAsce,
        // sortDesc,
        clearStorage
    }
}