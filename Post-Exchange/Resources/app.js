if (Ti.version < 1.8) {
  alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with multiple windows in a stack
(function() {
  
  var Window = require('ui/LoginView');
  new Window().open();
})();
