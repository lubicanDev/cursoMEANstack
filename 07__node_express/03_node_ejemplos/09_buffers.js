"use strict";

const miBuf = Buffer.from("Hola mundo", "utf8");

const cadena = miBuf.toString();

console.log("Valor del Buffer");
console.log(miBuf);


console.log("Valor de la cadena");
console.log(cadena);

miBuf[3] = 67;
var cadenaMod = miBuf.toString();

console.log("Valor de la cadena Modificada");
console.log(cadenaMod);

const buf3 = Buffer.alloc(30);

const word1 = Buffer.from("Hello", "utf8");
const word2 = Buffer.from("World", "utf8");

word1.copy(buf3, 0);
word2.copy(buf3, 7);

buf3.writeUInt32BE(123456789, 13);
buf3.writeUInt32LE(123456789, 17);


console.log(buf3.toString("utf8"));