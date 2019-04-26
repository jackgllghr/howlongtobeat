import * as mocha from 'mocha';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import { HowLongToBeatProvider } from '../main/services/provider';

chai.use(chaiAsPromised);
const expect = chai.expect;
const assert = chai.assert;

describe(' Integration-Testing HtmlScraper', () => {
  describe('Test for gameId (Dark Souls)', () => {
    it('should return the markup source for https://howlongtobeat.com/game.php?id=2224', () => {
      return expect((new HowLongToBeatProvider().getGameDetailHtml('2224'))).to.be.fulfilled;
    });
  });
});
