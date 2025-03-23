// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    let button = document.getElementById("clickMe");
    
    // Add a click event listener
    button.addEventListener("click", function () {
        alert("Button clicked! Welcome to My Website!");
    });
});