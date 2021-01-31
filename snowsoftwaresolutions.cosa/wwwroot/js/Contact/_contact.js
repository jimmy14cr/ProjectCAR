var contact = (function () {
    var objValitation = {
        NameValidation: false,
        EmailValidation: false,
        SubjectValidation: false,
        MessageValidation: false
    };

    $(document).ready(function () {
        main();
    });

    async function main() {
     
        $("#btnContactSubmit").click(async function () {

            var name = $("#name").val();
            var email = $("#email").val();
            var subject = $("#subject").val();
            var message = $("#message").val();
            

            if (await validateInputs()) {
                var personalInformation =
                {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                }
                await helper.setLocalStorageData("personalInformation", JSON.stringify(personalInformation));
               // saveInfo(personalInformation);
                helper.showInfo("Excelent!", "Your request was send correctly");
                
            }
        });
    }
    $(".infoBtn").click(function () {
        $(".infoMessage").hide();
        $("#contactForm").submit();
    });

    async function saveInfo(personalInformation) {
        $.ajax({
            url: resolveUrl("~/Contact/AddPersonRequest"),
            data: JSON.stringify(personalInformation),
            contentType: 'application/json',
            type: "POST",
            dataType: "html",
            success: function (data) {
                verifyReservation(data, rentCar, tripInformation)
            },
            error: function (e) {
                console.log(e)
            }
        });
    }

    async function validateInputs() {
        if ($("#name").val().length > 0) {
            objValitation.NameValidation = true;
            $('#msgName').text("");
        } else {
            objValitation.NameValidation = false;
            $('#msgName').text("Name is required");
        }

        var re = /\S+@\S+\.\S+/;
        if (re.test($("#email").val())) {
            if ($("#email").val().length > 0) {
                objValitation.EmailValidation = true;
                $('#msgEmail').text("");
            } else {
                objValitation.EmailValidation = false;
                $('#msgEmail').text("Email is required");
            }
        } else {
            objValitation.EmailValidation = false;
            $('#msgEmail').text("Email format example@mail.com");
        }


        if ($("#subject").val().length > 0) {
                objValitation.SubjectValidation = true;
                $('#msgSubject').text("");
        } else {
            objValitation.SubjectValidation = false;
            $('#msgSubject').text("Subject is required");
        }

        if ($("#message").val().length > 0) {
                objValitation.MessageValidation = true;
                $('#msgMessage').text("");
        } else {
            objValitation.MessageValidation = false;
            $('#msgMessage').text("Message is required");
        }


        if (objValitation.NameValidation && objValitation.EmailValidation && objValitation.SubjectValidation && objValitation.MessageValidation ) {
            return true;
        } else {
            return false;
        }
    }

}());