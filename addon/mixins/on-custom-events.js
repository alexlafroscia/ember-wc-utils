import Mixin from '@ember/object/mixin';
import { bind } from '@ember/runloop';

import looksLikeEventHandler from '../-private/looks-like-event-handler';
import getEventNameFromHandler from '../-private/get-event-name-from-handler';

const CUSTOM_EVENT_LISTENERS = Symbol('custom-event-listeners');

export default Mixin.create({
  init() {
    this._super(...arguments);

    this[CUSTOM_EVENT_LISTENERS] = [];
  },

  didInsertElement() {
    this._super(...arguments);

    const events = Object.getOwnPropertyNames(this).filter(
      looksLikeEventHandler
    );

    for (const listenerName of events) {
      const name = getEventNameFromHandler(listenerName);
      const callback = bind(this, (...listenerArgs) => {
        const listener = this[listenerName];

        listener(...listenerArgs);
      });

      this.element.addEventListener(name, callback);

      this[CUSTOM_EVENT_LISTENERS].push({ name, callback });
    }
  },

  willDestroyElement() {
    for (const { name, callback } of this[CUSTOM_EVENT_LISTENERS]) {
      this.element.removeEventListener(name, callback);
    }

    this._super(...arguments);
  }
});
