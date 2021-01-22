const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//En lista av ord som kan spelas med
const ordLista = ["apa", "bepa", "cepa", "depa"];
//fixar så den väljer ett random ord av listan med ord
let slumpatIndex = Math.floor(Math.random() * ordLista.length);
//låta det slumpade ordet vara ordet som användaren ska gissa på
let slumpatOrd = ordLista[slumpatIndex];
//säger det valda ordet
console.log(slumpatOrd);
//säger statusen på ordet
const status = [];
//gör en loop för att se ifal i är störe eller mindre än det fulla ordet och sätter så att statusen inte vissar ordet men * istället för bokstäver
for (let i = 0; i < slumpatOrd.length; i++) {
  status.push("*");
}
//fixar så att statusen på ordet inte är fyllt av mellan rum och kommatäken utan istället så sitter alla ihop
console.log(status.join(""));

let försök = 7;
//fixar readline och att man bara kan/ ska gissa en bokstav i taget och vad som är rätt o fel svar
rl.on("line", (input) => {
  console.log(`Received: ${input}`);
  if (input.length === 1) {
    let rättGissat = false;
    for (let i = 0; i < slumpatOrd.length; i++) {
      if (input === slumpatOrd[i]) {
        rättGissat = true;
        status[i] = input;
      }
    }
    //berättar om du gissar rätt eller fel och hur många försök man har kvar och ifall man skrev mer än ett tecken så säger den till
    if (rättGissat == true) {
      console.log("Du gissade rätt");
    } else {
      försök--;
      console.log("Du gissade fel, du har: " + försök + " försök kvar.");
    }
  } else {
    console.log("Skriv enbart in ett tecken!");
  }
  console.log(status.join(""));
//kollar om statusen är lika som det slumpade ordet och ifall det är samma säger den you win om det inte är det säger den försök =0 och you lose
  if (status.join("") === slumpatOrd) {
    console.log("You win!");
    process.exit();
  } else if (försök == 0) {
    console.log("You Lose!");
    process.exit();
  }
});