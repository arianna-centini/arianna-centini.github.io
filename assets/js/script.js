function SendMail() {
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_ojddl1p", "template_a5cj1t9", params).then(function (res) {
    alert("Success! " + res.status);
  })
}
