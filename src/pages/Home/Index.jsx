function Home() {
  cont users = [
    
  ]

  return (
    // Container Principal
    <div className='container'>

      {/* Formulario de cadastro */}
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text'></input>
        <input name='idade' type='number'></input>
        <input name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>

      {/* Mostruário de cadastros */}
      <div>

        {/* Cadastro */}
        <div>
           <p>Nome: </p>
           <p>Idade: </p>
           <p>Email: </p>
        </div>
        <button>
          <img src={Trash} />
        </button>

      </div>

    </div>
  );
}

export default Home;
