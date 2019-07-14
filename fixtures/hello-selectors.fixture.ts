// https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors/
import { Selector } from 'testcafe';
import { ReactSelector, waitForReact } from 'testcafe-react-selectors';

fixture('Getting Started')
  .page('http://localhost:8080/')
  .beforeEach(async () => {
    await waitForReact();
  });

test('vanilla selectors', async (tc) => {
  const selector = Selector('ul > li').nth(0);
  await tc.expect(selector.textContent).eql('one');
});

test('react selectors', async (tc) => {
  const selector = ReactSelector('ListItem').nth(1);
  await tc.expect(selector.textContent).eql('two');
});

test('access react properties', async (tc) => {
  const selector = ReactSelector('ListItem').nth(1);
  const component = await selector.getReact();
  await tc.expect(component.props.content).eql('two');
});
