const Cliente = ({ cliente }) => {
  return (
    <div>
      <p>Nome: {cliente.nome} </p>
      <p>Email: {cliente.email}</p>
      <p>Cpf: {cliente.cpf} </p>
      <p>Telefone: {cliente.telefone} </p>
      <p>Endereço: {cliente.endereco}</p>

      <button> edit </button>
      <button> remove </button>
    </div>
  );
};

export default Cliente;
