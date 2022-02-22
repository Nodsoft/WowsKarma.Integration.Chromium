console.image = function(url, size = 100) {
    var image = new Image();
    image.onload = function() {
      var style = [
        'font-size: 1px;',
        'padding: ' + this.height/100*size + 'px ' + this.width/100*size + 'px;',
        'background: url(' + url + ') no-repeat;',
        'background-size: contain;'
       ].join(' ');
       console.log('%c ', style);
    };

    image.src = url;
};

console.image("https://wows-karma.com/assets/media/icons/android-chrome-512x512.png", 50);
console.log("Loaded WOWS Karma for Chromium.")

let a = document.createElement("a");
a.target = "_blank";
a.href = window.location.href.replace("numbers", "karma");

let img = document.createElement("img");
img.src = "https://wows-karma.com/assets/media/icons/android-chrome-192x192.png";
img.alt = "Open WOWS Karma Profile";
img.style = "height: 1.17em; margin-left: 0.5em;"

a.appendChild(img);
document.querySelector("body > div.container.main-container > div:nth-child(4) > div > h3").appendChild(a);

console.debug("Appended WOWS Karma link.");