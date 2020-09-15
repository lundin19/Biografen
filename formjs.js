let getValue = (function() { // class with the name get so we can log it later

    let User = function(text, email, check) { // so we can create an object out of our input fields
        this.text = text;
        this.email = email;
        this.check = check;
    };

// Create new user object by returning this when logging get();
    return newUser = new User(this.text, this.email, this.check); // We create a new object using our input values, after submitting
});

const submit = document.getElementById('button-submit');
const field = document.querySelectorAll('.field');

submit.addEventListener('click', () => {

    console.log(getValue()) // Log my UserObj 
    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => { // e = event and this is a submit event
        e.preventDefault(); // Prevents the submit event from refreshing the page each time we click on it

        // Our inputs we want to get checked on
        const text = document.getElementById('text');
        const email = document.getElementById('email');
        const check = document.getElementById('check');

        let eligibleToSubmit = false;

         // EMAIL VALIDATOR
         if (email.value === "") { // If nothing in the input field, issue this command
            error(email);
            this.email = email.value;
            return false;
        } else if (!emailError(email.value)) { // If emailError is not = email.value then issue this statement
            error(email);
            this.email = email.value;
            let emailError = document.getElementById('emailError'); // Getting the emailError element form the HTML
            emailError.style.display = 'block'; // displays block  so we can see it when email has an error
            return false;
        } else {
            this.email = email.value;
            let emailError = document.getElementById('emailError');
            emailError.style.display = 'none'; // displays none when email correct
            eligibleToSubmit = true; // true statement of the if() email statement
        };

         // text VALIDATOR
         if (text.value === "") { // If nothing in the input field, issue this command
            error(text);
            this.text = text.value;
            return false;
        } else if (!textError(text.value)) { // If textError is not = text.value then issue this statement
            error(text);
            this.text = text.value;
            let textError = document.getElementById('textError'); // Getting the textError element form the HTML
            textError.style.display = 'block'; // displays block  so we can see it when text has an error
            return false;
        } else {
            this.text = text.value;
            let textError = document.getElementById('textError');
            textError.style.display = 'none'; // displays none when text correct
            eligibleToSubmit = true; // true statement of the if() text statement
        };
    });
});

// Error input
function error(input) { // Parameter = input(input = value or variable we write in error("")) [it targets a specefic input]
        const field = input.parentElement; // parentElement of varialble error("")
        field.classList.add('error'); // Add class to field
        field.insertAdjacentHTML('beforeend', '<ion-icon class="error-circle" name="close-circle-outline"></ion-icon>'); // Inserts html into field, with out the need of a loop or innerHTML 'beforeend' is so it gets placed last in the field container
        
// On keypress(any) remove field class error and error circle()
        input.addEventListener('keypress', () => { // If not keypress we can't make it so the error disappears inside, with just pressing any key on the keyboard
                field.classList.remove('error'); // Removes the field class error
                let icon = document.querySelectorAll('ion-icon'); // Since we need to select all ion-icons we say querySelectprAll, which makes the others undefined, except the first child, so we have to make a for loop to make it work
                for(i = 0; i < icon.length; i++) { // For(loop) for icon, so it loops throuh all the elements called ion-icon
                    icon[i].style.display = 'none'; // Display icon none
                };

                let emailErrorKeypress = document.getElementById('emailError');
                    emailErrorKeypress.style.display = 'none'; // Dispaly help message for email to none

                let textErrorKeypress = document.getElementById('textError');
                    textErrorKeypress.style.display = 'none';
        });
};

// Function for email (so user  have to use @ and .)
function emailError(email) {
    // Email pattern (RegEx)
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};