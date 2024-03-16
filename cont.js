function sendEmail(){
          var checkedmsz = document.getElementById('inpt4').checked ? 'Yes' : 'No';
          
          Email.send({
              Host : process.env.AUTH_HOST,
              Username :process.env.AUTH_UN,
              Password : process.env.AUTHTOK,
              To : process.env.AUTH_TO,
              From : process.env.AUTH_UN,
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
