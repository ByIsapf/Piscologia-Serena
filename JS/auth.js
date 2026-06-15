// ================================================= //
//                    AUTH.JS                        //
// ================================================= //

// FORMULÁRIOS

const cadastroForm =
document.getElementById("cadastroForm")

const loginForm =
document.getElementById("loginForm")

// ================================================= //
//                  CADASTRO                         //
// ================================================= //

if(cadastroForm){

  cadastroForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    // DADOS

    const nome =
    document.getElementById("nome").value

    const email =
    document.getElementById("emailCadastro").value

    const senha =
    document.getElementById("senhaCadastro").value

    // VERIFICA SE JÁ EXISTE

    const usuarioExistente =
    localStorage.getItem(email)

    if(usuarioExistente){

      alert("Esse email já está cadastrado.")

      return
    }

    // OBJETO USUÁRIO

    const usuario = {

      nome:nome,
      email:email,
      senha:senha

    }

    // SALVAR

    localStorage.setItem(

      email,

      JSON.stringify(usuario)

    )

    alert("Conta criada com sucesso!")

    // REDIRECIONA

    window.location.href =
    "login.html"

  })

}

// ================================================= //
//                     LOGIN                         //
// ================================================= //

if(loginForm){

  loginForm.addEventListener("submit", (e)=>{

    e.preventDefault()

    const email =
    document.getElementById("email").value

    const senha =
    document.getElementById("senha").value

    // BUSCAR USUÁRIO

    const usuarioSalvo =
    localStorage.getItem(email)

    // NÃO EXISTE

    if(!usuarioSalvo){

      alert("Usuário não encontrado.")

      return
    }

    // CONVERTER JSON

    const usuario =
    JSON.parse(usuarioSalvo)

    // SENHA ERRADA

    if(usuario.senha !== senha){

      alert("Senha incorreta.")

      return
    }

    // LOGIN OK

    localStorage.setItem(

      "usuarioLogado",

      JSON.stringify(usuario)

    )

    alert(

      `Bem-vindo(a), ${usuario.nome}!`

    )

    // REDIRECIONA

    window.location.href =
    "../index.html"

  })

}

// ================================================= //
//                VERIFICAR LOGIN                    //
// ================================================= //

function verificarLogin(){

  const usuarioLogado =
  localStorage.getItem("usuarioLogado")

  if(!usuarioLogado){

    return null
  }

  return JSON.parse(usuarioLogado)

}

// ================================================= //
//                    LOGOUT                         //
// ================================================= //

function logout(){

  localStorage.removeItem(
    "usuarioLogado"
  )

  window.location.href =
  "login.html"
}