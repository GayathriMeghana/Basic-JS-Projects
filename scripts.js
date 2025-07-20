const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPxfFLR0IDf4GCCC1AwSAifH9IFOoJDb17E1xHVuiMEMArXwDZzWUvZ768aTMlCPLrBI&usqp=CAU",
  "https://img.freepik.com/premium-photo/colorful-letter-g-is-painted-white-background_979262-1698.jpg",
  "https://img.freepik.com/premium-photo/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEkZqg1tlVZhBqjgS13SQYh8y4qEXy50_p3Azy9kbAq_FM-czM1ocH35uGOC71mc1pKQ&usqp=CAU",
  //"https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";
];

let count = 0;
const bgimg = document.getElementById("bgimg");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

bgimg.src = images[count];

next.addEventListener("click", () => {
  while (count == images.length - 1) {
    count = -1; //-1
  }
  count++; //-1+1=0
  bgimg.src = images[count];
});

prev.addEventListener("click", () => {
  while (count == 0) {
    count = images.length; //4
  }
  count--; //4-1=3
  bgimg.src = images[count];
});