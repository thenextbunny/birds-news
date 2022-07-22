/* EN - The script performs the verification of the email written by the user in the input and if it is validated, the registration button is activated and its background changes. */
/* PT - O script realiza a verificação do e-mail escrito pelo usuário no input e caso for validado o botão de cadastro é atividado e seu background muda. */

const email = document.getElementById('email');
email.addEventListener('keyup', () => {
    const register = document.getElementById('register');

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
});

    
/* EN - Checks if the user selected any language in select and redirects to the chosen page. */
/* PT-BR - Verifica se o usuário selecionou algum idioma no select e redireciona para a página escolhida. */

const selectLanguage = document.querySelector("select");

selectLanguage.addEventListener('change', () => {
    language = selectLanguage.value;
    
    switch (language) {
        case "en":
            location.href = "en.html";
            break;
        case "pt-br":
            location.href = "index.html";
        break;
    }
});