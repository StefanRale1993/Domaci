//Zadatak 1
function maxVal(a, b, c) {
    let x = Math.max(a, b, c)
    return x

}
console.log(maxVal(2, 5, 9));
console.log('---------------------------------------------------------------------------------------')



// Zadatak 2
function cenaPicePoCm(cena, r) {
    let povrsina = r * r * 3.14
    return povrsina / cena
}
console.log(cenaPicePoCm(600, 15))
