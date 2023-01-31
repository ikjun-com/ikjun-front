/*다크,라이트모드 */
let currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
if (currentTheme === "light-theme") {
  document.body.classList.toggle("light-theme");
}
