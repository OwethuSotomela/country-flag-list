var countryName = document.querySelector(".enterCountry");
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
        flag:  "🇲🇼",
    },
    {
        country: "Rwanda",
        flag:  "🇷🇼",
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
}
)

function addFlag() {
    if (countryName.value != null) {
        nameOf = document.querySelector(".enterCountry").value;
    } 
    console.log(nameOf)
    return nameOf;

}

addBtn.addEventListener("click", addFlag)