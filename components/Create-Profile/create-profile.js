// Action to preform when create button is clicked
$(".create-button button").on("click", () => {
  // set errors flag
  let err = false;
  // check the inputs make sure they have data
  $("input").each((index, element) => {
    if (
      !$(element).val() &&
      ($(element).is("input:text") || $(element).is("input:password"))
    ) {
      if (
        !$(element)
          .next()
          .is("p")
      ) {
        $(element).after(
          `<p class="inserted-text">This section must be filled in</p>`
        );
        err = true;
      }
    } else {
      if (
        $(element)
          .next()
          .is("p")
      ) {
        $(element)
          .next()
          .remove();
        err = false;
      }
    }
  });
  //   make sure there is a file ready to be uploaded
  if (!$("#FileUpload1").val()) {
    $(".user-img img").after(
      `<p class="inserted-text">This section must be filled in</p>`
    );
    err = true;
  } else {
    if (
      $(".user-img img")
        .next()
        .is("p")
    ) {
      $(".user-img img")
        .next()
        .remove();
      err = false;
    }
  }

  if (!err) {
    //   what to do if no errors
    const dataToSend = {
      imgUrl: extractImg($("#FileUpload1").val()),
      username: $("input:text").val(),
      password: $("input:password").val()
    };
    console.log(dataToSend);

    // make post request to create user db
    $.post("http://localhost:3000/users", dataToSend, data => {
      window.location.href = "/components/Login/login.html";
    });
  }
});

// Action to perform when img is clicked
$(".user-img img").on("click", () => {
  $("#FileUpload1").click();
});

// HELPER FUNCTIONS
function extractImg(imgObject) {
  return $("#FileUpload1")[0].files && $("#FileUpload1")[0].files.length
    ? $("#FileUpload1")[0].files[0].name
    : "";
}

// action to  perform when the login button is clicked
$(".login-button button").on("click", () => {
  window.location.href = "/components/Login/login.html";
});
