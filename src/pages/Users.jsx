import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [paginas, setPaginas] = useState([1, 2, 3, 4, 5]);
  const [search, setSearch] = useState("");

  function filter() {
    const searchArray = data.filter((value) => {
      return value.name.first.toUpperCase().includes("u".toUpperCase());
    });
    return console.log(searchArray);
  }

  function changePage(pagina) {
    setPage(pagina);
    let array = [];
    for (let i = pagina; i < pagina + 5; i++) {
      array.push(i);
    }
    setPaginas(array);
  }

  async function request() {
    const response = await axios
      .get(
        `https://randomuser.me/api/?nat=br&inc=name,email,login,dob,picture&page=${page}&results=10&seed=abc`
      )
      .catch((err) => console.log(err));
    setData(response.data.results);
  }

  useEffect(() => {
    request();
  }, [page]);

  return (
    <div>
      <input type="text"></input>
      <button type="button" onClick={filter}>
        {" "}
        teste{" "}
      </button>
      {data.length === 0 ? (
        <p> Carregando... </p>
      ) : (
        data.map((user) => (
          <div key={user.id}>
            <ul>
              Foto:{" "}
              <img src={user.picture.large} width={90} height={90} alt="user" />
            </ul>
            <ul> Nome: {user.name.first + " " + user.name.last} </ul>
            <ul> Email: {user.email} </ul>
            <ul> userName: {user.login.username} </ul>
            <ul> idade :{user.dob.age} </ul>
          </div>
        ))
      )}
      {page > 1 && <button onClick={() => changePage(page - 1)}>prev </button>}
      {paginas.map((array) => (
        <button key={array.id} onClick={() => changePage(array)}>
          {" "}
          {array}{" "}
        </button>
      ))}
      {page < 50 && (
        <button onClick={() => changePage(page + 1)}> next </button>
      )}
    </div>
  );
};

export default User;
