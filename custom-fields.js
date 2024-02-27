var POWER_UP_NAME = 'custom fields lockdown';

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://trello.com/assets/f6693799e8236f50455b.svg', // Replace with your icon URL
      text: 'Custom Fields',
      condition: 'disable',  // Set a condition to disable the button
      callback: function(t) {
        // This function will not be called because the button is disabled
      },
    }];
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
