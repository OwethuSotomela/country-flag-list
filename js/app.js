var countryName = document.querySelector(".enterCountry");
var countryFlag = document.querySelector(".enterFlag");
var addBtn = document.querySelector(".addBtn");
var resetBtn = document.querySelector(".resetBtn");
var display = document.querySelector(".myList");

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

// var countryStored = [];
// if (localStorage['country']) {
//     countryStored = JSON.parse(localStorage.getItem('country'))
// }

// var countryStored = [];
if (localStorage['country']) {
    flagList = JSON.parse(localStorage.getItem('country'))
}

// const capitals = CountryFlagList(countryStored);
const capitals = CountryFlagList(flagList);


// console.log(countryStored)
console.log(flagList)

let element = document.querySelector(".myList")
var node = document.createElement("li");
var textnode = document.createTextNode(flagList)
node.appendChild(textnode);

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

function addCountryAndFlag() {

    var regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/.test(flagOf);
    console.log(regexFlag)

    if (regexFlag != null) {
        regexFlag = countryFlag.value;
    }
    if (countryName != null) {
        nameOf = countryName.value;
    }
    if (regexFlag == '') {
        message = "Choose a Flag.."
    } else if (nameOf == '') {
        message = "Enter the name of the country.."
    } else {
        capitals.addCountry({ flag: regexFlag, country: nameOf })
        localStorage.setItem('country', JSON.stringify(capitals.getCountry()));
        display.innerHTML = capitals.getCountry()
    }
    console.log(nameOf)
    // console.log(flagOf)
    console.log(regexFlag)

    // return countryStored;
    return flagList;
}

function addFlag() {
    addCountryAndFlag()
}

function clearStorage() {
    setTimeout(function () {
        localStorage.clear();
        location.reload();
    }, 1000)
}

addBtn.addEventListener("click", addFlag);
resetBtn.addEventListener("click", clearStorage);
