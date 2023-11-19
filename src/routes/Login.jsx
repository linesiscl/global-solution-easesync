import {useState} from 'react'

function Login() {
  //Hook- useState
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  });


  const [usuarioLogado, setUsuarioLogado] = useState(null); 
  const [loginError, setLoginError] = useState(false);

  const handleChange = async (e)=>{
    const {name,value}=e.target;
    setUsuario({...usuario,[name]:value})
}

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user;

    try {
      const response = await fetch("http://localhost:5000/usuarios");
      if (response.ok) {
        const users = await response.json();
        for(let i=0;i <users.length;i++){
            const use =users[i];
            user =use;

            user = users.find(
              (use) => use.email == usuario.email && use.senha == usuario.senha
            );

          if (use.email ==usuario.email && use.senha ==usuario.senha) {
            user = use;
            break;
          }
        }

        if(user){
            sessionStorage.setItem('usuarioLogado',JSON.stringify(user));

            setTimeout(()=>{
                window.location='/';
            },2000)
        }else{
          setLoginError(true);
          alert("E-mail e senha inválidos");
          setUsuario({
            email: "",
            senha: "",
          });
           if (!loginError) {
            window.location = '/login';
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <body>
      <div className="container2">
        <div className="contato" id="contato">
        
            <form className="form" onSubmit={handleSubmit}> 
              <div className="field">
                <label htmlFor="Email">E-mail:</label>
                <input
                  className="input"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  id="email"
                  value={usuario.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="Senha">Senha:</label>
                <input
                  className="input"
                  name="senha"
                  type="password"
                  placeholder="Senha"
                  id="Senha"
                  value={usuario.senha}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="custom-button">
                <span>Login</span>
              </button>
            </form>
          
        </div>
      </div>
      <footer>
        <p>&copy; 2023 EaseSync. Todos os direitos reservados.</p>
      </footer>
    </body>
  );
}

export default Login;
