
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

