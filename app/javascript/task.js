$(document).ready(function() {
  $("#submit").on('click', function(e) {
    e.preventDefault();
    var text = $('#task_title').val()
    console.log(text)
  })
})