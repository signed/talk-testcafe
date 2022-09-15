fixture('stack trace from application on console').page('http://localhost:8080/')

test('read log output from the browser', async (tc) => {
  const messages = await tc.getBrowserConsoleMessages()
  const log = removeLibraryLinesFrom(messages.log)
  log.forEach((message) => console.log(message))
  await tc.expect(log.length).eql(1).expect(log[0]).eql('hello testcafe')
})

const removeLibraryLinesFrom = (log: string[]) => {
  const copy = [...log]
  const index = copy.indexOf('[HMR] Waiting for update signal from WDS...')
  copy.splice(index, 1)
  return copy
}
