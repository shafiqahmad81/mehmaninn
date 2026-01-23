import './style.css'
// Header section
  const header = document.getElementById("header");
  const menu = document.getElementById("menu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { 
      header.classList.add("color-header");  
      header.classList.remove("py-2.5");           
      menu.classList.remove("hidden");
    } else {
      header.classList.remove("color-header");
      header.classList.add("py-2.5");                 
      menu.classList.add("hidden");
    }
  });

// HEADER SECTION LANGUAGE

const toggleBtn = document.getElementById("langToggle");
const dropdown = document.getElementById("langDropdown");
const combos = document.querySelectorAll(".combo");
const currencyText = document.querySelector(".currency");

  combos.forEach((combo, index) => {
    combo.style.display = index === 0 ? "flex" : "none";
  });

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    dropdown.classList.add("hidden");
  });

  dropdown.addEventListener("click", e => e.stopPropagation());

  document.querySelectorAll('input[name="language"]').forEach(radio => {
    radio.addEventListener("change", () => {
      combos.forEach(c => c.style.display = "none");

      const active = document.querySelector(
        `.combo[data-lang="${radio.value}"]`
      );

      if (active) active.style.display = "flex";
    });
  });

  document.querySelectorAll('input[name="currency"]').forEach(radio => {
    radio.addEventListener("change", () => {
      currencyText.textContent = radio.value;
    });
  });


var swiper = new Swiper(".packages .mySwiper", {
slidesPerView: 1,
spaceBetween: 40,
loop: true,
breakpoints: {
  1024: {
    slidesPerView: 2,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".destinations .mySwiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
breakpoints: {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".exclusive .mySwiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
breakpoints: {
  768: {
    slidesPerView: 2,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".popular-hotel .mySwiper", {
slidesPerView: 1,
spaceBetween: 20,
loop: true,
breakpoints: {
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  }},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// date to date picker
    document.addEventListener("DOMContentLoaded", function () {
  // 1. Range picker
  const rangeInput = document.querySelector('#flatpickr-range');
  if (rangeInput) {
    flatpickr(rangeInput, {
      mode: "range",
      dateFormat: "d-m-Y"
    });
  }

  // 2. Default date picker
  const defaultInput = document.querySelector('#flatpickr-default');
  if (defaultInput) {
    flatpickr(defaultInput, {
      monthSelectorType: 'static',
      dateFormat: "d-m-Y"
    });
  }

  // 3. Date + time picker
  const dateTimeInput = document.querySelector('#flatpickr-date-time');
  if (dateTimeInput) {
    flatpickr(dateTimeInput, {
      enableTime: true,
      dateFormat: 'd-m-Y H:i'
    });
  }
});




// tab Button

    document.addEventListener("DOMContentLoaded", function () {

    const tabButtons = document.querySelectorAll("#tab-btn-wrap button");
    const tabItems   = document.querySelectorAll("#tab-item-wrap > div");

    // 🔹 Initial state → hide all
    tabItems.forEach(item => item.classList.add("hidden"));

    // 🔹 Default → first tab show
    if (tabItems.length > 0) {
      tabItems[0].classList.remove("hidden");
      tabButtons[0].classList.add("text-blue");
    }

    // 🔹 On click
    tabButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {

        // hide all tabs
        tabItems.forEach(item => item.classList.add("hidden"));

        // remove active style
        tabButtons.forEach(b =>
          b.classList.remove("text-blue")
        );

        // show selected
        tabItems[index].classList.remove("hidden");
        btn.classList.add("text-blue");
      });
    });

  });


  // Gueste input

 document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".guests-wrapper").forEach(wrapper => {

    const input = wrapper.querySelector(".guest-input");
    const dropdown = wrapper.querySelector(".guests-items");

    dropdown.classList.add("pointer-events-none");

    input.addEventListener("click", e => {
      e.stopPropagation();
      dropdown.classList.remove("opacity-0", "pointer-events-none");
      dropdown.classList.add("opacity-100");
    });

    document.addEventListener("click", e => {
      if (!wrapper.contains(e.target)) {
        dropdown.classList.remove("opacity-100");
        dropdown.classList.add("opacity-0", "pointer-events-none");
      }
    });

    const updateInput = () => {
      let adults = 0, children = 0, rooms = 0;

      dropdown.querySelectorAll(".count").forEach(item => {
        const val = parseInt(item.textContent, 10);
        const type = item.dataset.type;
        if (type === "adults") adults = val;
        if (type === "children") children = val;
        if (type === "rooms") rooms = val;
      });

      input.value = `${adults} Adults - ${children} Children - ${rooms} Rooms`;
    };

    dropdown.addEventListener("click", e => {
      const btn = e.target.closest("button");
      if (!btn) return;
      e.preventDefault();

      const row = btn.closest(".flex.items-center.justify-between");
      if (!row) return;

      const count = row.querySelector(".count");
      const min = parseInt(count.dataset.min, 10);
      let current = parseInt(count.textContent, 10);

      if (btn.id === "plus") count.textContent = current + 1;
      if (btn.id === "minus" && current > min) count.textContent = current - 1;

      updateInput();
    });

    dropdown.querySelector(".mt-4 button").addEventListener("click", () => {
      dropdown.classList.remove("opacity-100");
      dropdown.classList.add("opacity-0", "pointer-events-none");
    });

    updateInput();
  });

});

// Login page
  document.querySelectorAll(".form-area").forEach(area => {
    area.querySelectorAll("div").forEach(wrapper => {
      const field = wrapper.querySelector("input, textarea, select");
      const label = wrapper.querySelector("label");

      if (!field || !label) return;

      // label initially hidden
      label.classList.add("hidden");

      const isSelect = field.tagName === "SELECT";

      field.addEventListener("focus", () => {
        if (!isSelect) {
          field.placeholder = "";
        }
        label.classList.remove("hidden");
      });

      field.addEventListener("blur", () => {
        if (isSelect) {
          if (!field.value) {
            label.classList.add("hidden");
          }
        } else {
          if (field.value === "") {
            field.placeholder = label.innerText;
            label.classList.add("hidden");
          }
        }
      });

      // for select change
      if (isSelect) {
        field.addEventListener("change", () => {
          if (field.value) {
            label.classList.remove("hidden");
          } else {
            label.classList.add("hidden");
          }
        });
      }
    });
  });

  // Phone number
  document.querySelectorAll(".phone").forEach(wrapper => {
    const input = wrapper.querySelector("input");

    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, '');
      if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
      }

      if (input.value.length > 0) {
        label.classList.remove("hidden");
        input.placeholder = "";
      } else {
        label.classList.add("hidden");
        input.placeholder = "Mobile Number *";
      }
    });

    input.addEventListener("blur", () => {
      if (input.value === "") {
        label.classList.add("hidden");
        input.placeholder = "Mobile Number *";
      }
    });
  });

  // FAQ
