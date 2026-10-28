const LINKS = {
  linkedin: "https://www.linkedin.com/in/masdlave",
  youtube: "https://www.youtube.com/@marimentita",
  mistbook: "https://mistbook.app/u/marimentita",

  instagram: "https://www.instagram.com/marimentita/",
  drawingInstagram: "https://www.instagram.com/marimentitart/",
  cosplayInstagram: "https://www.instagram.com/cosmentita/"
};

/* Elementos del HTML */

const titleElement = document.getElementById("sectionTitle");
const contentArea = document.getElementById("contentArea");

const homeButton = document.getElementById("homeButton");
const socialButton = document.getElementById("socialButton");
const aboutButton = document.getElementById("aboutButton");
const jobButton = document.getElementById("jobButton");
const likesButton = document.getElementById("likesButton");

const likesModalElement = document.getElementById("likesModal");

/* cuatro imágenes de inicio */
const activityItems = [
  {
    image: "./assets/singing.jpg",
    label: "singing",
    href: LINKS.youtube
  },
  {
    image: "./assets/drawing.jpg",
    label: "drawing",
    href: LINKS.drawingInstagram
  },
  {
    image: "./assets/reading.jpg",
    label: "reading",
    href: LINKS.mistbook
  },
  {
    image: "./assets/cosplay.jpg",
    label: "cosplay",
    href: LINKS.cosplayInstagram
  }
];

/* redes sociales */
const socialItems = [
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    href: LINKS.instagram
  },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    href: LINKS.youtube
  },
  {
    name: "TikTok",
    icon: "fa-brands fa-tiktok",
    href: "https://www.tiktok.com/@marimentita"
  },
  {
    name: "Spotify",
    icon: "fa-brands fa-spotify",
    href: "https://open.spotify.com/user/312v2rob7qmr6kay3fb2tnbda3ce"
  },
  {
    name: "Pinterest",
    icon: "fa-brands fa-pinterest-p",
    href: "https://es.pinterest.com/marimentita/"
  },
  {
    name: "X / Twitter",
    icon: "fa-brands fa-x-twitter",
    href: "https://x.com/marimentita"
  },
  {
    name: "Tumblr",
    icon: "fa-brands fa-tumblr",
    href: "https://www.tumblr.com/blog/marimentita"
  },
  {
    name: "Twitch",
    icon: "fa-brands fa-twitch",
    href: "https://www.twitch.tv/marimentitah/"
  },
  {
    name: "Discord",
    icon: "fa-brands fa-discord",
    href: "https://discord.com/marimentita"
  },
  {
    name: "GitHub",
    icon: "fa-brands fa-github",
    href: "https://github.com/marimentita"
  },
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    href: LINKS.linkedin
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook-f",
    href: "https://www.facebook.com/marimentita/"
  },
  {
    name: "Telegram",
    icon: "fa-brands fa-telegram",
    href: "https://t.me/marimentita"
  },
  {
    name: "Reddit",
    icon: "fa-brands fa-reddit-alien",
    href: "https://www.reddit.com/marimentita"
  },
  {
    name: "Snapchat",
    icon: "fa-brands fa-snapchat",
    href: "https://www.snapchat.com/marimentita"
  },
  {
    name: "Threads",
    icon: "fa-brands fa-threads",
    href: "https://www.threads.net/marimentita"
  }
];


function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("'", "&#039;");
}

function externalLink(href) {
  return `href="${escapeHTML(href)}" target="_blank" rel="noopener noreferrer"`;
}


function renderHome() {
  titleElement.textContent = "what I do";

  contentArea.innerHTML = `
    <div class="activity-grid" id="activityGrid">

      ${activityItems.map(item => `
        <a
          class="activity-card"
          ${externalLink(item.href)}
          aria-label="${escapeHTML(item.label)}"
        >
          <img
            src="${item.image}"
            alt="${escapeHTML(item.alt)}"
          >

          <span class="activity-label">
            ${escapeHTML(item.label)}
            <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </span>
        </a>
      `).join("")}

    </div>
  `;
}



function renderSocial() {
  titleElement.textContent = "find me";

  contentArea.innerHTML = `
    <div class="social-grid" aria-label="Redes sociales">

      ${socialItems.map(item => `
        <a
          class="social-tile"
          ${externalLink(item.href)}
          aria-label="Abrir ${escapeHTML(item.name)}"
        >
          <i class="${item.icon}" aria-hidden="true"></i>
          <span>${escapeHTML(item.name)}</span>
        </a>
      `).join("")}

    </div>
  `;
}

function renderAbout() {
  titleElement.textContent = "about me - sobre mi";

  contentArea.innerHTML = `
    <div class="about-copy">
      <p>
        mi nombre es maria, con pronombres ella/suya (she/her)
        y hablo español e inglés (spanish and english);
        mi personalidad es ESFJ, soy desarrolladora de software
        <span class="sparkle">^^ ♡</span>
      </p>
    </div>
  `;
}


let audioContext;

function playClickSound() {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    audioContext ||= new AudioContextClass();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      680,
      audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
      420,
      audioContext.currentTime + 0.055
    );

    gain.gain.setValueAtTime(
      0.0001,
      audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
      0.035,
      audioContext.currentTime + 0.008
    );

    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioContext.currentTime + 0.075
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.08);

  } catch (error) {
    // si el navegador bloquea el audio, la web sigue funcionando :D
  }
}


function animateWindowButton(button) {
  button.classList.remove("is-clicked");

  void button.offsetWidth;

  button.classList.add("is-clicked");

  window.setTimeout(() => {
    button.classList.remove("is-clicked");
  }, 260);

  playClickSound();
}



homeButton.addEventListener("click", () => {
  renderHome();
  playClickSound();
});


socialButton.addEventListener("click", () => {
  renderSocial();
  playClickSound();
});


aboutButton.addEventListener("click", () => {
  renderAbout();
  playClickSound();
});


jobButton.addEventListener("click", () => {
  playClickSound();

  window.open(
    LINKS.linkedin,
    "_blank",
    "noopener,noreferrer"
  );
});


likesButton.addEventListener("click", () => {
  playClickSound();

  if (window.bootstrap && window.bootstrap.Modal) {
    window.bootstrap.Modal
      .getOrCreateInstance(likesModalElement)
      .show();
  }
});


document
  .querySelectorAll("[data-window-action]")
  .forEach(button => {
    button.addEventListener("click", () => {
      animateWindowButton(button);
    });
  });


renderHome();
