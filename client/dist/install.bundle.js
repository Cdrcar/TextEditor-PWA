(()=>{const t=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),t.style.visibility="visible",t.addEventListener("click",(()=>{e.prompt(),t.ariaDisabled=!0,installButton.textContent="Installed"}))})),window.addEventListener("appinstalled",(t=>{console.log("Installed succesfully",t)}))})();