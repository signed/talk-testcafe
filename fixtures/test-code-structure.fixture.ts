// only, skip, wait, debug (explain the window), missing await, before/after
// https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html
// https://devexpress.github.io/testcafe/documentation/recipes/debug-tests/
import 'testcafe';

fixture('first')
  .page('http://localhost:8080/');

test('test in first fixture', async tc => {
  await tc.navigateTo('https://example.org')
});

fixture('second');

test('test in second fixture', async tc => {

});
