let contactForm = document.getElementById("contactForm");
let error = document.getElementById("submitErrorMessage")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  mainFunction();
});

const reqSubcribe = async () => {
  let email = document.getElementById("email");
  error.innerHTML="";
  if (email == "") {
    error.innerHTML = "Credential is required";
    if (!error.classList.contains('text-danger')) {
        error.classList.add('text-danger')
        error.classList.toggle("d-none")
    }
    return false;
}
  let temp = email.value;
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      token: "hellofromheadertoken",
    },
    body: JSON.stringify({
      title: temp,
      userId: 4,
    }),
  };

  let p = await fetch("https://dummyjson.com/posts/add", options);
  let res = await p.json();
  if (res.ok) {
    console.log(res);
    console.log("Subscribed successfully!");
  } else {
    console.log("Failed to subscribe!");
    return false;
  }
};

const mainFunction = async () => {
  const subcribeMail = await reqSubcribe();
  console.log(subcribeMail);
};
