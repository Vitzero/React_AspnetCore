import { useState } from "react";
import "./App.css";

function App() {
  const [atividades, setAtividades] = useState([
    { id: 1, titulo: "testando", descricao: "seila bixo", prioridade: 1 },
    { id: 2, titulo: "testando", descricao: "seila bixo 2", prioridade: 2 },
  ]);

  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [prioridade, setPrioridade] = useState(0);

  function PrioridadeLabel(param) {
    switch (param) {
      case 1:
        return "Baixa";
      case 2:
        return "Normal";
      case 3:
        return "Alta";
      default:
        return "Não Definido";
    }
  }

  function prioridadeStyle(param) {
  switch (param) {
    case 1:
      return "success";   // verde
    case 2:
      return "warning";   // amarelo
    case 3:
      return "danger";    // vermelho
    default:
      return "secondary";
  }
}

 function AddAtividade(e) {
  e.preventDefault();

  const novoId =
    atividades.length > 0
      ? Math.max(...atividades.map((item) => item.id)) + 1
      : 1;

  const atividade = {
    id: novoId,
    descricao,
    titulo,
    prioridade,
  };

  setAtividades((prev) => [...prev, atividade]);

  setDescricao("");
  setTitulo("");
  setPrioridade(0);
}
  return (
    <div className="col-md-6 flex">
      <form className="row g-3 ">

        <div className="col-md-6">
          <label className="form-label">
            State
          </label>
          <select id="inputState" className="form-select" value={prioridade} onChange={(e) => setPrioridade(Number(e.target.value))}>
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>

        <div className="col-md-6">
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

        <div className="col-md-6">
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

        <div className="col-12">
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
          <div className={'card mb-2 shadow-sm border-' + prioridadeStyle(x.prioridade)} key={x.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">{x.id}</span>-{" "}
                  {x.titulo}
                </h5>
                <h6> 
                  Prioridade: 
                    <span className={"ms-1 text-" + prioridadeStyle(x.prioridade)}>
                      <i className="me-1 far fa-frown color-"></i>
                      {PrioridadeLabel(x.prioridade)}
                    </span>
                  </h6>
              </div>

              <p className="card-text">{x.descricao}</p>

              <div className="d-flex justify-content-end pt-2 border-top">
                <button className="btn btn-outline-primary">Editar</button>

                <button className="btn btn-outline-danger">Deletar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
