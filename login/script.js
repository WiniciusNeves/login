document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var usuario = document.querySelector('input[type="text"]').value;
    var senha = document.querySelector('input[type="password"]').value;

    if (usuario === 'adm' && senha === '123') {
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha inválidos!');
    }
});