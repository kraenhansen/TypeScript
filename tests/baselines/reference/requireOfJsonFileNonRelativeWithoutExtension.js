//// [tests/cases/compiler/requireOfJsonFileNonRelativeWithoutExtension.ts] ////

//// [file1.ts]
import d = require("d.json"); // Should fail
import e = require("e"); // Should fail

//// [b.json]
{
    "a": true,
    "b": "hello"
}

//// [e.json]
{
    "a": true,
    "b": "hello"
}

//// [c.json]
{
    "a": true,
    "b": "hello"
}

//// [tests/cases/compiler/out/file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
