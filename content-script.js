let a = document.createElement("a");
a.target = "_blank";
a.href = window.location.href.replace("numbers", "karma");

let img = document.createElement("img");
img.src = "https://wows-karma.com/assets/media/icons/android-chrome-192x192.png";
img.alt = "Open WOWS Karma Profile";
img.style = "height: 1.17em; margin-left: 0.5em;"

a.appendChild(img);
document.querySelector("body > div.container.main-container > div:nth-child(4) > div > h3").appendChild(a);