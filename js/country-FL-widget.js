function CountryFlagList(local) {

    const countries = ["Argentina", "Brazil", "Chile", "Zambia", "Uganda", "Malawi", "Rwanda", "Ireland", "Switzerland"];
    const flags = ["🇦🇷", "🇧🇷", "🇨🇱", "🇿🇲", "🇺🇬", "🇲🇼", "🇷🇼", "🇮🇪", "🇨🇭"];
    var countryList = local;

    function addCountry(c_name){
        console.log(c_name)
        if (!countryList.includes(c_name)){
            countryList.push(c_name)
        }
        return c_name;
    }

    function getCountry(){
        console.log(countryList)
        return countryList;
    }

    return {
        addCountry,
        getCountry
    }

}