/*Create a form with a text input and a button. Use JavaScript to validate if the
input is not empty before submitting the form.*/

function validate() {

    let x = document.forms["myform"]["feedback"].value;
    if (x == "") {
        alert("Pls write a feedback!");

    }

}