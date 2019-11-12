
//index
function index_cadastro()
{
    location.href="../html/login.html"
}

function index_login()
{
    location.href=" login.html"
}

function index_enviar()
{
    if (nome_contato.value == "" || email_contato.value == "" || txt.value == "")
    {
        alert('Por favor, preencha todos os campos')
    }
    else 
    {
        alert(`${nome_contato.value}, sua mensagem foi enviada com sucesso!`)
    }
}

//login
function login_voltar()
{
    location.href=" index.html"
}

function login_fazer_cadastro()
{
    alert('Cadastro efetuado com sucesso!');
    location.href=" principal.html";
}

function login_fazer_login()
{
    var email = email_login.value;
    var senha = senha_login.value;
    
    if (senha == "admin" && email == "admin@descfast.com")
    {
        location.href=" principal.html";
    }
    
    else
    {
        alert('Usuário ou senha incorreta')
    }
}

function mostrar()
{
    mostrar_cadastro.style.display = 'block';
    mostrar_login.style.display = 'none'
}

function enviar_email()
{
    mensagem_enviada.style.display = 'block';
}

function enviar_erro()
{
    alert('Mensagem enviada com sucesso!');
}
    
//principal
function principal_sair()
{
    location.href=" index.html";
}

    function ver()
{
    window.open("qr-code.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=500,width=400,height=400");
}

function esqueci()
{
    window.open("esqueci.html", "_blank","toolbar=yes,top=200,left=500,width=400,height=380");
}


    


