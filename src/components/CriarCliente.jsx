import axios from "axios";
import { useState } from "react";

const Clientes = () => {
  const [cliente, setCliente] = useState({
    nome: null,
    cpf: null,
    endereco: null,
    email: null,
    telefone: null,
  });

  async function criarCliente(cliente) {
    let response = await axios
      .post("http://localhost:3030/api/v1/clientes", cliente)
      .then(() => console.log(cliente))
      .catch((err) => console.log(err));
    return response;
  }

  return (
    <div>
      <form>
        <input
          type="text "
          placeholder="Nome"
          onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
        />
        <input
          type="text "
          placeholder="cpf "
          onChange={(e) => setCliente({ ...cliente, cpf: e.target.value })}
        />
        <input
          type="text "
          placeholder="Email"
          onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
        />
        <input
          type="text "
          placeholder="endereco"
          onChange={(e) => setCliente({ ...cliente, endereco: e.target.value })}
        />
        <input
          type="text "
          placeholder="telefone "
          onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })}
        />
      </form>

      <button onClick={() => criarCliente(cliente)}> criar </button>
    </div>
  );
};

export default Clientes;
