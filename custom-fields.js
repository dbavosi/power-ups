var POWER_UP_NAME = 'custom fields lockdown';


window.TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://example.com/icon.png', // Replace with your icon URL
      text: 'Dark Mode',
      callback: function(t) {
        // Store the dark mode state in a shared context
        t.set('board', 'shared', 'darkMode', true);

        // Trigger a board refresh to apply changes immediately
        t.board('id', 'name', 'url').then(function(board) {
          window.location.href = board.url;
        });
      },
    }];
  },
  'card-back-section': function(t, options) {
    return {
      title: 'Dark Mode',
      icon: 'https://example.com/icon.png', // Replace with your icon URL
      content: {
        type: 'iframe',
        url: t.signUrl('./dark-mode-settings.html'), // Create a separate HTML file for the settings
        height: 150,
      },
    };
  },
});

// In dark-mode-settings.html, you can have JavaScript to apply the dark mode styles
// For example:
// document.body.style.backgroundColor = 'black';
