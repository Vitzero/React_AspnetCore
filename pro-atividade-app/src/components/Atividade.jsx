import React from 'react'

export default function Atividades({x, DeletarAtividade}) {
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

  return (
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

              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn btn-outline-primary me-2">Editar</button>

                <button className="btn btn-outline-danger" onClick={() => DeletarAtividade(x.id)}>Deletar</button>
              </div>
            </div>
          </div>
  )
}
