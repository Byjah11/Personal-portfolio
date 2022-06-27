export const scrollTo = (id) => {
  const section = document.getElementById(id);
  const yOffset = -70;
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};
