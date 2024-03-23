const AUTH_HOST = process.env.AUTH_HOST;
const AUTH_UN = process.env.AUTH_UN;
const AUTHTOK = process.env.AUTHTOK;
const AUTH_TO = process.env.AUTH_TO;

function sendEmail(){
          var checkedmsz = document.getElementById('inpt4').checked ? 'Yes' : 'No';
          
          Email.send({
              Host : AUTH_HOST,
              Username : AUTH_UN,
              Password : AUTHTOK,
              To : AUTH_TO,
              From : AUTH_UN,
              Subject : "New Contact Form from " +
                document.getElementById("inpt1").value,
              Body : "Name : " + document.getElementById("inpt1").value
                    +"<br> Email : " + document.getElementById("inpt2").value
                    +"<br> Message : " + document.getElementById("inpt3").value
                    +"<br> Liked : " + checkedmsz
          }).then(
              message => alert("Message send succesfully")
          );
        }
