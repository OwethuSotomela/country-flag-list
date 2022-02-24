var countryName = document.querySelector(".nameOfCountry");
var addBtn = document.querySelector(".addBtn");



var templateSource = document.querySelector(".CFLTemplate").innerHTML;
var CFLTemplate = Handlebars.compile(templateSource);