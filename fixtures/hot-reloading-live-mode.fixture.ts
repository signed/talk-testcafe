import 'testcafe';
import { constantString } from '../support/tools';

fixture('live mode').page('https://example.org');

test('hot reload', async (tc) => {
  console.log('hello');
  await tc.expect(constantString()).eql('42');
});