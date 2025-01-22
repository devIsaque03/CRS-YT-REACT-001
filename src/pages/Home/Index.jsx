import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  // simulando um banco de dados
  const users = [
    {
      id: '12342135215',
      name: 'Rodolfo',
      age: '33',
      email: 'rodolfo@gmail.com'
    },
    {
      id: '124512341244',
      name: 'marta',
      age: '49',
      email: 'madalena@gmail.com'
    }
  ]
 
  // HTML
  return (
    // Container Principal
    <div className='container'>

      {/* Formulario de cadastro */}
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="nome" name='nome' type='text'></input>
        <input placeholder="idade" name='idade' type='number'></input>
        <input placeholder="email" name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>

      {/*Usando JavaScript para percorrer todos usuários e chamar função */}
      {users.map((user) => (
        // Mostruário de cadastros
        <div key={user.id} className='card'>

          {/* Cadastro */}
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} height=" 30 px"/>
          </button>

        </div>
      ))}

    </div>
  );
};

export default Home;
