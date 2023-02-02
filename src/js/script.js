"use strict";
// hamburger
const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closse = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closse.addEventListener("click", () => {
  menu.classList.remove("active");
});
// hamburger end

// form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add("_sending");
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove("_sending");
      } else {
        alert("Ошибка!");
        form.classList.remove("_sending");
      }
    } else {
      alert("Заполните обязательные поля");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  // фун-я тэста email
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
//  form end

// // Отправка данных на сервер
// function send(event, php) {
//   console.log("Отправка запроса");
//   event.preventDefault ? event.preventDefault() : (event.returnValue = false);
//   var req = new XMLHttpRequest();
//   req.open("POST", php, true);
//   req.onload = function () {
//     if (req.status >= 200 && req.status < 400) {
//       json = JSON.parse(this.response); // Ебанный internet explorer 11
//       console.log(json);

//       // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
//       if (json.result == "success") {
//         // Если сообщение отправлено
//         alert("Сообщение отправлено");
//       } else {
//         // Если произошла ошибка
//         alert("Ошибка. Сообщение не отправлено");
//       }
//       // Если не удалось связаться с php файлом
//     } else {
//       alert("Ошибка сервера. Номер: " + req.status);
//     }
//   };

//   // Если не удалось отправить запрос. Стоит блок на хостинге
//   req.onerror = function () {
//     alert("Ошибка отправки запроса");
//   };
//   req.send(new FormData(event.target));
// }

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  rewind: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: -200,
    depth: 500,
    modifier: 1.4,
    slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".promoSwiper", {
  autoHeight: true,
  rewind: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
