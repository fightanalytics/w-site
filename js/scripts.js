$(document).ready( function() {

  $( "#form-sign-up-subscribe" ).submit(function() {
    
    console.log('sending subscribe');

    $(this).find('.titlebutton').text('SENDING...');

    var email =    $("#mce-EMAIL-subscribe").val();
        $.ajax({
          type: "POST",
          url: "https://mandrillapp.com/api/1.0/messages/send.json",
          data: {
            "key": "F22nZLWupKaYvxUhSD21tg",
            "message": {
              "from_email": "contact@fightanalytics.cc",
              "from_name": "Fight Analytics",
              "to": [
                  {
                    "email": "lucas@fightanalytics.cc",
                    "name": "Fight Analytics",
                    "type": "to"
                  } 
                ],
              "autotext": "true",
              "subject": "New free subscribe - " + email + " - Fight Analytics",
              "html": " " + email + " "
            }
          }
         }).done(function(response) {
          alert("Thank you for your subscription!")
         });

        return false;


      });
  



});