var POWER_UP_NAME = 'custom fields lockdown';

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: 'https://trello.com/assets/f6693799e8236f50455b.svg', // Replace with your icon URL
      text: 'Be Kind',
      callback: function(t) {
        t.alert({
          message: 'Be Kind!',
          display: 'info',
          duration: 3
        });
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
