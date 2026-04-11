document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".toggle-hamburger");
    const navLinks = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active"); 
    });
});

//api call

// (function() {
//   emailjs.init("A7OqR4LJyL1_59JIb"); // 👈 replace this
// })();

// emailjs.init("A7OqR4LJyL1_59JIb");

// const form = document.getElementById("contactForm");

// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   emailjs.sendForm(
//     "service_y5ele2a",
//     "template_b5tcwlu",
//     this
//   )
//   .then(() => {
//     alert("Message sent 🚀");
//     form.reset();
//   })
//   .catch((err) => {
//     console.log(err);
//     alert("Failed 😢");
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    console.log(templateParams);

    emailjs.send("service_y5ele2a", "template_b5tcwlu", templateParams)
      .then(() => {
        alert("Message sent 🚀");
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

//floating button

window.onscroll = function() {
  const btn = document.getElementById("floatingBtn");
  const middle = document.documentElement.scrollHeight / 4;

  // Show button when user scrolls past the middle of the page
  if (window.scrollY > middle) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

//year dynamic
document.getElementById("year").textContent = new Date().getFullYear();