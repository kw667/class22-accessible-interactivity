/* ========================================
   GALLERY / RESOURCE FILTER - PRACTICE VERSION
   JavaScript Practice for INFO 1300

   Instructions: Implement the resource filtering functionality.
   Use jQuery to filter items based on data attributes and CSS classes.
   ======================================== */

/*
   TODO: When the page loads:
   1. Wait for document to be ready using $(document).ready()
   2. Find all filter buttons (use jQuery selector .filter-btn)
   3. Listen for "click" event on each button
   4. When a button is clicked:
      - Get the filter value from the button's id attribute (e.g., id="filter-math" → "math")
      - If the button id is "filter-all", show ALL resources
      - Otherwise, show only resources that have matching data-subject attribute
      - Hide all other resources using the .hidden class
   5. Update the button states:
      - Add .active class to the clicked button
      - Remove .active class from other buttons

   HINT: Use these jQuery methods:
   - $(document).ready(function() { ... })
   - $('.filter-btn')
   - .on('click', function() { ... })
   - $(this).attr('id') - get the button's id
   - $('.resource-item') - select all resources
   - .attr('data-subject') - get data attribute value
   - .addClass('hidden') / .removeClass('hidden')
   - .addClass('active') / .removeClass('active')

   BONUS:
   - Use .each() to loop through resources
   - Use .startsWith() or .substring() to extract filter value from button id
   - Smooth the filtering with CSS transitions
   - Use the :contains() selector for text-based filtering
*/

$(document).ready(function () {
    // TODO: Your code here

    // TODO: Get all filter buttons

    // TODO: Add click event listener to each button

    // TODO: Extract the filter value from button id

    // TODO: Show/hide resources based on data-subject attribute

    // TODO: Update active button styling

    // BONUS: Add CSS transitions for smooth filtering
    // BONUS: Save filter preference to localStorage
});
