/* ============================================================
   SEMI FIXING WEBSITE - COMPLETE JAVASCRIPT FUNCTIONALITY
   Author: Semi Fixing Web
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------------------------
     FORM VALIDATION (Contact & Enquiry Pages)
  ----------------------------------------------------------- */
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      let valid = true;
      const requiredInputs = form.querySelectorAll("input[required], textarea[required]");

      // Check if any required input is empty
      requiredInputs.forEach((input) => {
        if (input.value.trim() === "") {
          valid = false;
          input.style.border = "2px solid red";
        } else {
          input.style.border = "1px solid #ccc";
        }
      });
      /*
   Enhancements JS
   - Lightbox
   - Dynamic search
   - Form validation
   - Interactive Google Map (auto-created under footer)
*/

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
       LIGHTBOX GALLERY
  ------------------------------------------ */
  const imgs = document.querySelectorAll("#productList img");

  // Create overlay
  const overlay = document.createElement("div");
  overlay.id = "lightboxOverlay";
  overlay.innerHTML = `
    <span id="lightboxClose">&times;</span>
    <img id="lightboxImage" src="">
  `;
  document.body.appendChild(overlay);

  const lightboxImg = document.getElementById("lightboxImage");
  const btnClose = document.getElementById("lightboxClose");

  imgs.forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  btnClose.addEventListener("click", () => overlay.style.display = "none");

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.style.display = "none";
  });


  /* -----------------------------------------
       SEARCH FILTER + SUGGESTIONS
  ------------------------------------------ */
  const searchBox = document.getElementById("searchBox");
  const productDivs = document.querySelectorAll("#productList > div");

  // Create suggestion box
  const suggestionBox = document.createElement("div");
  suggestionBox.id = "searchSuggestions";
  searchBox.insertAdjacentElement("afterend", suggestionBox);

  searchBox.addEventListener("keyup", () => {
    const query = searchBox.value.toLowerCase().trim();
    suggestionBox.innerHTML = "";
    suggestionBox.style.display = "none";

    productDivs.forEach(prod => {
      prod.style.display = prod.innerText.toLowerCase().includes(query) ? "block" : "none";

      if (query && prod.innerText.toLowerCase().includes(query)) {
        const item = document.createElement("div");
        item.textContent = prod.querySelector("h3").textContent;
        item.addEventListener("click", () => {
          searchBox.value = item.textContent;
          suggestionBox.style.display = "none";

          productDivs.forEach(p => {
            p.style.display = p.innerText.includes(item.textContent) ? "block" : "none";
          });
        });

        suggestionBox.appendChild(item);
        suggestionBox.style.display = "block";
      }
    });
  });


  /* -----------------------------------------
       FORM VALIDATION (Contact & Enquiry)
  ------------------------------------------ */
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      let valid = true;

      form.querySelectorAll("input, textarea").forEach(field => {
        const msgClass = field.id + "_msg";
        const oldMsg = document.getElementById(msgClass);
        if (oldMsg) oldMsg.remove();

        field.classList.remove("error");

        if (field.hasAttribute("required") && !field.value.trim()) {
          valid = false;
          field.classList.add("error");

          const msg = document.createElement("div");
          msg.id = msgClass;
          msg.className = "validationMsg";
          msg.textContent = "This field is required";
          field.insertAdjacentElement("afterend", msg);
        }
      });

      if (!valid) {
        e.preventDefault();
      } else {
        alert("Thank you! Your form has been submitted.");
      }
    });
  });


  /* -----------------------------------------
       INTERACTIVE MAP (inserted under footer)
  ------------------------------------------ */
  const footer = document.querySelector("footer");
  if (footer) {
    const title = document.createElement("div");
    title.id = "mapTitle";
    title.textContent = "Find Us On The Map";

    const mapDiv = document.createElement("div");
    mapDiv.id = "mapContainer";

    footer.insertAdjacentElement("afterend", title);
    title.insertAdjacentElement("afterend", mapDiv);

    // Load Google Maps script dynamically
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&callback=initMap";
    script.async = true;
    document.body.appendChild(script);
  }

  window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("mapContainer"), {
      center: { lat: -25.8271, lng: 28.2473 }, // Mabopane Area
      zoom: 14,
    });

    // Add markers from product HTML data attributes
    document.querySelectorAll("#productList > div").forEach(div => {
      const lat = parseFloat(div.dataset.lat);
      const lng = parseFloat(div.dataset.lng);

      if (!isNaN(lat) && !isNaN(lng)) {
        new google.maps.Marker({
          position: { lat, lng },
          map,
          title: div.querySelector("h3").innerText,
        });
      }
    });
  };
});


      // Check email format
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value.trim() !== "") {
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(emailInput.value)) {
          valid = false;
          emailInput.style.border = "2px solid red";
          alert("⚠️ Please enter a valid email address.");
        }
      }

      // Prevent submission if form invalid
      if (!valid) {
        event.preventDefault();
        alert("⚠️ Please fill in all required fields before submitting.");
      } else {
        alert("✅ Thank you! Your form has been submitted successfully.");
      }
    });
  });

  /* -----------------------------------------------------------
     ACCORDION SECTION (About Page Testimonials)
  ----------------------------------------------------------- */
  const accordionButtons = document.querySelectorAll(".accordion-btn");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Close other accordions
      accordionButtons.forEach((btn) => {
        if (btn !== button) {
          btn.classList.remove("active");
          const otherPanel = btn.nextElementSibling;
          if (otherPanel) otherPanel.style.display = "none";
        }
      });

      // Toggle current accordion
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  /* -----------------------------------------------------------
     PRODUCT SEARCH FILTER (Products Page)
  ----------------------------------------------------------- */
  const searchBox = document.getElementById("searchBox");

  if (searchBox) {
    const productList = document.querySelectorAll("#productList li");

    searchBox.addEventListener("keyup", () => {
      const text = searchBox.value.toLowerCase();

      productList.forEach((item) => {
        if (item.textContent.toLowerCase().includes(text)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }

  /* -----------------------------------------------------------
     SMOOTH SCROLL ANIMATION (All Pages)
  ----------------------------------------------------------- */
  const animatedElements = document.querySelectorAll("section, .layout div, .card");

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-in-out";
  });

  window.addEventListener("scroll", () => {
    animatedElements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  });

  /* -----------------------------------------------------------
     BACK TO TOP BUTTON (Extra Functionality)
  ----------------------------------------------------------- */
  const topBtn = document.createElement("button");
  topBtn.id = "backToTop";
  topBtn.textContent = "⬆ Top";
  document.body.appendChild(topBtn);

  // Style the button
  Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    background: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    display: "none",
    zIndex: "999",
  });

  // Show or hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* -----------------------------------------------------------
     AUTO YEAR UPDATE IN FOOTER
  ----------------------------------------------------------- */
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
