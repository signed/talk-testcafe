import 'testcafe';
import {ClientFunction} from 'testcafe';

fixture('testcafe gotchas')
  .page('http://localhost:8080/');

// https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-e---skip-js-errors
// https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-u---skip-uncaught-errors
test('watch what you log', async (tc) => {
  console.log('hello in the test');
  const writeToClientConsole = ClientFunction(() => console.log('hello in the client'));
  await writeToClientConsole();

  const logs = await tc.getBrowserConsoleMessages();

  await tc.expect(logs.log).contains('hello in the client');
});

test('not all promises are equal', async (tc) =>{

});

test('restarts browser if you are stuck in a client code breakpoint for too long', async (tc) =>{

});

test('data passed between client (application under test) and server (testcafe) is serialized and de-serialized', async (tc) =>{

});


