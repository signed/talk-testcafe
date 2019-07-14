import { RequestLogger, RequestMock, Selector } from 'testcafe';

fixture('asserts and ')
  .page('http://localhost:8080/');

test('record calls', async (tc) => {
  const revealButton = Selector('[data-automation-id=change-with-random-delay__reveal]');
  const surpriseText = Selector('[data-automation-id=change-with-random-delay__surprise]').innerText;

  await tc.click(revealButton)
    .expect(surpriseText).eql('revealed');
});
