import axios from "axios";
import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  async function getClientes() {
    let response = await axios
      .get("http://localhost:3030/api/v1/clientes")
      .then((res) => setClientes(res.data))
      .catch((err) => console.log(err));
    return response;
  }

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div>
      {clientes.length === 0 ? (
        <p> carregando...</p>
      ) : (
        clientes.map((cliente) => (
          <Cliente key={cliente.id} cliente={cliente} />
        ))
      )}
    </div>
  );
};

export default Clientes;
