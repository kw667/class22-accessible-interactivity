/* ========================================
   COOKIE BANNER - PRACTICE VERSION
   JavaScript Practice for INFO 1300

   Instructions: Implement the cookie banner dismissal functionality.
   Use jQuery to manipulate the DOM and add/remove CSS classes.
   ======================================== */

/*
   TODO: When the page loads:
   1. Wait for document to be ready using $(document).ready()
   2. Find the "Dismiss" button (use querySelector or jQuery selector)
   3. Listen for a "click" event on the button
   4. When clicked, add the "cookie-hidden" class to the .cookie-banner element
   5. This will hide the banner using the CSS display: none rule

   HINT: Use these jQuery methods:
   - $(document).ready(function() { ... })
   - $('.cookie-banner')
   - $('.cookie-dismiss-btn')
   - .on('click', function() { ... })
   - .addClass('cookie-hidden')

   BONUS:
   - Save the dismissal state to localStorage so banner doesn't reappear
   - Check localStorage on page load and hide banner if already dismissed
*/

$(document).ready(function () {
    // TODO: Your code here

    // TODO: Get reference to the dismiss button

    // TODO: Add click event listener

    // TODO: Add 'cookie-hidden' class to cookie banner when clicked

    // BONUS: Save to localStorage with key 'cookieDismissed'
    // BONUS: Check localStorage on page load and hide if needed
});
