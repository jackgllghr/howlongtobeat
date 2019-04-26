"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const provider_1 = require("../main/services/provider");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
describe('Testing HtmlScraper', () => {
    describe('Test for illegal urls', () => {
        it('should throw an error', () => {
            return assert.isRejected(new provider_1.HowLongToBeatProvider().getGameDetailHtml('bla'), Error);
        });
    });
});
//# sourceMappingURL=htmlscraper.test.js.map