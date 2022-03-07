var countryName = document.querySelector(".enterCountry");
var countryFlag = document.querySelector(".enterFlag");
var addBtn = document.querySelector(".addBtn");
var resetBtn = document.querySelector(".resetBtn");
var display = document.querySelector(".myList");
var feedback = document.querySelector(".feedback");
var sortAscending = document.querySelector(".ascending");
var sortDescending = document.querySelector(".descending");
var search = document.querySelector(".search");

var templateSource = document.querySelector(".CFLTemplate").innerHTML;
var CFLTemplate = Handlebars.compile(templateSource);

// const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
// const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
var nameOf = countryName.value;
var flagOf = countryFlag.value;
message = '';

var flagList = [
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
    flagList = JSON.parse(localStorage.getItem({ flagOf, nameOf }));
}

const capitals = CountryFlagList(flagList);

let element = document.querySelector(".myList")
var node = document.createElement("li");
var textnode = document.createTextNode(flagList)
node.appendChild(textnode);

// display.innerHTML = CFLTemplate({
//     list: flagList, get country() {
//         return this.country;
//     },
//     set country(value) {
//         this.country = value;
//     },
//     list: flagList, get flag() {
//         return this.flag;
//     },
//     set flag(value) {
//         this.flag = value;
//     },
// })

function addCountryAndFlag() {

    var regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(flagOf);

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
    console.log(flagList)
    return flagList;
}

function addFlag() {
    addCountryAndFlag()
}

function reset() {
    capitals.clearStorage()
}

function descending() {
    // display.innerHTML = JSON.stringify(flagList.reverse());
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

addBtn.addEventListener("click", addFlag);
resetBtn.addEventListener("click", reset);
sortAscending.addEventListener("click", ascending);
sortDescending.addEventListener("click", descending);