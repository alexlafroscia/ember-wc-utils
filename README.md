ember-wc-utils
==============================================================================

> Utilities for working with WebComponents in Ember

Installation
------------------------------------------------------------------------------

```
ember install ember-wc-utils
```


Usage
------------------------------------------------------------------------------


**Capturing Custom Events**

Ember has a hard time capturing custom events from WebComponents. This addon provides a component that would allow you to set up listeners for these custom events.

The following will set up an event listener for a custom event called `dispatchedEvent`.

```handlebars
{{#custom-events onDispatchedEvent=(action 'someEmberAction')}}
  <component-that-dispatches-custom-event>
  </component-that-dispatches-custom-event>
{{/custom-events}}
```

The custom event being dispatched should look something like:

```javascript
new CustomEvent('dispatchEvent', {
  bubbles: true // Note: required
});
```

The behavior of this component can also be applied to your own components through the `ember-wc-utils/mixins/on-custom-events` mixin.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-wc-utils`
* `npm install`

### Linting
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
