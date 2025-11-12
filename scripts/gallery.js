/* When the thumbnail button clicked,  show one figure,  hide the others.  */
$("#buttonA").on("click", function () {
  /* show one figure,  hide the others */
  $("#itemA").removeClass('hidden');
  $("#itemB").addClass('hidden');
  $("#itemC").addClass('hidden');
})

/* When the thumbnail button clicked,  show one figure,  hide the others.  */
$("#buttonB").on("click", function () {
  /* show one figure,  hide the others */
  $("#itemA").addClass('hidden');
  $("#itemB").removeClass('hidden');
  $("#itemC").addClass('hidden');
})
