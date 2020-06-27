fixture('stack trace from application on console')
    .page('http://localhost:8080/');

test('read log output from the browser', async (tc) => {
    const messages = await tc.getBrowserConsoleMessages();

    await tc.expect(messages.log.length).eql(1)
        .expect(messages.log[0]).eql('hello testcafe');
});
