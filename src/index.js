import SignUp from './pages/signUp/SignUp.js';
import SignIn from './pages/signIn/SignIn.js';
import RequestRestorePassword from './pages/requestRestorePassword/RequestRestorePassword.js';
import DoneRestorePassword from './pages/doneRestorePassword/DoneRestorePassword.js';
import { showHidePassword } from './showHidePassword.js';
import { validation } from './validation/validation.js';



const host = window.origin

const routes = [
  { path: "/itrex/", view: new SignUp(), title: "Sign Up", hrefLink: "/src/pages/signUp/index.css" },
  { path: "/itrex/sign-in", view: new SignIn(), title: "Sign In", hrefLink: "/src/pages/signIn/index.css" },
  { path: "/itrex/restore-password", view: new RequestRestorePassword(), title: "Restore Password", hrefLink: "/src/pages/requestRestorePassword/index.css" },
  { path: "/itrex/done-restore-password", view: new DoneRestorePassword(), title: "Done Restore Password", hrefLink: "/src/pages/doneRestorePassword/index.css" }
];


// render page depending on the path
export const render = (path) => {
  // finding the desired object with data in the array
  const page = routes.find((page) => page.path === path);


  // displayed this page
  document.querySelector("#app").innerHTML = page.view.getHtml() || `<h1>404</h1>`;
  document.title = page.title;

  if (host === "https://aradch.github.io") {
    document.querySelector("[type = 'text/css']").setAttribute("href", (host + "/itrex" + page.hrefLink))
  } else {
    document.querySelector("[type = 'text/css']").setAttribute("href", (host + page.hrefLink))
  }


  document.querySelectorAll('[href^="/"]').forEach(element =>
    element.addEventListener("click", event => {
      event.preventDefault();
      const { pathname: path } = new URL(event.target.href);
      window.history.pushState(null, null, path);
      render(path);
    })
  );

  // get input and svg, which changes the type of password
  const eyePassword = document.querySelector(".form__block-password_show-password")
  const eyeConfirmPassword = document.querySelector(".form__block-confirm-password_show-password")
  const inputPassword = document.querySelector(".form__input_image_password")
  const inputConfirmPassword = document.querySelector(".form__input_image_confirm-password")

  if (eyePassword) {
    eyePassword.onclick = (() => showHidePassword(eyePassword, "block-password", inputPassword))
  }

  if (eyeConfirmPassword) {
    eyeConfirmPassword.onclick = (() => showHidePassword(eyeConfirmPassword, "block-confirm-password", inputConfirmPassword))
  }

  validation(path)
};

window.addEventListener("popstate", (e) => render(new URL(window.location.href).pathname));
render("/itrex/");


