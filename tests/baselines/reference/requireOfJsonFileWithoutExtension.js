//// [tests/cases/compiler/requireOfJsonFileWithoutExtension.ts] ////

//// [file1.ts]
import b1 = require('./b'); // This should not resolve
let x = b1.a;
import b2 = require('./b.json');
if (x) {
    let b = b2.b;
    x = (b1.b === b);
}

//// [b.json]
{
    "a": true,
    "b": "hello"
}

//// [tests/cases/compiler/out/b.json]
{
    "a": true,
    "b": "hello"
}
//// [tests/cases/compiler/out/file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b1 = require("./b"); // This should not resolve
var x = b1.a;
var b2 = require("./b.json");
if (x) {
    var b = b2.b;
    x = (b1.b === b);
}
