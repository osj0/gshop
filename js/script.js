// s : mainsl 스크립트

// Ensure this script runs only once and variable is declared only once
let progressLine = document.querySelector('.autoplay-progress svg');

let mainSwiper = new Swiper(".main-swiper", {
    // 무한 슬라이드
    loop: true,

    // 자동 재생
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    // Pagination
    pagination: {
        el: ".main-swiper .swiper-pagination",
        clickable: false,
        type: "custom",
        renderCustom: function(swiper, current, total) {
            return (
                '<span class="current">' + 0 + (current) + '</span>' +
                '<span class="total">' + 0 + (total) + '</span>'
            );
        }
    },

    // Arrow navigation
    navigation: {
        nextEl: ".main-swiper .swiper-button-next",
        prevEl: ".main-swiper .swiper-button-prev",
    },

    on: {
        autoplayTimeLeft(s, time, progress) {
            if (progressLine) { // Ensure the element exists
                progressLine.style.setProperty("--progress", 1 - progress);
            }
        }
    }
});

var isAutoplaying = true; // 초기 상태는 재생 중

document.getElementById('toggleAutoplay')?.addEventListener('click', function() {
    if (isAutoplaying) {
        mainSwiper.autoplay.stop();
        this.textContent = 'Play'; // 버튼 텍스트 변경
    } else {
        mainSwiper.autoplay.start();
        this.textContent = 'Pause'; // 버튼 텍스트 변경
    }
    isAutoplaying = !isAutoplaying; // 상태 토글
});

// e : mainsl 스크립트

// s:best
var ww = $(window).width();
var mySwiper;

function initSwiper() {

  if (ww < 1024 && mySwiper == undefined) {
    mySwiper = new Swiper(".best_list", {
      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
      }
    });
  } 
  else if (ww >= 1024 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
});
//e : best

// s: new
  var swiper = new Swiper(".Newswiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    loop : true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        
        768: {
          slidesPerView: 2,  //브라우저가 768보다 클 때
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,  //브라우저가 1024보다 클 때
          spaceBetween: 20,
        },
      },
  });
//e : new

// s: MD's Pick
var swiper = new Swiper(".MDswiper", {
    rewind: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop : true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
      breakpoints: {
        520: {
            slidesPerView: 2,  //브라우저가 768보다 클 때
            spaceBetween: 20,
          },
        768: {
          slidesPerView: 3,  //브라우저가 768보다 클 때
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,  //브라우저가 1024보다 클 때
          spaceBetween: 5,
        },
      },
  });
// e : MD's Pick

// Smooth scroll with additional offset adjustment
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Custom offset (tabs height)
    const offset = 60; // Adjust as needed
    const targetPosition = targetElement.offsetTop - offset;

    // Smooth scrolling
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Update active class
    document.querySelectorAll('.tab-link').forEach(tab => tab.classList.remove('active'));
    this.classList.add('active');
  });
});


