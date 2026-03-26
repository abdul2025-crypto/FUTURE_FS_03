
const typingText = document.getElementById("typing-text");

if (typingText) {
  const words = [
    "Get help with Programming 💻",
    "Master Databases 📊",
    "Pass your IT modules 🚀"
  ];

  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function type() {
    currentWord = words[i];

    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, j--);
    } else {
      typingText.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
}

const form = document.getElementById("tutorForm");

if (form) {
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const message = document.getElementById("message");
    message.innerHTML = "✅ Request sent! A tutor will contact you soon.";
    message.style.color = "#22c55e";
  });
}

function showDetails(subject) {
  const details = {
    programming: "We help with C#, JavaScript, and problem solving.",
    databases: "Learn SQL, normalization, and database design."
  };

  const output = document.getElementById("details");
  if (output) {
    output.innerText = details[subject];
  }
}

function showMessage(subject) {
  const message = document.getElementById("subject-message");
  message.innerText = "You selected " + subject + ". Click 'Book a Tutor' to get help.";
}

tsParticles.load("particles-js", {
  background: {
    color: "transparent"
  },
  fpsLimit: 60,

  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },

    color: {
      value: "#38bdf8"
    },

    shape: {
  type: ["circle", "triangle"]
},

    opacity: {
      value: 0.5
    },

    size: {
      value: { min: 1, max: 4 }
    },

    links: {
      enable: true,
      distance: 150,
      color: "#38bdf8",
      opacity: 0.4,
      width: 1
    },

    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "out"
      }
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      }
    }
  },

  detectRetina: true
});