document.querySelectorAll(".accordion-wrap").forEach(wrap => {
  const button = wrap.querySelector(".accordion-button");
  const content = wrap.querySelector(".accordion-contents");
  const plus = wrap.querySelector(".plus-icon");
  const minus = wrap.querySelector(".minus-icon");
  const shadowClass = "shadow-[0_0_0_0.25rem_rgba(13,110,253,0.25)]";
  const activeBgClass = "bg-[#052c65]";
  const activeTextClass = "text-white";
  button.addEventListener("click", () => {
    const isOpen = content.classList.contains("content");

    if (isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      requestAnimationFrame(() => {
        content.classList.remove("content");
        content.style.maxHeight = "0px";
        button.classList.remove(shadowClass);
        button.classList.remove(activeBgClass);
        button.classList.remove(activeTextClass);
      });

      plus.classList.remove("hidden");
      minus.classList.add("hidden");
    } else {
      // OPEN
      content.classList.add("content");
      content.style.maxHeight = content.scrollHeight + "px";

      // add active classes
      button.classList.add(shadowClass);
      button.classList.add(activeBgClass);
      button.classList.add(activeTextClass);

      // after animation → auto height
      content.addEventListener(
        "transitionend",
        function handler() {
          content.style.maxHeight = "none";
          content.removeEventListener("transitionend", handler);
        }
      );

      plus.classList.add("hidden");
      minus.classList.remove("hidden");
    }
  });
});


// Range slider
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const minInput = document.getElementById("minInput");
  const maxInput = document.getElementById("maxInput");
  const rangeTrack = document.getElementById("rangeTrack");

  const minGap = 100;

  function updateRange() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (maxVal - minVal <= minGap) {
      if (event.target === minRange) {
        minRange.value = maxVal - minGap;
      } else {
        maxRange.value = minVal + minGap;
      }
    }

    minInput.value = minRange.value;
    maxInput.value = maxRange.value;

    const minPercent = (minRange.value / minRange.max) * 100;
    const maxPercent = (maxRange.value / maxRange.max) * 100;

    rangeTrack.style.left = minPercent + "%";
    rangeTrack.style.width = maxPercent - minPercent + "%";
  }

  minRange.addEventListener("input", updateRange);
  maxRange.addEventListener("input", updateRange);

  minInput.addEventListener("input", () => {
    minRange.value = minInput.value;
    updateRange();
  });

  maxInput.addEventListener("input", () => {
    maxRange.value = maxInput.value;
    updateRange();
  });

  updateRange();

