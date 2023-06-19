const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.style.visibility = "visible";

  // Implement a click event handler on the `butInstall` element
  butInstall.addEventListener("click", () => {
    event.prompt();
    butInstall.ariaDisabled = true;
    installButton.textContent = "Installed";
  });
});

// Add handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    console.log("Installed succesfully", event);
});
