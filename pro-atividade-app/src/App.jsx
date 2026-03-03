import { useState } from "react";
import "./App.css";

function App() {
  const [atividades, setAtividades] = useState([
    { id: 1, descricao: "seila bixo" },
    { id: 2, descricao: "seila bixo 2" },
  ]);

  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [prioridade, setPrioridade] = useState("");

  function AddAtividade(e) {
    e.preventDefault();

    const atividade = {
      id,
      descricao,
      titulo,
      prioridade
    };

    setAtividades((prev) => [...prev, atividade]);

    setId("");
    setDescricao("");
    setTitulo("");
  }

  return (
    <div class="col-md-6 flex">
      <form class="row g-3 ">
        <div class="col-md-6">
          <label className="form-label" type="text" placeholder="id">
            ID
          </label>


          
          <input
            className="form-control"
            type="text"
            placeholder="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div class="col-md-6">
           <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
                <option defaultValue="0">Selecionar...</option>
                <option value="1">Baixa</option>
                <option value="2">Normal</option>
                <option value="3">Alta</option>
            </select>
        </div>

        <div class="col-md-6">
          <label className="form-label" type="text" placeholder="titulo">
            Titulo
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        
        <div class="col-md-6">
          <label className="form-label" type="text" placeholder="descricao">
            Descrição
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div class="col-12">
          <button
            onClick={AddAtividade}
            className="btn btn-outline-secondary"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      <div className="mt-3">
        {atividades.map((x) => (
          <div className="card mb-2 shadow-sm" key={x.id} class="card">
            
            <div class="card-body">
              
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                <span className="badge bg-ssecondary me-1">
                  {x.id}
                </span>
                  - {x.titulo}
                </h5>
                <h6> Prioridade: Normal </h6>
              </div>
              
              <p class="card-text">
                {x.descricao}
              </p>
              
              <div className="d-flex justify-content-end pt-2 border-top">
                
                <button className="btn btn-outline-primary">
                  Editar
                </button>
                
                <button className="btn btn-outline-danger">
                  Deletar
                </button>

              </div>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default App;
