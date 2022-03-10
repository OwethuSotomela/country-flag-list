let countryName = document.querySelector(".enterCountry");
let countryFlag = document.querySelector(".enterFlag");
let addBtn = document.querySelector(".addBtn");
let resetBtn = document.querySelector(".resetBtn");
let display = document.querySelector(".myList");
let feedback = document.querySelector(".feedback");
let sortAscending = document.querySelector(".ascending");
let sortDescending = document.querySelector(".descending");
let search = document.querySelector(".search");

let templateSource = document.querySelector(".CFLTemplate").innerHTML;
let CFLTemplate = Handlebars.compile(templateSource);

let nameOf = countryName.value;
let flagOf = countryFlag.value;
message = '';

let flagList = [
    {
        country: "Argentina",
        flag: "🇦🇷",
    },
    {
        country: "Brazil",
        flag: "🇧🇷",
    },
    {
        country: "Chile",
        flag: "🇨🇱",
    },
    {
        country: "Zambia",
        flag: "🇿🇲",
    },
    {
        country: "Uganda",
        flag: "🇺🇬",
    },
    {
        country: "Malawi",
        flag: "🇲🇼",
    },
    {
        country: "Rwanda",
        flag: "🇷🇼",
    },
    {
        country: "Ireland",
        flag: "🇮🇪",
    },
    {
        country: "Switzerland",
        flag: "🇨🇭",
    }
]

flagList = flagList;
if (localStorage[{ flagOf, nameOf }]) {
    flagList = JSON.parse(localStorage.getItem('Flags + Countries'));
}

const capitals = CountryFlagList(flagList);

let element = document.querySelector(".myList")
let node = document.createElement("li");
let textnode = document.createTextNode(flagList)
node.appendChild(textnode);

function addCountryAndFlag() {

    let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(flagOf);

    if (regexFlag != null) {
        regexFlag = countryFlag.value;
    }
    if (countryName != null) {
        nameOf = countryName.value;
    }
    if (regexFlag == '' && nameOf == '') {
        setTimeout(function () {
            feedback.innerHTML = "Enter the name of the country and paste it's flag..!!"
        }, 0000);
    } else {
        capitals.addCountry({ flag: regexFlag, country: nameOf })
        localStorage.setItem('Flags + Countries', JSON.stringify(capitals.getCountry()));
        capitals.displayList()
    }
    return flagList;
}

function addFlag() {
    addCountryAndFlag()
}

function reset() {
    capitals.clearStorage()
}

function searchCountry() {

    let filterCountry = search.value;
    let searchedCountry = flagList.filter(function (element) {
        return (element.country.toLowerCase()).includes(filterCountry.toLowerCase());
    })
    display.innerHTML = CFLTemplate({
        list: searchedCountry, get country() {
            return this.country;
        },
        set country(value) {
            this.country = value;
        },
        list: searchedCountry, get flag() {
            return this.flag;
        },
        set flag(value) {
            this.flag = value;
        },
    })
}

function sortAsce() {
    let ascendingOrder = flagList.sort(function (a, b) {
        return a.country > b.country ? 1 : -1;
    })
    console.log(ascendingOrder)
    display.innerHTML = CFLTemplate({
        list: ascendingOrder, get country() {
            return this.country;
        },
        set country(value) {
            this.country = value;
        },
        list: ascendingOrder, get flag() {
            return this.flag;
        },
        set flag(value) {
            this.flag = value;
        },
    })
}


addBtn.addEventListener("click", addFlag);
resetBtn.addEventListener("click", reset);
search.addEventListener("keyup", searchCountry);
sortAscending.addEventListener("click", sortAsce);