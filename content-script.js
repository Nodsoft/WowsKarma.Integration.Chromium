let a = document.createElement("a");
a.href = window.location.href.replace("numbers", "karma");
a.textContent = "WOWS Karma";
a.target = "_blank"
document.querySelector("body > div.container.main-container > div:nth-child(4) > div > h3").appendChild(a);