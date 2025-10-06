let products = [
    {name: 'versace bag', price: 300},
    {name: 'fendi shirt', price: 120},
    {name: 'crocs', price: 230}
]

let discount = products.map(p => ({discountedPrice: p.price * 0.9,
    oldPrice : p.price
 }))
console.log(discount)