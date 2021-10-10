console.log("-----1 užduotis-----")
//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];
console.log(mas1.length)


console.log("-----2 užduotis-----")
//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, '785', 92, 'labas', 522, 6984];
let ilgis = mas2.length;

for (let i = 0; i < ilgis; i++) {
    console.log(mas2.indexOf(mas2[i]) +" "+ mas2[i]);
}

console.log("-----3 užduotis-----")
//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)

const mas3 = [889, 52, 698, 752, 9333, 7];
 
    for (let i = 0; i < mas3.length; i++) {
        if(mas3[i] % 2 === 0) { 
            console.log("Indeksas: " + [i] +", " + "reikšmė: " + mas3[i])    
    }
  } 

console.log("-----4 užduotis-----")
//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = ['Agurkas', 'Bananas', 'arbūzas', 'Bebras', 'Voverė', 'Ąžuolas', 'Mažas triušis'];

mas4.forEach((item, index) => {
    if (item.toLowerCase()[0] === "a") {
        /* console.log(`Indeksas: ${index}, reikšmė: ${item}`); */
        console.log("Indeksas: " + index + ", " + "reikšmė: "+ item)
    }
});

console.log("-----5 užduotis-----")
//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = 'Storas zebras, bėga nuo zuulu genties nedžiotojų.';


function char_count(str1, letter) {

 let letter_Count = 0;
 for (let position = 0; position < str1.length; position++) {
    if (str1.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count(str1, 'z'));


//ARBA TIESIOG TAIP:
//console.log(str1.match(/z/g).length);



console.log("-----6 užduotis-----")
//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(['Labas', 'Vakaras', 'Rytas', 'Valio']);

set1.add("Labas"); // "Labas" nepridės, nes jis jau yra (turi būti unikalios reikšmės)
set1.add("Ate");

console.log(set1.size);



console.log("-----7 užduotis-----")
//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(), 
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = 'Ku ku';
// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti


String.prototype.lastCharIs = function () {
    return this[this.length - 1];
};

console.log(str2.lastCharIs());


console.log("-----8 užduotis-----")
//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę
const obj1 = { labas: 'vakaras', laba: 'diena', labs: 'ryts' };



/* for (const property in obj1) {
    console.log(`${property}: ${obj1[property]}`);
} */

for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
  }


console.log("-----9 užduotis-----")
//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"

class Grybas {
    constructor(savybe, tipas) {
        this.savybe = savybe;
        this.tipas = tipas;
    }
}

const baravykas = new Grybas("Baravykas", "grybas");
const umede = new Grybas("Ūmedė", "grybas");
const lepsis = new Grybas("Lepšis", "grybas");

console.log(baravykas);
console.log(umede);
console.log(lepsis);

//----------------------------------------------------------------------------------------------------------


