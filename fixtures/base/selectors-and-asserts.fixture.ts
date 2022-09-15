// https://devexpress.github.io/testcafe/documentation/test-api/assertions/
import { Selector } from 'testcafe'

fixture('asserts and ').page('http://localhost:8080/')

test('auto wait', async (tc) => {
  const revealButton = Selector('[data-automation-id=change-with-random-delay__reveal]')
  const surpriseText = Selector('[data-automation-id=change-with-random-delay__surprise]').innerText

  await tc.click(revealButton).expect(surpriseText).eql('revealed', { timeout: 5000 })
})
