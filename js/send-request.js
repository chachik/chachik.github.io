var url = 'https://script.google.com/macros/s/AKfycbzwIMEq_tTXZbikFNmSBcX79jDzfBIC5AzO7NM4zA/exec';

function validEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};

function contactUs() {
  $('#email').focus();
}

function validateHuman(honeypot) {
  if (honeypot) {  //if hidden form filled up
    console.log("Robot Detected!");
    return true;
  } else {
    console.log("Welcome Human!");
  }
};

function validateInput() {
  var email = $('#email').val();
  var name = $('#name').val();
  var description = $('#description').val();

  var isEmailValid = validEmail(email);
  $('#email-validation').css("visibility", (email == null || email.trim() === '') || isEmailValid ? "hidden" : "visible");

  var btn = $('#send')[0];
  if (isEmailValid && !(name == null || name.trim() === '') && !(description == null || description.trim() === '')) {
    btn.disabled = false;
  }
  else {
    btn.disabled = true;
  }
}

// get all data in form and return object
function getFormData() {
  var formData = {};

  formData.email = $('#email').val();
  formData.name = $('#name').val();
  formData.description = $('#description').val();

  // add form-specific values into the data
  formData.formDataNameOrder = 'email, name, description';
  formData.formGoogleSheetName = "responses"; // default sheet name
  formData.formGoogleSendEmail = ""; // no email by default

  console.log(formData);
  return formData;
};

function sendRequest() {
  var data = getFormData();

  /* OPTION: Remove this comment to enable SPAM prevention, see README.md
  if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
    return false;
  }
  */

  if (data.email && !validEmail(data.email)) {   // if email is not valid show error
    var invalidEmail = form.querySelector(".email-invalid");
    if (invalidEmail) {
      invalidEmail.style.display = "block";
      return false;
    }
  } else {
    setExecuting(true);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);

      // Show modal
      var modal = document.getElementById('myModal');
      modal.style.display = "block";
      $('#description').val('');

      setExecuting(false);
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
};

function setExecuting(value) {
  $('#send')[0].disabled = value;
  $('#send').css("cursor", value ? "wait" : "pointer"); 
  $('#main').css("cursor", value ? "wait" : "pointer"); 
};

// Get the modal
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}