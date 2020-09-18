let getValue = (function() {

    let User = function(name, email, age, tlf) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.tlf = tlf;
    };

    return newUser = new User(this.name, this.email, this.age, this.tlf);
});


const submit = document.getElementById('button-submit');
const field = document.querySelectorAll('.field');
const field2 = document.querySelectorAll('.field2')

submit.addEventListener('click', () => {

    console.log(getValue())
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const age = document.getElementById('age');
        const tlf = document.getElementById('tlf');

        let eligibleToSubmit = false;

    // Name validation
        if (name.value === ""){
            error(name);

            this.name = name.value;

            return false;
        } else {
            this.name = name.value;
            eligibleToSubmit = true;
        };

    // Email Validation
    if (email.value === "") { 
        error(email);

        this.email = email.value;

        return false;
    } else if (!emailError(email.value)) { 
        error(email);

        this.email = email.value;
        let emailError = document.getElementById('emailError'); 
        emailError.style.display = 'block'; 
        return false;

    } else {
        this.email = email.value;
        let emailError = document.getElementById('emailError');
        emailError.style.display = 'none'; 
        eligibleToSubmit = true; 
    };

    // Age validation
    function ValidateDOB() {
        var lblError = document.getElementById("lblError");
 
        //Get the date from the TextBox.
        var dateString = document.getElementById("age").value;
        var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
 
        //Check whether valid dd/MM/yyyy Date Format.
        if (regex.test(dateString)) {
            var parts = dateString.split("/");
            var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
            var dtCurrent = new Date();
            lblError.innerHTML = "Eligibility 18 years ONLY."
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                return false;
            }
 
            if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
 
                //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                    return false;
                }
                if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                    //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                    if (dtCurrent.getDate() < dtDOB.getDate()) {
                        return false;
                    }
                }
            }
            lblError.innerHTML = "";
            return true;
        } else {
            lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
            return false;
        }
    }


    // Tlf validation

    });
});


function error(input) {
        const field2 = input.parentElement;
        field2.classList.add('error'); 
        field2.insertAdjacentHTML('beforeend', '<ion-icon class="error-circle" name="close-circle-outline"></ion-icon>'); 
        

        input.addEventListener('keypress', () => { 

                field2.classList.remove('error'); 
                let icon = document.querySelectorAll('ion-icon'); 

                for(i = 0; i < icon.length; i++) { 
                    icon[i].style.display = 'none'; 
                };

                let emailErrorKeypress = document.getElementById('emailError');
                    emailErrorKeypress.style.display = 'none'; 
        });
};

// Function for email så den skal bruge @ og .
function emailError(email) {

	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};