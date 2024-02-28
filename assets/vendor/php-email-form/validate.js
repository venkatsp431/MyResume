// (function () {
//   "use strict";

//   let forms = document.querySelectorAll(".php-email-form");

//   forms.forEach(function (e) {
//     // e.preventDefault();
//     e.addEventListener("submit", async function (event) {
//       event.preventDefault();

//       let thisForm = this;
//       let action = thisForm.getAttribute("action");

//       if (!action) {
//         displayError(thisForm, "The form action property is not set!");
//         return;
//       }

//       thisForm.querySelector(".loading").classList.add("d-block");
//       thisForm.querySelector(".error-message").classList.remove("d-block");
//       thisForm.querySelector(".sent-message").classList.remove("d-block");

//       let formData = new FormData(thisForm);
//       console.log(formData);
//       try {
//         const response = await fetch("http://localhost:8000/api/contact", {
//           method: "POST",
//           body: formData,
//           headers: { "X-Requested-With": "XMLHttpRequest" },
//         });

//         if (response.ok) {
//           const data = await response.text();

//           thisForm.querySelector(".loading").classList.remove("d-block");
//           console.log(JSON.parse(data).success);
//           if (JSON.parse(data).success === true) {
//             thisForm.querySelector(".sent-message").classList.add("d-block");
//             thisForm.reset();
//           } else {
//             throw new Error(
//               data
//                 ? data
//                 : `Form submission failed and no error message returned from: ${action}`
//             );
//           }
//         } else {
//           throw new Error(
//             `${response.status} ${response.statusText} ${response.url}`
//           );
//         }
//       } catch (error) {
//         displayError(thisForm, error);
//       }
//     });
//   });

//   function displayError(thisForm, error) {
//     thisForm.querySelector(".loading").classList.remove("d-block");
//     thisForm.querySelector(".error-message").innerHTML = error;
//     thisForm.querySelector(".error-message").classList.add("d-block");
//   }
// })();
