var myIndex = 0;

carousel();

function carousel() {
  var i;
  var imgs = document.getElementsByClassName('img');
  console.log(imgs);
  for (i = 0; i < imgs.length; i++) {
    imgs[i].classList.add("hide");
  }
  myIndex++;
  if(myIndex > imgs.length){
    myIndex = 1;
  }
  imgs[myIndex - 1].classList.remove("hide");
  setTimeout(carousel, 2500);
}
