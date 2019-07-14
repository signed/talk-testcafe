import { Selector } from 'testcafe';

fixture.only('testcafe example')
  .page('http://devexpress.github.io/testcafe/example');

test('give feedback on the testcafe example page', async tc => {
  const sliderValues = Selector('.slider-value');
  const nameInput = Selector('input').withAttribute('name', 'name');
  const triedTestcafeCheckbox = Selector('#tried-test-cafe');
  const feedbackText = Selector('legend').withText(/^Please let/).nextSibling();
  const submitButton = Selector('Button').withAttribute('type', 'submit');

  const headingOne = (node: Element) => {
    return node.localName === 'h1';
  };
  const addressedUser = Selector('.result-content').find(headingOne).innerText;
  await tc
    .typeText(nameInput, 'John Doe')
    .click(triedTestcafeCheckbox)
    .click(sliderValues.nth(6), { offsetY: -35 })
    .typeText(feedbackText, 'Hello from the testcafe talk', { speed: 0.25 })
    .click(submitButton)
    .expect(addressedUser).match(/.*John Doe!$/)
  ;
});
