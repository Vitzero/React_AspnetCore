import './App.css'

function App() {
  const atividades = [
    {
      id: 0,
      descricao: 'Primeira atividade',
    },
    {
      id: 1,
      descricao: 'segunda atividade',
    },
    {
      id: 2,
      descricao: 'terceira atividade',
    },
  ];

  return(
    <div className='mt-3'>
      <form>
        <input id="id" type="text" placeholder='id'></input>
        <input id="descricao" type="text" placeholder='informe a descrição'></input>
        <button > Add </button>
      </form>
      <ul class="list-group">
        {atividades.map( x => (
          <li key={x.id} class="list-group-item">{x.id} {x.descricao}</li>
        ))}
      </ul>

    </div>
  );
}

  

export default App
