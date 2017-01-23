import { Selector } from 'testcafe';

fixture `Storybook`
    .page `http://dockerhost:9001/`;

test('Collapse', async t => {
    await t
        .click(menu.componentCollapse)
        .wait(5000);
});