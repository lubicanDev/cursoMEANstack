"use strict";

let fs2 = require("fs");
let zlib = require("zlib");


fs2.createReadStream("fichero.txt.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs2.createWriteStream("fich_write2.txt"));