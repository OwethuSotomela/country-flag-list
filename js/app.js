var countryName = document.querySelector(".enterCountry");
var countryFlag = document.querySelector(".enterFlag");
var addBtn = document.querySelector(".addBtn");
var display = document.querySelector(".myList");

var templateSource = document.querySelector(".CFLTemplate").innerHTML;
var CFLTemplate = Handlebars.compile(templateSource);

// const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
// const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
var nameOf;

const flagList = [
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

var countryStored = [];
if (localStorage['country']) {
    countryStored = JSON.parse(localStorage.getItem('country'))
}

const capitals = CountryFlagList(countryStored);

console.log(countryStored)

let element = document.querySelector(".myList")
var node = document.createElement("li");
var textnode = document.createTextNode(flagList)
node.appendChild(textnode);

// element.insertBefore(node, element.children[0])

// console.log(node)
// console.log(textnode)

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
}
)

function addFlag() {
    if (countryName.value != null) {
        nameOf = document.querySelector(".enterCountry").value;
    }
    if (nameOf != '') {
        capitals.addCountry(nameOf)
        localStorage.setItem('country', JSON.stringify(capitals.getCountry()));
        display.innerHTML = capitals.getCountry()
    }
    return countryStored;
}

addBtn.addEventListener("click", addFlag)