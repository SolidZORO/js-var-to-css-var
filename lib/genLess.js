"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genLess = void 0;
const fs = require('fs');
const path = require('path');
const const_1 = require("./const");
const genLess = (jsKv, opts) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(opts === null || opts === void 0 ? void 0 : opts.outputLessPath))
        throw new Error('Missing opts.outputLessPath!');
    let HEADER = `${const_1.__CODE_GEN_COMMENT__}\n\n`;
    if (opts === null || opts === void 0 ? void 0 : opts.outputLessHeaderImport) {
        HEADER = `${const_1.__CODE_GEN_COMMENT__}\n${opts === null || opts === void 0 ? void 0 : opts.outputLessHeaderImport}\n\n`;
    }
    const FOOTER = ``;
    let CONTENT = '';
    for (const k in jsKv) {
        if (!k)
            return;
        const v = jsKv[k];
        CONTENT += `${k.replace('--', '@')}: ${v};\n`;
    }
    const RESULT = `${HEADER}${CONTENT}${FOOTER}`;
    yield fs.mkdirSync(path.dirname(opts.outputLessPath), { recursive: true });
    yield fs.writeFileSync(opts.outputLessPath, RESULT);
});
exports.genLess = genLess;
