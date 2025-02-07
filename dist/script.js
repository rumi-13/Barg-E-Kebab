// Select the dropdown navbar and button elements
const dropdownNavbar = document.getElementById("dropdown-navbar");
const dropdownBtn = document.getElementById("dropdown-btn");
const subTitle = document.getElementById("sub-title")
// Add event listener to toggle the visibility of the dropdown menu when the button is clicked
dropdownBtn.addEventListener("click", () => {
    dropdownNavbar.classList.toggle("hidden");          // Toggle visibility
    dropdownNavbar.classList.toggle("opacity-0");      // Control opacity for smooth transition
    dropdownNavbar.classList.toggle("opacity-100");    // Show the dropdown menu
     
    // subTitle.classList.toggle("opacity-0")
});