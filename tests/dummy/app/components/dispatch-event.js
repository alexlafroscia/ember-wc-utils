import Component from '@ember/component';
import layout from '../templates/components/dispatch-event';

export default Component.extend({
  layout,

  eventName: 'customEvent',

  actions: {
    sendEvent() {
      const event = new CustomEvent(this.eventName, {
        bubbles: true
      });

      this.element.dispatchEvent(event);
    }
  }
});
