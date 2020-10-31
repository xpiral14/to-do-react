import React from "react";
import AdicionarIcone from "../../assets/plus.svg";

export default function AdicionarTarefa({ aoClicar, setTarefaTexto }) {
  return (
    <div className="adicionar-tarefa">
      <input
        placeholder="Hoje eu farei..."
        onChange={(evt) => setTarefaTexto(evt.target.value)}
      />

      <button onClick={aoClicar}>
        <img src={AdicionarIcone} alt="Adicioar" />
      </button>
    </div>
  );
}
