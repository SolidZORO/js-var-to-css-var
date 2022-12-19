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
exports.genType = void 0;
const fs = require('fs');
const path = require('path');
const const_1 = require("./const");
const genType = (jsKv, opts) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(opts === null || opts === void 0 ? void 0 : opts.outputTypePath))
        throw new Error('Missing opts.outputTypePath!');
    if (!(opts === null || opts === void 0 ? void 0 : opts.outputTypeName))
        throw new Error('Missing opts.outputTypeName!');
    let HEADER = `${const_1.__CODE_GEN_COMMENT__}\n`;
    const FOOTER = `\n`;
    let CONTENT = `export type ${opts.outputTypeName} =\n`;
    for (const k in jsKv) {
        if (!k)
            return;
        CONTENT += `  | '${k}'\n`;
    }
    const RESULT = `${HEADER}${CONTENT}${FOOTER}`;
    yield fs.mkdirSync(path.dirname(opts.outputTypePath), { recursive: true });
    yield fs.writeFileSync(opts.outputTypePath, RESULT);
});
exports.genType = genType;
