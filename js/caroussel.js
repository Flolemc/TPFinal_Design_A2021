var numeroImg = 1;
afficheImg(numeroImg);

// Next/previous controls
function prochaineImg(n) {
  afficheImg(numeroImg += n);
}

// Thumbnail image controls
function imgAffichee(n) {
  afficheImg(numeroImg = n);
}

function afficheImg(n) {
  var i;
  var img = document.getElementsByClassName("imgCaroussel");
  var point = document.getElementsByClassName("pointCaroussel");
  if (n > img.length) {numeroImg = 1}
  if (n < 1) {numeroImg = img.length}
  for (i = 0; i < img.length; i++) {
      img[i].style.display = "none";
  }
  for (i = 0; i < point.length; i++) {
      point[i].className = point[i].className.replace(" active", "");
  }
  img[numeroImg-1].style.display = "block";
  point[numeroImg-1].className += " active";
}