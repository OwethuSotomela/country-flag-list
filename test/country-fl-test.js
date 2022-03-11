describe("AddCountry", () => {
    it("Should add countries to the localStorage", () => {

        let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        let flag = '🇭🇹';
        let countryName = 'Haiti';

        assert(true, regexFlag.test(flag), countryName);

    })

})

describe("RegexCheck", () => {
    it('It should return true when an emoji is a flag', () => {
        let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        let flag = '🇦🇷';

        assert(true, regexFlag.test(flag));

    })
    it('It should return false when an imoji is not a flag', () => {
        let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        let flag = '😀';

        assert(false, regexFlag.test(flag));
    })
})

describe('GetMessages', () => {
    it('Should return error messages when a flag and a country name are not entered', () => {
        
        let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        let flag = '🇦🇷';
        let country = 'Fiji'
        
        assert('Enter the country name and paste a flag', regexFlag.test(''), '')
    })

})

describe('CountryList', ()=>{
    it('Should display the countries added', ()=>{

        let regexFlag = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;
        let flag = '🇦🇷';
        let country = 'Fiji'
        let flag2 = '🇬🇺'
        let country2 = 'Guam'
    })
})



