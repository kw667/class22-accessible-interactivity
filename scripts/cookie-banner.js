/* ========================================
   COOKIE BANNER - CLIENT-SIDE INTERACTIVITY
   INFO 1300 - Lecture 22
   ======================================== */

/* ===== PRACTICE: STATIC CLIENT-SIDE INTERACTIVITY =====
   This script demonstrates:
   - Listening for user events (click)
   - Adding/removing CSS classes
   - No new content is added to the page
   - Only existing HTML + CSS + JS are used

   Pseudocode:
   1. When page loads, check if user previously accepted cookies
   2. When user clicks "Accept" button, add CSS class to hide banner
   3. When user clicks "Reject" button, add CSS class to hide banner
   4. Save user's choice to browser storage (localStorage)
*/

$(document).ready(function () {
    // ===== PRACTICE: Event - Page Ready =====
    // Code runs when the page has fully loaded

    // Check if user has already made a cookie choice
    // TODO: Implement localStorage check
    // If 'cookie-choice' exists in localStorage, hide the banner

    // ===== PRACTICE: Event - Click Accept Button =====
    // Listen for clicks on the "Accept" button
    $("#cookie-accept").click(function () {
        // TODO: Add CSS class .cookie-hidden to #cookie-banner
        // This hides the banner using display: none

        // TODO: Save choice to localStorage
        // localStorage.setItem('cookie-choice', 'accepted');
    });

    // ===== PRACTICE: Event - Click Reject Button =====
    // Listen for clicks on the "Reject" button
    $("#cookie-reject").click(function () {
        // TODO: Add CSS class .cookie-hidden to #cookie-banner
        // This hides the banner using display: none

        // TODO: Save choice to localStorage
        // localStorage.setItem('cookie-choice', 'rejected');
    });

});

/* ===== IMPLEMENTATION NOTES =====

   To implement this, use snippet autocomplete:

   1. Event snippet: On click element
      - Replace "ELEMENT_ID" with "cookie-accept"

   2. Action snippet: Add css class to element
      - Replace "ELEMENT_ID" with "cookie-banner"
      - Replace "CLASS_NAME" with "cookie-hidden"
      - This adds the .cookie-hidden class, which has display: none

   3. Action snippet: Browser console log
      - For testing: log message when button is clicked

   4. localStorage snippet
      - Save the user's cookie choice
      - Check localStorage on page load to hide banner if already chosen

   ===== EXAMPLE IMPLEMENTATION =====

   $(document).ready(function() {
       // Check if user already made a choice
       if (localStorage.getItem('cookie-choice')) {
           $("#cookie-banner").addClass("cookie-hidden");
       }

       // Accept button
       $("#cookie-accept").click(function() {
           $("#cookie-banner").addClass("cookie-hidden");
           localStorage.setItem('cookie-choice', 'accepted');
       });

       // Reject button
       $("#cookie-reject").click(function() {
           $("#cookie-banner").addClass("cookie-hidden");
           localStorage.setItem('cookie-choice', 'rejected');
       });
   });
*/
