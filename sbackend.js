let text_box = document.getElementById("input-from-user");
let display_wordCount = document.getElementById("total_words");

text_box.addEventListener("input", function () {
  let text = text_box.value.trim();
  let wordCount = text === "" ? 0 : text.split(/\s+/).length;
  display_wordCount.textContent =  wordCount;
});
