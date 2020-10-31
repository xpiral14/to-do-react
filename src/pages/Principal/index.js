import React, { useState } from "react";
import AdicionarTarefa from "../../components/AdicionarTarefa";
import Tarefa from "../../components/Tarefa";

export default function Principal() {
  const [tarefas, adicionarTarefas] = useState([
    {
      taDeletado: false,
      taChecado: true,
      texto: "Passear com o cachorro",
    },
    {
      taDeletado: false,
      taChecado: true,
      texto: "Fazer dever da faculadde",
    },
    {
      taDeletado: false,
      taChecado: true,
      texto: "Tomar café",
    },
  ]);
  const [tarefaTexto, setTarefaTexto] = useState("");
  function adicionar() {
    adicionarTarefas((outrasTarefas) => [
      {
        texto: tarefaTexto,
        taDeletado: false,
        taChecado: false,
      },
      ...outrasTarefas,
    ]);
  }
  return (
    <div className="principal">
      <div>
        <AdicionarTarefa setTarefaTexto={setTarefaTexto} aoClicar={adicionar} />
      </div>
      <div></div>
      <div className="tarefas">
        {tarefas.map(function (tarefa) {
          return (
            <Tarefa
              taDeletado={tarefa.taDeletado}
              taChecado={tarefas.taChecado}
              texto={tarefa.texto}
            />
          );
        })}
      </div>
    </div>
  );
}
