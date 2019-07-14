import { Selector } from 'testcafe';

fixture('testcafe example')
  .page('http://devexpress.github.io/testcafe/example');

test('test name', async tc => {
  const sliderValues = Selector('.slider-value');
  await tc
    .expect(sliderValues.count).eql(10)
    .hover(sliderValues.withText('8'));
});
