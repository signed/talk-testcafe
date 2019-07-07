import { ClientFunction } from 'testcafe';

fixture('run code in client')
  .page('http://localhost:8080/');

test('access document uri in client', async (tc) => {
  await tc.expect(tc.eval(() => document['documentURI'])).eql('http://localhost:8080/');
});

test('Get UA', async (tc) => {
  await tc.expect(tc.eval(() => navigator.vendor)).eql('Google Inc.');
});

test('Check the page URL', async (tc) => {
  const getPageUrl = ClientFunction(() => window.location.href);
  await tc.expect(getPageUrl()).contains('http://localhost:8080/');
});

test('watch what you log', async (tc) => {
  console.log('hello in the test');
  const writeToClientConsole = ClientFunction(() => console.log('hello in the client'));
  await writeToClientConsole();

  const logs = await tc.getBrowserConsoleMessages();

  await tc.expect(logs.log).contains('hello in the client')
});
