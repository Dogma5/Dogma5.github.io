var getNextSibling = function (elem, selector) {

	// Get the next sibling element
	var sibling = elem.nextElementSibling;

	// If there's no selector, return the first sibling
	if (!selector) return sibling;

	// If the sibling matches our selector, use it
	// If not, jump to the next sibling and continue the loop
	while (sibling) {
		if (sibling.matches(selector)) return sibling;
		sibling = sibling.nextElementSibling
	}

};


// Main nav dropdowns
// var x = document.getElementsByClassName("");

dropdownButtons = document.querySelectorAll('.dropdown-btn');

var myFunction = function() {
  var nextStop = getNextSibling(this, '.dropdown-box');

  if ( window.getComputedStyle(nextStop).display === 'none' ){
    nextStop.style.display = "block";
  } else {
    nextStop.style.display = "none";
  }
};


for (var i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener('click', myFunction, false);
}
