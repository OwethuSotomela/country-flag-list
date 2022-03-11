function CountryFlagList(local) {

    let countryList = [];
    countryList = local;
    // let message = "";

    function addCountry({ flag, country }) {

        if (flag != '' && country != '') {
            country = country[0].toUpperCase() + country.slice(1).toLowerCase();
        }
        if (!countryList.includes({ flag, country })) {
            countryList.push({ flag, country })
        } else {
            // message = "Country already added.."
            feedback.innerHTML = "Country already added..."
        }
    }

    function getCountry() {
        return countryList;
    }

    function displayList() {

        display.innerHTML = CFLTemplate({
            list: flagList, get country() {
                return this.country;
            },
            set country(value) {
                this.country = value;
            },
            list: flagList, get flag() {
                return this.flag;
            },
            set flag(value) {
                this.flag = value;
            },
        })
    }

    function clearStorage() {
        setTimeout(function () {
            localStorage.clear();
            location.reload();
        }, 0000)
    }

    return {
        addCountry,
        getCountry,
        clearStorage,
        displayList,
    }
}