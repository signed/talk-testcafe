import { Selector } from 'testcafe';

fixture('stack trace from application on console')
  .page('http://localhost:8080/stacktrace.html');

test.skip('line numbers should match', async (tc) => {
  const button = Selector('button').nth(0);
  await tc.click(button);
  const messages = await tc.getBrowserConsoleMessages();
  // error message is not the correct way to access the thrown error
  // not sure if there is an api for that, but testcafe prints the error
  // if this test is executed and there the line numbers are wrong
  await tc.expect(messages.error.length).eql(1);
  const errorMessage = messages.error[0];
  await tc.expect(errorMessage).contains('stacktrace.tsx:28');
});
