import React from "react";
import CheckIcone from "../../assets/check.svg";
import DeleteIcone from "../../assets/delete.svg";
import UncheckIcone from "../../assets/uncheck.svg";

export default function Tarefa({ taChecado, taDeletado, texto }) {
  return (
    <div className="tarefa">
      <p>{texto}</p>

      <div className="tarefa-botoes">
        {taChecado ? (
          <button>
            <img src={UncheckIcone} alt="uncheck" />
          </button>
        ) : (
          <button>
            <img src={CheckIcone} alt="check" />
          </button>
        )}
        {!taDeletado && (
          <button>
            <img src={DeleteIcone} alt = "delete" />
          </button>
        )}
      </div>
    </div>
  );
}
