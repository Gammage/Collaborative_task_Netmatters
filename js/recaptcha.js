//V3 
  function onSubmit(token) {
    document.querySelector("#submit-button").submit();
  }

  function onClick(e) {
    e.preventDefault();
    grecaptcha.ready(function() {
        grecaptcha.execute('6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', {action: 'submit'}).then(function(token) {    
        // Add your logic to submit to your backend server here.
          console.log('reCAPTCHA token', token);
      });
    });
  }

