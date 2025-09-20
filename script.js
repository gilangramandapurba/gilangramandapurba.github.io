function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

alert("<p>hello world</p>");

setInterval(() => {
let clock = document.querySelector("#clock");
clock.innerHTML =
new Date().getHours()+':'+
new Date().getMinutes()+':'+
new Date().getSeconds();
});

    let count = 10;
    const countdownEl = document.getElementById('countdown');
    const notfoundEl = document.getElementById('notfound');
    const introEl = document.getElementById('intro');
    const mainEl = document.getElementById('main');

    const interval = setInterval(() => {
      count--;
      countdownEl.textContent = count;

      if (count === 1) {
        clearInterval(interval);
        countdownEl.style.display = "none";
        notfoundEl.style.display = "block";

        // Setelah 2 detik 404 muncul, tampilkan website
        setTimeout(() => {
          introEl.style.display = "none";
          mainEl.style.display = "block";
        }, 2000);
      }
    }, 1000);

  
  
  
  
  const slides = document.querySelectorAll('.slideshow-image');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }








  const rocketBtn = document.querySelector('.rocket-toggle');
  const rocketFlame = document.querySelector('.rocket-flame');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      rocketBtn.style.display = "block";
    } else {
      rocketBtn.style.display = "none";
    }
  });
  
  function scrollToTop() {
    rocketFlame.classList.add('flame-active');
    rocketBtn.classList.add('rocket-fly');

  window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      rocketFlame.classList.remove('flame-active');
      rocketBtn.classList.remove('rocket-fly');
    }, 1000);
  }

  if (window.scrollY > 200) rocketBtn.style.display = "block";














    const splash = document.querySelector('.splash-screen');
    const astronauts = document.querySelectorAll('.astronaut');

    // Setelah 10 detik, semua astronot terbang ke atas
    setTimeout(() => {
      astronauts.forEach((astro, i) => {
        setTimeout(() => {
          astro.classList.add('fly-away');
        }, i * 150); // jeda sedikit antar astronot biar dramatis
      });

      // Setelah animasi terbang selesai → tampilkan website
      setTimeout(() => {
        splash.style.opacity = "0";
        setTimeout(() => {
          splash.style.display = "none";
          document.querySelector('.main-content').style.display = "block";
        }, 1000);
      }, 2000);
    }, 10000);
