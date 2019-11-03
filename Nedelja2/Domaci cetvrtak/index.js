/**
 * Zadatak 5
 */

//  let cena = 600;
//  let precnik = 42;  //cm

//  let r = precnik / 2;

//  let povrsina = r*r*3.14;        //Povrsina kruga je r^2 * Pi, r je poluprecnik
//  console.log("Povrsina pice je " + povrsina);

//  let cenaPoCm2 = povrsina / cena;
//  console.log("Cena po centimetru kvadratnom je " + cenaPoCm2);
//---------------------------------------------------------------------------------------------------------------



{
}
for (let counter = 0; counter <= 100; counter++) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log("FizzBuzz ")
    } else if (counter % 3 == 0) {
        console.log("Fizz ")
    } else if (counter % 5 == 0) {
        console.log("Buzz ")
    } else {
        console.log(counter)
    }
}


/**
 * Zad 1: 
 *  #
 *  ##
 *  ###
 *  ####
 *  #####
 */
console.log('------------------Zad7----------------')
for (j = 1; j <= 5; j++) {
    console.log('#'.repeat(j));
}

/**
 * Zad 2:
 */
// let n = 5
// for (let counter = 1; counter <= n; counter++) {
//     console.log(' '.repeat(n - counter) + "#".repeat(counter));
// }

/**
 * Zad 3:
 */
let n = 5
for (let counter = 1; counter <= n; counter++) {
    console.log(' '.repeat(n - counter) + "#".repeat(counter) + " " + "#".repeat(counter));
}










