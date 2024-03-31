const text = document.querySelector(".text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "FrontEndDeveloper";
    }, 4000);

};
textLoad();

let aboutMeText = document.querySelector(".aboutme");
const readMore = document.querySelector(".read-more");
readMore.addEventListener("click", function () {
    readMore.classList.toggle("clicked");
    if (readMore.classList.contains("clicked")) {
        aboutMeText.textContent =
            "Hey there! Raushan Kumar, a B.Tech graduate and full-stack web development. I love turning ideas into functional websites and applications. Passionate about creativity and problem-solving. Along the way, I've honed my skills in front-end and back-end technologies.";
        readMore.aboutmeTextContent = "Read Less";
    } else {
        aboutMeText.textContent =
            "Hey there! Raushan Kumar, a B.Tech graduate and full-stack web development. I love turning ideas into functional websites and applications. Passionate about creativity and problem-solving. Along the way, I've honed my skills in front-end and back-end technologies.";
        readMore.aboutmeTextContent = "Read More";
    }
});

const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
    let resumePath =
        "https://docs.google.com/document/d/11s-EkENPcg9zxGLj8gFTHBfmWum-Nu8C8w7rwvK-CCs/edit?usp=sharing";
    window.location.href = resumePath;
});

// sending email
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const sub = document.querySelector("#sub");
const msg = document.querySelector("#messg");
const errorDivs = document.querySelectorAll(".error-field");

function sendEmail() {
    const bodyMesg = `Full Name : ${fullName.value}<br> Contact No.: ${contact.value}<br>Email-Address: ${email.value}<br> Message: ${msg.value}`;
    console.log(email.value);

    errorDivs.forEach((errorDiv) => {
        errorDiv.style.display = "none";
    });

    // Check if any required field is empty
    let hasError = false;
    errorDivs.forEach((errorDiv, index) => {
        const inputField = form.elements[index];
        if (!inputField.value) {
            showError(errorDiv);
            hasError = true;
        }
    });

    if (hasError) {
        return; // Prevent further processing if there are errors
    }
    function showError(errorDiv) {
        errorDiv.style.display = "block";
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "raushankumaryadav25122002@gmail.com",
        Password: "Raushan@123",
        To: "raushankumaryadav25122002@gmail.com",
        From: "raushankumaryadav25122002@gmail.com",
        Subject: sub.value,
        Body: bodyMesg,
    }).then((message) =>
        alert("Email sent successfully!Thanks for your interest.")
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});
const ul = document.querySelector(".ham-list");
const ham = document.querySelector(".hamburg-menu");
ham.addEventListener("click", () => {
    ul.classList.toggle("display");
});
document.querySelectorAll(".ham-list li").forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelector(".ham-list").classList.remove("display");
    });
});