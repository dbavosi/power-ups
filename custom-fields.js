var POWER_UP_NAME = 'custom fields lockdown';

window.TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    // Get all buttons on the card
    var allButtons = options.entries;

    // Filter out the button with data-test-id "custom-fields-button"
    var filteredButtons = allButtons.filter(function(button) {
      return button.data && button.data['test-id'] === 'custom-fields-button';
    });

    // If the filteredButtons array is not empty, it means there's a button with data-test-id "custom-fields-button"
    // So, return an empty array to hide the button
    if (filteredButtons.length > 0) {
      return [];
    }

    // If there is no button with data-test-id "custom-fields-button", return all buttons as usual
    return allButtons;
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
