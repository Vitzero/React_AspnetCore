import React from 'react'


export default function AtividadeForm({
  prioridade,
  setPrioridade,
  
  titulo,
  setTitulo,
  
  descricao,
  setDescricao,
  
  AddAtividade
}) {
  return (
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
  )
}
