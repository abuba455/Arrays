let cars = [
    {brand: 'Suzuki', price: 30000},
    {brand: 'Toyota', price: 40000},
    {brand: 'ferrari', pricce: 18000}
]

let afforableBrands = cars.filter(car => car.price <= 40000).map(car => car.brand)
console.log(afforableBrands)


