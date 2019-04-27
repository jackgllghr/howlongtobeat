"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const provider_1 = require("../main/services/provider");
chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;
describe(' Integration-Testing HtmlScraper', () => {
    describe('Test for gameId (Dark Souls)', () => {
        it('should return the markup source for https://howlongtobeat.com/game.php?id=2224', () => {
            return expect((new provider_1.HowLongToBeatProvider().getGameDetailHtml('2224'))).to.be.fulfilled;
        });
    });
});
//# sourceMappingURL=htmlscraper.integration.test.js.map