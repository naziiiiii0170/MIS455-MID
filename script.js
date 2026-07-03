// =====================================================
// EMBER & WICK — script.js
// Handles: Read More toggle (Home), Add to Cart (Products),
// Send Message (Contact). All triggered via onclick handlers
// set directly on the buttons in the HTML.
// =====================================================

// keeps track of how many items are in the cart across clicks
let cartCount = 0;

// ---------- HOME PAGE: Read More button ----------
function toggleReadMore() {
  // grab the hidden paragraph block by its id
  const block = document.getElementById("readMoreBlock");
  // grab the button itself so we can flip its label
  const button = document.getElementById("readMoreBtn");

  // check the current display state and flip it
  if (block.style.display === "block") {
    block.style.display = "none"; // hide the extra text
    button.textContent = "Read Our Story"; // reset button label
  } else {
    block.style.display = "block"; // reveal the extra text
    button.textContent = "Show Less"; // update button label
  }
}

// ---------- PRODUCTS PAGE: Add to Cart buttons ----------
function addToCart(productName) {
  // increase the running cart total by one
  cartCount = cartCount + 1;

  // find the cart counter element and update the text shown to the user
  const cartLabel = document.getElementById("cartCount");
  cartLabel.textContent = cartCount;

  // find the message element and confirm which candle was added
  const cartMessage = document.getElementById("cartMessage");
  cartMessage.textContent = productName + " added to your cart.";
} 
// ---------- CONTACT PAGE: Send Message button ----------
function sendMessage(event) {
  // stop the form from actually submitting/reloading the page
  event.preventDefault();

  // read the values typed into the form fields
  const nameValue = document.getElementById("nameInput").value;
  const emailValue = document.getElementById("emailInput").value;

  // grab the response box that will show the confirmation text
  const responseBox = document.getElementById("formResponse");

  // simple check so the confirmation feels personal when possible
  if (nameValue.trim() === "" || emailValue.trim() === "") {
    responseBox.textContent = "Please fill in your name and email before sending.";
  } else {
    responseBox.textContent = "Thank you, " + nameValue + "! Your message has been received — we will reply to " + emailValue + " within one business day.";
  }

  // make sure the response box is visible after the click
  responseBox.style.display = "block";
}
