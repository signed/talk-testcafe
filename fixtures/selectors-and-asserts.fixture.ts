import { RequestLogger, RequestMock, Selector } from 'testcafe';

fixture('asserts and ')
  .page('http://localhost:8080/');

test('record calls', async (tc) => {
  const revealButton = Selector('[data-automation-id=change-with-random-delay__reveal]');
  const surpriseText = Selector('[data-automation-id=change-with-random-delay__surprise]').innerText;

  await tc.click(revealButton)
    .expect(surpriseText)
    .eql('revealed');
});

fixture('testcafe example').page('http://devexpress.github.io/testcafe/example');

test('test name', async tc => {
  const sliderValues = Selector('.slider-value');
  await tc
    .expect(sliderValues.count).eql(10)
    .hover(sliderValues.withText('8'))
});
