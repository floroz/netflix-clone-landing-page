const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab contnt Item
function selectItem(event) {
	removeBorder();
	removeShow();
	// Add Border to current tab
	this.classList.add('tab-border');
	// Grab Content Item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => item.classList.remove('tab-border'));
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));
