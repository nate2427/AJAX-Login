// Get the all of the user accts from the database
let userData = [];
$.get("http://localhost:3000/users", data => {
  userData = data;
});

// action to perform when login button is clicked
$(".login-button button").on("click", () => {
  const username = $(".username input").val();
  const password = $(".password input").val();
  let err = true;
  userData.forEach(user_data => {
    if (username === user_data.username && password === user_data.password) {
      window.location.href = "../Logged-In-Landing/logged-in-landing.html";
      err = false;
    }
  });
  if (
    !(
      $(".login-logo h1")
        .prev()
        .is("p") && err
    )
  ) {
    $(".login-logo h1").before(
      `<p class="login-err">wrong username and password combination</p>`
    );
  }
});

// action to perform when create is clicked
$(".create-button button").on("click", () => {
  window.location.href = "/components/Create-Profile/create-profile.html";
});
