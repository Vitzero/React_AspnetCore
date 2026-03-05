import React from 'react'
import { useState } from 'react';
import AtividadeForm from './AtividadeForm';
import Atividades from './Atividade';

export default function AtividadesLista() {
    const [atividades, setAtividades] = useState([
    { id: 1, titulo: "testando", descricao: "seila bixo", prioridade: 1 },
    { id: 2, titulo: "testando", descricao: "seila bixo 2", prioridade: 2 },
  ]);

  const [descricao, setDescricao] = useState("");
  const [titulo, setTitulo] = useState("");
  const [prioridade, setPrioridade] = useState(0);

  


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

  function DeletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id);
    setAtividades([...atividadesFiltradas]);
  }

  return (
    <div className="col-md-6 flex ">
      
      <AtividadeForm
        AddAtividade={AddAtividade}
        atividades={atividades}
        prioridade={prioridade}
        titulo={titulo}
        descricao={descricao}
        setPrioridade={setPrioridade}
        setTitulo={setTitulo}
        setDescricao={setDescricao}

      />

      <div className="mt-3">
        {atividades.map((x) => (
          <Atividades
            key={x.id}
            x={x}
            DeletarAtividade={DeletarAtividade}
          />
        ))}
      </div>
    </div>
  );
}
