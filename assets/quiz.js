/* Reusable quiz widget: buttons carry data-correct="1" on the right answer. */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((q) => {
    const result = q.querySelector(".result");
    q.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ok = btn.dataset.correct === "1";
        result.textContent = ok ? "○ 正解" : "× 不正解。もう一度考えろ。";
        result.style.color = ok ? "green" : "#8a2b2b";
      });
    });
  });
});
