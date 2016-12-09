"use strict";
$(document).ready(function() {
  youreUp('bio');
})

function youreUp(who) {
  $('.act').hide();
  $('.'+who).show();
}

$()
