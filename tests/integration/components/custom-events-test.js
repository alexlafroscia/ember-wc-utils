import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, find, render, clearRender } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import td from 'testdouble';

module('Integration | Component | custom-events', function(hooks) {
  setupRenderingTest(hooks);

  test('it can bind an action to a custom event', async function(assert) {
    this.trigger = td.function();

    await render(hbs`
      {{#custom-events onCustomEvent=(action trigger)}}
        {{dispatch-event}}
      {{/custom-events}}
    `);

    await click('button');

    assert.verify(this.trigger(), { ignoreExtraArgs: true });
  });

  test('it cleans up event listeners when destroyed', async function(assert) {
    this.trigger = td.function();

    await render(hbs`
      {{#custom-events tagName='custom-events-catcher' onCustomEvent=(action trigger)}}
        {{dispatch-event}}
      {{/custom-events}}
    `);

    const customEventsElement = await find('custom-events-catcher');
    const removeEventListener = td.replace(
      customEventsElement,
      'removeEventListener'
    );

    await clearRender();

    assert.verify(
      removeEventListener('customEvent', td.matchers.isA(Function))
    );
  });
});
