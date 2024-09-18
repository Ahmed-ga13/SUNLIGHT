/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
/*========== MENU SHOW========= */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("nav-menu-show");
  });
}
/*========== MENU HIDE========= */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", function () {
    navMenu.classList.remove("nav-menu-show");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the nav-menu-show
  navMenu.classList.remove("nav-menu-show");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add bg-header to header class
  this.scrollY > 50 && header.classList.add("bg-header"),
    // when the scroll is less than 50 viewport height, remove bg-header to header class
    this.scrollY < 50 && header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/

const popularSwiper = new Swiper(".popular__content", {
  // Optional parameters
  slidesPerView: "auto",
  centerSlides: true,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      centerSlides: false,
    },
  },
});

/*=============== CHOOSE FAQ ===============*/
const faqItem = document.querySelectorAll(".choose__faq-item");

// 1. Select each item
faqItem.forEach((item) => {
  const faqHeader = item.querySelector(".choose__faq-header");

  // 2. Select each button click
  faqHeader.addEventListener("click", () => {
    // 7. Select the current faq-open class
    const openItem = document.querySelector(".faq-open");
    // 5. Call the toggleItem function
    toggleItem(item);

    // 8. Remove the faq-open class from other items
    if (openItem && openItem != item) {
      toggleItem(openItem);
    }
  });
});

// 3. Create function to display the content
const toggleItem = (item) => {
  // 3.1. Select each faq content
  const faqContent = item.querySelector(".choose__faq-content");

  // 6. If the same item contains the faq-open class, remove
  if (item.classList.contains("faq-open")) {
    faqContent.removeAttribute("style");
    item.classList.remove("faq-open");
  } else {
    // 4. Add max-height to the content and add the faq-open class
    faqContent.style.height = faqContent.scrollHeight + "px";
    item.classList.add("faq-open");
  }
};

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY; // استخدم window.scrollY للحصول على موضع التمرير

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58; // تعديل موضع القسم ليأخذ في الاعتبار الهامش العلوي
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
      `.nav__menu a[href*="#${sectionId}"]`
    ); // تأكد من أن href يحتوي على معرف القسم الصحيح

    // التحقق من إذا كان موضع التمرير الحالي داخل القسم
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink.classList.add("active-link"); // إضافة فئة active-link
    } else {
      sectionLink.classList.remove("active-link"); // إزالة الفئة عند الخروج من القسم
    }
  });
};

// استمع إلى حدث التمرير لتفعيل التحقق
window.addEventListener("scroll", scrollActive);

/* ============= SCROLL UP BUTTON */

// جلب الزر الذي يمرر إلى أعلى الصفحة
const scrollUpButton = document.getElementById("scroll-up");

// إضافة حدث النقر على الزر
scrollUpButton.addEventListener("click", function(event) {
  event.preventDefault(); // منع السلوك الافتراضي للرابط

  // التمرير بسلاسة إلى أعلى الصفحة
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// previously selected theme (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// obtain the current theme that the interface has by default
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// validate if the user previously chose a theme
if (selectedTheme) {
  // apply the previously selected theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

// theme change event listener
themeButton.addEventListener("click", () => {
  // toggle dark/light theme class
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  // save the current theme and icon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});


/*=============== SCROLL REVEAL ANIMATION ===============*/

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true //animation repeat
  });
  scrollReveal.reveal(
    `.home__content , .popular__conatiner, .products__container, .join__bg, .footer__container`
  );
  scrollReveal.reveal(`.home__image` , {origin: 'bottom'})
  scrollReveal.reveal(`.choose__image , .features__image`, {
    origin: "left",
  });
  scrollReveal.reveal(`.choose__content, .features__content`, {
    origin: "right",
  });