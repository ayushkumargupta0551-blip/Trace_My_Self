// home page js
 
 document.addEventListener("DOMContentLoaded", () => {
        $("#startScan")?.addEventListener(
          "click",
          () => (location.href = "scan.html"),
        );
      });

      document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
          const currentItem = question.closest(".faq-item");

          document.querySelectorAll(".faq-item").forEach((item) => {
            if (item !== currentItem) {
              item.classList.remove("active");
            }
          });

          currentItem.classList.toggle("active");
        });
      });