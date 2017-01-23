import { Selector } from 'testcafe';

const helloButton = Selector("button").withText("Hello Button");

fixture `Storybook`
    .page `http://localhost:9001/`;

test('Storybook example', async t => {
    await t
        .switchToIframe("#storybook-preview-iframe")
        .click(helloButton);
});