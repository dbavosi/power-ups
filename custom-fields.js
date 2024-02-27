// Initialize Trello Power-Up
window.TrelloPowerUp.initialize({
  'card-badges': function (t, options) {
    return getBadges(t);
  },
  'card-buttons': function (t, options) {
    return getCardButtons(t);
  },
});

// Function to get card badges
function getBadges(t) {
  return [
    {
      icon: 'https://yourdomain.com/path/to/icon.png',
      text: 'Custom Fields',
    },
  ];
}

// Function to get card buttons
function getCardButtons(t) {
  return [
    {
      icon: 'https://yourdomain.com/path/to/add-icon.png',
      text: 'Add Custom Field',
      callback: function (t) {
        // Check if the member is an admin before allowing the action
        checkAdminAndPerformAction(t, 'add');
      },
    },
    {
      icon: 'https://yourdomain.com/path/to/delete-icon.png',
      text: 'Delete Custom Field',
      callback: function (t) {
        // Check if the member is an admin before allowing the action
        checkAdminAndPerformAction(t, 'delete');
      },
    },
  ];
}

// Function to check if the member is an admin before allowing the action
function checkAdminAndPerformAction(t, action) {
  t.card('members', 'admins')
    .then(function (admins) {
      // Get the current member's ID
      return t.member('id');
    })
    .then(function (member) {
      // Check if the current member is an admin
      if (admins.includes(member.id)) {
        // Member is an admin, perform the action
        performAction(t, action);
      } else {
        // Member is not an admin, display a message or take appropriate action
        t.alert({
          message: 'Only admins can perform this action.',
          duration: 3,
        });
      }
    });
}

// Function to perform the action (add or delete custom field)
function performAction(t, action) {
  if (action === 'add') {
    // Add custom field logic
    t.alert({
      message: 'Custom field added successfully.',
      duration: 3,
    });
  } else if (action === 'delete') {
    // Delete custom field logic
    t.alert({
      message: 'Custom field deleted successfully.',
      duration: 3,
    });
  }
}
