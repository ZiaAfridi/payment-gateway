$(function() {
    // Get field by id.
    var owner = $('#owner');
    var cardNumber = $('#cardNumber');
    var CVV = $("#cvv");
    var expDate = $("#expiration-date")
    var confirmButton = $('#confirm-purchase');
    var cardNumberField = $('#card-number-field');
    var ownerField = $("#owner-field");
    var dateField = $("#expiration-date-field");
    var cvvField = $("#cvv-field");
    var ownerError = $("#owner-error");
    var cvvError = $("#cvv-number-error");
    var cardError = $("#card-number-error");
    var dateError = $("#date-error");


    confirmButton.click(function(e) {
       // Request object.
        const cardData = {
            creditCardNumber: cardNumber.val(),
            creditCardCVV: CVV.val(),
            creditCardHolder: owner.val(),
            expireDate: expDate.val()
        }
    
        // API call for storing card information.
            $.ajax({
                type: "POST",
                headers: {"Content-Type": "application/json"},
                url: "http://localhost:5000/card",
                data: JSON.stringify(cardData),
                success: function(response) {
                    // Check if error exist then show error.
                    if(response.error.length > 0 ){
                        for(let i = 0; i < response.error.length; i++){
                            if(response.error[i].param === 'creditCardNumber'){
                                cardNumberField.addClass('has-error');
                                cardError.text(response.error[i].msg);
                            } else if(response.error[i].param === 'creditCardCVV'){
                                cvvField.addClass('has-error');
                                cvvError.text(response.error[i].msg);
                            } else if(response.error[i].param === 'creditCardHolder'){
                                ownerField.addClass('has-error');
                                ownerError.text(response.error[i].msg);
                            } else if(response.error[i].param === 'expireDate') {
                                dateField.addClass('has-error');
                                dateError.text(response.error[i].msg);
                            }

                        }
                    }else{
                        // Success clear all error field and show popup
                        cardNumberField.removeClass('has-error');
                        cvvField.removeClass('has-error');
                        ownerField.removeClass('has-error');
                        dateField.removeClass('has-error');
                        cardNumberField.addClass('has-success');
                        cvvField.addClass('has-success');
                        ownerField.addClass('has-success');
                        dateField.addClass('has-success');
                        ownerError.text('');
                        cardError.text('');
                        cvvError.text('');
                        dateError.text('');
                        owner.val('');
                        cardNumber.val('');
                        CVV.val('');
                        expDate.val('')
                        alert('Card information saved!');
                    }
                },
                error: function(response, error) {
                    // On fail show error popup.
                        cardNumberField.addClass('has-error');
                        cvvField.addClass('has-error');
                        ownerField.addClass('has-error');
                        dateField.addClass('has-error');

                        console.log("🚀 ~ file: script.js ~ line 35 ~ confirmButton.click ~ error", error)
                        console.log("🚀 ~ file: script.js ~ line 60 ~ confirmButton.click ~ response.error", response)
                        alert('Oops! Error please try again');
                }
            });        
        e.preventDefault();       
    });
});

// Get only card number and cvv in digit and clear previous error field.
function cardInput(event) {
    var cvvField = $("#cvv-field");
    var cardNumberField = $('#card-number-field');
    cvvField.removeClass('has-error');
    cardNumberField.removeClass('has-error');

    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[0-9]/i);
    return pattern.test(value);
 }
// Get only card holder name in string and clear previous error field.
 function nameInput(event) {
    var ownerField = $("#owner-field");    
    ownerField.removeClass('has-error');
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[a-zA-Z ]/i);
    return pattern.test(value);
 }

 function pickDate(event) {
    var dateField = $("#expiration-date-field");
     dateField.removeClass('has-error');
 }
 $('#cardNumber').bind('keypress', cardInput);
 $('#cvv').bind('keypress', cardInput);
 $('#owner').bind('keypress', nameInput);
 $('#expiration-date').bind('onchange', pickDate);



