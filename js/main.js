//essa função funcionou utilizando o liveserver, mas não utilizando um servidor apache para rodar o projeto (XAMPP). Ela também não funciona ao abrir o arquivo html sozinho.

function redirect(page) {
    switch (page) {
        case "home":
            window.location.pathname = ``;
            break;
        case "login":
            window.location.pathname = `/app/login`;
            break;
    }
}