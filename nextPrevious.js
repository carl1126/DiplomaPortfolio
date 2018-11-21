// List image names without extension
var myImg= new Array(13)
  myImg[0]= "1";
  myImg[1]= "2";
  myImg[2]= "3";
  myImg[3]= "4";
  myImg[4]= "5";
  myImg[5]= "6";
  myImg[6]= "7";
  myImg[7]= "8";
  myImg[8]= "9";
  myImg[9]= "10";
  myImg[10]= "11";
  myImg[11]= "12";
  myImg[12]= "13";


// Tell browser where to find the image
myImgSrc = "Images/panos/";

// Tell browser the type of file
myImgEnd = ".jpg"

var i = 0;

// Create function to load image
function loadImg(){
  document.imgSrc.src = myImgSrc + myImg[i] + myImgEnd;
}

// Create link function to switch image backward
function prev(){
  if(i<1){
    var l = i
  } else {
    var l = i-=1;
  }
  document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
}

// Create link function to switch image forward
function next(){
  if(i>11){
    var l = i
  } else {
    var l = i+=1;
  }
  document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
}

// Load function after page loads
window.onload=loadImg;
