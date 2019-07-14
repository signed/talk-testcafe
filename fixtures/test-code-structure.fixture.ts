// only, skip, wait, debug, missing await
import 'testcafe';

fixture('first')
  .page('http://localhost:8080/');

test.only('test in first fixture', async tc => {
  await tc.navigateTo('https://example.org')
});

fixture('second');

test('test in second fixture', async tc => {

});