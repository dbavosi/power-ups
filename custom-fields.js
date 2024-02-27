// Your Power-Up Name
var POWER_UP_NAME = 'custom fields lockdown';

// Trello Power-Up initialization
window.TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    return [];
  },
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://example.com/icon.png', // Replace with your icon URL
      text: 'Hello',
      callback: function(t) {
        // Display a hello message
        t.alert({
          message: 'Hello! This is your custom Power-Up speaking.',
          display: 'info',
          duration: 3
        });
      }
    }];
  },
  'card-detail-badges': function(t, options) {
    return [];
  },
  'card-detail-buttons': function(t, options) {
    return [];
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
