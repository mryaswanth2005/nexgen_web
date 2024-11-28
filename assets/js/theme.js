// Get references to the button and video
const playButton = document.getElementById("playButton");
const promoVideo = document.getElementById("promoVideo");

// Function to open video in full screen
playButton.addEventListener("click", () => {
  promoVideo.classList.remove("hidden"); // Show the video
  promoVideo.play(); // Start playing the video

  // Request full screen
  if (promoVideo.requestFullscreen) {
    promoVideo.requestFullscreen();
  } else if (promoVideo.webkitRequestFullscreen) {
    promoVideo.webkitRequestFullscreen(); // For Safari
  } else if (promoVideo.msRequestFullscreen) {
    promoVideo.msRequestFullscreen(); // For IE/Edge
  }
});

// Function to hide video after it finishes
promoVideo.addEventListener("ended", () => {
  promoVideo.pause(); // Pause the video (just in case)
  promoVideo.classList.add("hidden"); // Hide the video

  // Exit full screen
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen(); // For Safari
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen(); // For IE/Edge
  }
});


// Lucid Icons
lucide.createIcons();

// Sticky Navbar
function windowScroll() {
    const navbar = document.getElementById("navbar-sticky");
    if (navbar) {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add("nav-sticky");

        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}
window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
});

// Navbar Active Class
var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    // navClass: 'active', // applied to the nav list item
    // contentClass: 'active', // applied to the content
    offset: 80
});


// Back To Top Start   
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            mybutton.classList.add("opacity-100");
            mybutton.classList.remove("opacity-0");
        } else {
            mybutton.classList.add("opacity-0");
            mybutton.classList.remove("opacity-100");
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function init() {
    (window.onload = (function() {
        function t(t, e, n) {
            (this.toRotate = e),
            (this.el = t),
            (this.loopNum = 0),
            (this.period = parseInt(n, 10) || 2e3),
            (this.txt = ""),
            this.tick(),
                (this.isDeleting = !1);
        }
        t.prototype.tick = function() {
            var t = this.loopNum % this.toRotate.length,
                t = this.toRotate[t],
                e =
                (this.isDeleting ?
                    (this.txt = t.substring(0, this.txt.length - 1)) :
                    (this.txt = t.substring(0, this.txt.length + 1)),
                    (this.el.innerHTML = '<span class="text-wrap">' + this.txt + "</span>"),
                    this),
                n = 200 - 100 * Math.random();
            this.isDeleting && (n /= 2),
                this.isDeleting || this.txt !== t ?
                this.isDeleting &&
                "" === this.txt &&
                ((this.isDeleting = !1), this.loopNum++, (n = 500)) :
                ((n = this.period), (this.isDeleting = !0)),
                setTimeout(function() {
                    e.tick();
                }, n);
        };
        for (
            var e = document.getElementsByClassName("typewrite"), n = 0; n < e.length; n++
        ) {
            var i = e[n].getAttribute("data-type"),
                s = e[n].getAttribute("data-period");
            i && new t(e[n], JSON.parse(i), s);
        }
    })());
}
init();