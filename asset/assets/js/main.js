
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    window.dataLayer.push({
      event: "link_click",
      link_text: link.innerText,
      link_url: link.href
    });
  });
});
