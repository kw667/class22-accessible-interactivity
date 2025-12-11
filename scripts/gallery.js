/* ========================================
   RESOURCE FILTERING - CLIENT-SIDE INTERACTIVITY
   INFO 1300 - Lecture 21
   ========================================

   This script filters resources by subject using CSS classes.
   When user clicks a filter button, show/hide resources based on their subject.
*/

$(document).ready(function () {
    // ===== PRACTICE: Event - Click Filter Button =====
    // Listen for clicks on all filter buttons

    $(".filter-btn").click(function () {
        /* Pseudocode:
           1. When user clicks a filter button
           2. Get the subject from the button's ID (e.g., "filter-math" → "math")
           3. Remove .active class from ALL filter buttons
           4. Add .active class to the clicked button
           5. Hide ALL resource items
           6. Show only items with matching data-subject
        */

        // TODO: Implement filter logic

        // Get the subject from button ID
        // If button ID is "filter-math", extract "math"
        // var subject = $(this).attr("id").replace("filter-", "");

        // Remove active class from all buttons
        // $(".filter-btn").removeClass("active");

        // Add active class to clicked button
        // $(this).addClass("active");

        // Hide all resources
        // $(".resource-item").addClass("hidden");

        // If "All" button clicked, show all resources
        // If specific subject button clicked, show only matching resources
        // var selector = subject === "all" ? ".resource-item" : '.resource-item[data-subject="' + subject + '"]';
        // $(selector).removeClass("hidden");
    });

});

/* ===== IMPLEMENTATION NOTES =====

   To implement this, use snippet autocomplete:

   1. Event: Click element
      Selector: ".filter-btn"

   2. Action: Add CSS class
      Element: ".filter-btn" (the clicked button)
      Class: "active"

   3. Action: Remove CSS class
      Element: ".filter-btn" (all buttons)
      Class: "active"

   4. Action: Add CSS class
      Element: ".resource-item"
      Class: "hidden"

   5. Action: Remove CSS class
      Element: ".resource-item" (filtered)
      Class: "hidden"

   ===== EXAMPLE IMPLEMENTATION =====

   $(document).ready(function() {
       $(".filter-btn").click(function() {
           var subject = $(this).attr("id").replace("filter-", "");

           $(".filter-btn").removeClass("active");
           $(this).addClass("active");

           $(".resource-item").addClass("hidden");

           if (subject === "all") {
               $(".resource-item").removeClass("hidden");
           } else {
               $('.resource-item[data-subject="' + subject + '"]').removeClass("hidden");
           }
       });
   });

*/
