let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');
checkBox.addEventListener('change', function() {
    let typeAttribute = passwordBox.getAttribute('type');

    if (typeAttribute === 'password') {

        passwordBox.setAttribute('type', 'text');
    } else {

        passwordBox.setAttribute('type', 'password');
    }
});
/*   $(document).ready(function() {
       $("#checkbox").click(function() {
           $('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
       });

   });*/