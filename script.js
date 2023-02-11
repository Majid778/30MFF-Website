window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

document.getElementById("topBtn").addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


const videoContainers = document.querySelectorAll('.video-container');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
let currentIndex = 0;

videoContainers[currentIndex].classList.add('active');

prevBtn.addEventListener('click', () => {
  videoContainers[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + videoContainers.length) % videoContainers.length;
  videoContainers[currentIndex].classList.add('active');
});

nextBtn.addEventListener('click', () => {
  videoContainers[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % videoContainers.length;
  videoContainers[currentIndex].classList.add('active');
});

