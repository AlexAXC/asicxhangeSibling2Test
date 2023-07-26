const url = `https://formsubmit.co/alex.8979323846@gmail.com`;

document.addEventListener("DOMContentLoaded", function() {
    // Устанавливаем атрибут action формы на сгенерированный URL
    const form = document.querySelector(".contact-form");
    form.action = url;

    form.querySelector('input[name="_next"]').value = "index.html";
    form.querySelector('input[name="_subject"]').value = "New Lead!";
    form.querySelector('input[name="_template"]').value = "table";
    form.querySelector('input[name="_captcha"]').value = "false";
  });