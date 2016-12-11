"use strict";
$(document).ready(function() {
  youreUp('bio');
})

function youreUp(who) {
  $('.act').hide();
  $('.'+who).show();
}


function changePicture(direction, project) {
  console.log("going to the",direction,"picture for the project",project);
  let projectViewer = $('#'+project+'Viewer');
  let projectImages = projectViewer.children();
  a = projectImages;
  let shownImageIndex;
  for (let image of projectImages) {
    let imageObject = $(image);
    console.log('this image is hidden: ',imageObject.hasClass('hidden'));
    console.log($(image));../
  }
}
