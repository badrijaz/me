/* About section font animation and hide sections */
const introName = document.getElementById("intro-name");
document.body.onload = () => {
  hideSections();

  const introNameSpans = Array.from(introName.children);
  introNameSpans.forEach((child, index) => {
    setTimeout(() => {
      child.classList.add("font-animation");
    }, 200 * index);
  });
};

const SLIDING_AWAY_DURATION = 500

const aboutNavigation = document.getElementById("about")
const projectsNavigation = document.getElementById("projects")
const contactNavigation = document.getElementById("contact")

let currentNavigation = aboutNavigation
let previousNavigation = null

const aboutSection = document.querySelector(".about")
const projectsSection = document.querySelector(".projects")
const sadaaSection = document.querySelector(".sadaa")
const contactSection = document.querySelector(".contact")

const sections = {
  about: aboutSection,
  projects: projectsSection,
  sadaa: sadaaSection,
  contact: contactSection,
}

function hideSections() {
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 200);

  setTimeout(() => {
    for (const section of Object.keys(sections)) {
      if (section === "about") continue;

      sections[section].classList.toggle("hidden", true)
      sections[section].classList.toggle("active", false)
    }
  }, 100)
}

function navigate(navigation) {
  currentNavigation.classList.toggle("active")
  navigation.classList.toggle("active")

  previousNavigation = currentNavigation
  currentNavigation = navigation
  toggleSection()
}

function toggleSection() {
  if (previousNavigation === currentNavigation) return;

  // If already active, do not do anything
  if (sections[currentNavigation.id].classList.contains("active"))
    return

  for (const section of Object.keys(sections)) {
    if (section === currentNavigation.id) {
      sections[section].classList.toggle("hidden", false)
      sections[section].classList.toggle("active", true)
      continue
    }

    sections[section].classList.toggle("hidden", true)
    sections[section].classList.toggle("active", false)
  }
}

/* Send button */
const sendButton = document.querySelector(".form-button")
const sentDiv = document.querySelector(".sent")

sendButton.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const message = document.getElementById("message")

  if (name.value === "" || email.value === "" || message.value === "") {
    alert("three fields, thats all it takes")
    return
  }

  sendButton.value = '...'
  sendButton.classList.toggle("sending", true)

  const contactForm = {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }

  emailjs.send("service_u4o0ft1", "template_3kffk2l", contactForm)
    .then(() => {
      sentDiv.classList.toggle("active", true)
      sendButton.value = "sent"

      // Clear inputs
      setTimeout(() => {
        name.value = ""
        email.value = ""
        message.value = ""
        sendButton.value = "send"
      }, 1000)

      // Set sent div back to normal
      setTimeout(() => {
        sentDiv.classList.toggle("active", false)
        sendButton.classList.toggle("sending", false)
      }, 2000);
    })

})
