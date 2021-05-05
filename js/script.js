document.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(updateTime)
);

function updateTime() {
  document.documentElement.style.setProperty(
    "--timer-day",
    "'" + moment().format("dd") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-hours",
    "'" + moment().format("k") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-minutes",
    "'" + moment().format("mm") + "'"
  );
  document.documentElement.style.setProperty(
    "--timer-seconds",
    "'" + moment().format("ss") + "'"
  );
  requestAnimationFrame(updateTime);
}

(function () {
  "use strict";

  class Menu {
    constructor(settings) {
      this.menuNode = settings.menuNode;
      this.state = false;
      this.menuStateTextNode =
        settings.menuStateTextNode ||
        this.menuNode.querySelector(".menu__screen-reader");
      this.menuOpenedText = settings.menuOpenedText || "Open menu";
      this.menuClosedText = settings.menuClosedText || "Close menu";
    }

    changeState(state) {
      return (this.state = !state);
    }

    changeStateText(state, node) {
      let text = state !== true ? this.menuOpenedText : this.menuClosedText;

      node.textContent = text;
      return text;
    }

    toggleMenuState(className) {
      let state;

      if (typeof className !== "string" || className.length === 0) {
        return console.log(
          "you did not give the class for the toggleState function"
        );
      }

      state = this.changeState(this.state);

      this.changeStateText(state, this.menuStateTextNode);
      this.menuNode.classList.toggle(className);

      return state;
    }
  }

  const jsMenuNode = document.querySelector(".menu");
  const demoMenu = new Menu({
    menuNode: jsMenuNode,
  });

  function callMenuToggle(event) {
    demoMenu.toggleMenuState("menu_activated");
  }

  jsMenuNode
    .querySelector(".menu__toggle")
    .addEventListener("click", callMenuToggle);
})();

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
