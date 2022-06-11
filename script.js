/* EN - The script performs the verification of the email written by the user in the input and if it is validated, the registration button is activated and its background changes. */
/* PT - O script realiza a verificação do e-mail escrito pelo usuário no input e caso for validado o botão de cadastro é atividado e seu background muda. */

let email, register;

    email = document.getElementById('email');
    email.addEventListener('keyup', verify);

    register = document.getElementById('register');
    register.disabled = true;

    function verify () {
        if (document.forms[0].email.value == "" || document.forms[0].email.value.indexOf('@') == -1 || document.forms[0].email.value.indexOf('.') == -1 ) {
           register.disabled = true;
           register.style.background = '#F4D4A5';
           register.style.transition = '0.5s';
           register.style.color = '#808080';
           return false;
        } else {
            register.disabled = false;
            register.style.background = '#F7CF5D';
            register.style.color = '#FFF';
            return true;
        }
    }