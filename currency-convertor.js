//currency convertor using map

//USD to GHS
let usdCurrency = [10, 50, 100]

let convertionRate = usdCurrency.map(currency => currency * 12.59)
console.log(convertionRate)

