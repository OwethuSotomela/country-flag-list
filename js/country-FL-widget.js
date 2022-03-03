function CountryFlagList(local) {

    var countryList = [];
    countryList = local;
    var message = "";

    function addCountry({flag, country}) {

        console.log(flag, country)

        if (flag != '') {
            var regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(flag);
            console.log(regexFlag)
        }else 
        if (country != '') {
            var countryName = country[0].toUpperCase() + country.slice(1).toLowerCase();
            console.log(countryName)
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