var POWER_UP_NAME = 'custom fields lockdown';

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return t.get('card', 'shared', 'customFieldsDisabled').then(function(customFieldsDisabled) {
      // Check if customFieldsDisabled is true, and exclude the Custom Fields button if disabled
      if (customFieldsDisabled) {
        return [];
      }

      return [{
        icon: 'https://example.com/icon.png', // Replace with your icon URL
        text: 'Custom Fields',
        callback: function(t) {
          // Your custom fields logic here
          // This function is called when the Custom Fields button is clicked
        },
      }];
    });
  },
  'show-authorization': function(t, options) {
    // Authorization logic if needed
    return t.popup({
      title: 'Authorize ' + POWER_UP_NAME,
      url: './authorize.html',
      height: 140,
    });
  }
});

// In your code, when you want to disable the Custom Fields button, set customFieldsDisabled to true
// For example, you can have a button or trigger that sets this value
function disableCustomFieldsButton() {
  window.TrelloPowerUp.iframe({
    target: 'card',
    context: 'auto',
  }).then(function(t) {
    t.set('card', 'shared', 'customFieldsDisabled', true);
  });
}

// To enable the Custom Fields button, set customFieldsDisabled to false
function enableCustomFieldsButton() {
  window.TrelloPowerUp.iframe({
    target: 'card',
    context: 'auto',
  }).then(function(t) {
    t.set('card', 'shared', 'customFieldsDisabled', false);
  });
}
