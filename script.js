
// This is the main JavaScript file for the website.
window.onscroll = function() {scrollFunction()};

//This function is used to display the "Back to Top" button when the user scrolls down 800px from the top of the document
function scrollFunction() {

  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }

}

//This function is used to scroll to the top of the document when the user clicks on the "Back to Top" button
document.getElementById("topBtn").addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//video carousel for youtube iframes
const videoContainers = document.querySelectorAll('.video-container');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
let currentIndex = 0;

videoContainers[currentIndex].classList.add('active');

//This function is used to display the previous slide when the user clicks on the "Previous arrow" button
prevBtn.addEventListener('click', () => {
  // let ifr be the iframe inside the current videoContainer
  let ifr = videoContainers[currentIndex].querySelector('iframe');
  // refresh src tag in the iframe to force stop the prev video
  let src = ifr.src;
  ifr.src = src;
  videoContainers[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + videoContainers.length) % videoContainers.length;
  videoContainers[currentIndex].classList.add('active');
}
);
//This function is used to display the next slide when the user clicks on the "Next arrow" button
nextBtn.addEventListener('click', () => {
  // let ifr be the iframe inside the current videoContainer
  let ifr = videoContainers[currentIndex].querySelector('iframe');
  // refresh src tag in the iframe to force stop the prev video
  let src = ifr.src;
  ifr.src = src;
  videoContainers[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % videoContainers.length;
  videoContainers[currentIndex].classList.add('active');
}
);




