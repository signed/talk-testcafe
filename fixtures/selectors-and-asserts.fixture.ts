import { RequestLogger, RequestMock, Selector } from 'testcafe';

fixture('asserts and ')
  .page('http://localhost:8080/');

test('record calls', async (tc) => {
  await tc.click(Selector('[data-automation-id=change-with-random-delay__reveal]'))
    .expect(Selector('[data-automation-id=change-with-random-delay__surprise]').innerText)
    .eql('revealed');
});
