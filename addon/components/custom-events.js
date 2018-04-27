import Component from '@ember/component';
import layout from '../templates/components/custom-events';

import OnCustomEvents from '../mixins/on-custom-events';

export default Component.extend(OnCustomEvents, {
  layout
});
