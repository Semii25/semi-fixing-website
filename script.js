/* ============================================================ 
   SEMI FIXING WEBSITE - COMPLETE JAVASCRIPT FUNCTIONALITY 
   Author: Semi Fixing Web  
   ============================================================ */ 



// Run the code only after the whole page has loaded 

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

 

      // If not valid, stop form submission 

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

 

      // Toggle the current accordion 

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

 

  // Scroll smoothly to top 

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