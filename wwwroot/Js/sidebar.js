
console.log("sidebar.js loaded!");
function toggleSubmenu(element) { // Now 'element' directly receives the HTML div
    // If you click directly on the 'state-open-size-small' div,
    // and you want clicks inside the submenu to *not* close it,
    // you'll need to prevent propagation on the submenu items themselves.
    // For now, let's assume this function is only meant to toggle the main state.

    const optionDivContainer = element.querySelector('.option3, .option');
    const internalOptionsDiv = element.querySelector('.internal-options, .internal-options-click');

    // Only proceed if both main parts of the toggleable menu are found
    if (optionDivContainer && internalOptionsDiv) {
        // Check if the submenu is currently 'open' (i.e., has 'option' and 'internal-options-click')
        if (optionDivContainer.classList.contains('option') && internalOptionsDiv.classList.contains('internal-options-click')) {
            // Submenu is open, so close it
            optionDivContainer.classList.remove('option');
            optionDivContainer.classList.add('option3');

            internalOptionsDiv.classList.remove('internal-options-click');
            internalOptionsDiv.classList.add('internal-options');
        } else {
            // Submenu is closed, so open it
            optionDivContainer.classList.remove('option3');
            optionDivContainer.classList.add('option');

            internalOptionsDiv.classList.remove('internal-options');
            internalOptionsDiv.classList.add('internal-options-click');
        }
    }
}

// To prevent closing when clicking on sub-items:
// You'll need to add event listeners to the sub-items.
// For example, if 'internal-options-click' is the active submenu:
document.addEventListener('click', function (event) {
    // Check if the clicked element is inside a visible submenu that should not trigger toggle
    const clickedElement = event.target;
    const activeSubmenu = clickedElement.closest('.internal-options-click'); // Find the closest parent with this class

    // If the clicked element is inside the active submenu, stop propagation
    if (activeSubmenu) {
        // Also ensure the clicked element is not the toggle button itself
        // (This check can be refined based on your exact HTML structure)
        const toggleButton = activeSubmenu.closest('.state-open-size-small').querySelector('.option3, .option');
        if (toggleButton && !toggleButton.contains(clickedElement)) {
            event.stopPropagation();
        }
    }
}, true); // Use capture phase to ensure it runs before the toggle function if it's on the parent

//function toggleSidebar(action) {

//    const closedSidebar = document.querySelector('.state-closed-size-desktop');
//    const openSidebar = document.querySelector('.state-open-size-desktop');

//    if (!closedSidebar || !openSidebar) {
//        console.error("One or both sidebar state divs not found.");
//        return;
//    }

//    if (action === 'open') {
//        closedSidebar.style.display = 'none'; // Hide the closed sidebar
//        openSidebar.style.display = 'block'; // Show the open sidebar
//    } else if (action === 'close') {
//        openSidebar.style.display = 'none'; // Hide the open sidebar
//        closedSidebar.style.display = 'block'; // Show the closed sidebar
//    }
//}

function toggleSidebar(action) {
    
    const closedSidebar = document.querySelector('.state-closed-size-desktop');
    const openSidebar = document.querySelector('.state-open-size-desktop');
    const sidebarContainer = document.getElementById('sidebar-container'); // your sidebar wrapper

    if (!closedSidebar || !openSidebar) {
        console.error("One or more sidebar elements not found.");
        return;
    }

    if (action === 'open') {
        closedSidebar.style.display = 'none'; // Hide the closed sidebar
        openSidebar.style.display = 'block';  // Show the open sidebar

        // Add 'open' class and remove 'collapsed' or other if any
        sidebarContainer.classList.add('open');
        sidebarContainer.classList.remove('collapsed');
    }
    else if (action === 'close') {
        openSidebar.style.display = 'none';  // Hide the open sidebar
        closedSidebar.style.display = 'block'; // Show the closed sidebar

        // Remove 'open' class and add 'collapsed' or other
        sidebarContainer.classList.remove('open');
        sidebarContainer.classList.add('collapsed');
    }
}


// Initial state (optional, you might set this with CSS as well)
document.addEventListener('DOMContentLoaded', () => {
  
    // By default, assume the closed state is shown and open is hidden
    const closedSidebar = document.querySelector('.state-closed-size-desktop');
    const openSidebar = document.querySelector('.state-open-size-desktop');

    if (closedSidebar && openSidebar) {
        closedSidebar.style.display = 'block'; // Ensure closed is visible initially
        openSidebar.style.display = 'none';   // Ensure open is hidden initially
    }
});
window.detectScreenSize = () => {
    const width = window.innerWidth;

    if (width <= 767) {
        return "mobile";
    } else if (width <= 1024) {
        return "tablet";
    } else {
        return "desktop";
    }
};

function initDropdown() {
    const dropdownToggle = document.getElementById('dropdownToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const detailsOption = document.getElementById('detailsOption');
    const detailsComponent = document.getElementById('detailsComponent');

    if (!dropdownToggle || !dropdownMenu || !detailsOption || !detailsComponent) {
        console.warn("One or more elements not found.");
        return;
    }

    dropdownToggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    });

    detailsOption.addEventListener('click', () => {
        detailsComponent.style.display = 'block';
        dropdownMenu.style.display = 'none';
    });
}
function initDotClick() {
    const dots = document.querySelectorAll('.ellipse-dot');
    const detailsComponent = document.getElementById('divCampignManagerDetails');
    const campaignListComponent = document.getElementById('CampaignList');

    if (!dots || !detailsComponent) return;

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            detailsComponent.style.display = 'block';
            campaignListComponent.style.display = 'none'
        });
    });
}
