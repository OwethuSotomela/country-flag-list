function CountryFlagList(local) {

    let countryList = [];
    countryList = local;

    function addCountry({ flag, country }) {

        if (flag != '' && country != '') {
            country = country[0].toUpperCase() + country.slice(1).toLowerCase();
        }

        let myLocal = countryList.filter(function (item) {
            return item.country == country
        })
        if (myLocal.length == 0) {
            countryList.push({ flag, country })
        } else {
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