// Show an element
var show = function(elem) {
  elem.classList.add('is-visible');
};

// Hide an element
var hide = function(elem) {
  elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function(elem) {
  elem.classList.toggle('is-visible');
};

// Listen for click events
document.addEventListener(
  'click',
  function(event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains('toggle')) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    var removeClasses = document.getElementsByClassName('is-visible');
    var removeCount = removeClasses.length + 1;

    for (i = 0; i < removeCount; i++) {
      console.log(removeClasses);
      if (typeof removeClasses[i] != 'undefined') {
        console.log(removeClasses[i]);
        removeClasses[i].classList.remove('is-visible');
      }
    }

    // Toggle the content
    toggle(content);
  },
  false
);

(function showUp() {
  var x = document.getElementsByClassName('toggle-content');

  for (var i = 0; i < x.length; i++) {
    if (!x.classList.contains('is-visible')) {
      console.log(x);
    }
  }
})();
