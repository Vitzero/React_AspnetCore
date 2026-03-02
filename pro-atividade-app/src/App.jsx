import { useState } from 'react';
import './App.css';

function App() {
  const [atividades, setAtividades] = useState([
    { id: 1, descricao: "seila bixo" },
    { id: 2, descricao: "seila bixo 2" },
  ]);

  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");

  function AddAtividade(e) {
    e.preventDefault();

    const atividade = {
      id,
      descricao,
    };

    setAtividades(prev => [...prev, atividade]);

    setId("");
    setDescricao("");
  }

  return (
    <div className="mt-3">
      <form onSubmit={AddAtividade}>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={e => setId(e.target.value)}
        />

        <input
          type="text"
          placeholder="informe a descrição"
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <ul className="list-group">
        {atividades.map(x => (
          <li key={x.id} className="list-group-item">
            {x.id} {x.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;