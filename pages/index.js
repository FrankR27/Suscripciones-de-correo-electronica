import React, { useState } from "react";

const HomePage = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
  });

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="bg-yellow-300 m-2 p-2 rounded">
        <h1 className="p-2 text-xl">Suscríbete a correos electrónicos</h1>
        <div className="flex flex-col">
          <label className="px-2 mb-0">Nombre</label>
          <input
            className="border p-2 m-2"
            type="text"
            placeholder="Ingresa el nombre"
            name="nombre"
            value={usuario.nombre}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 mb-0">Correo</label>
          <input
            className="border p-2 m-2"
            type="text"
            placeholder="Ingresa el correo"
            name="correo"
            value={usuario.correo}
            onChange={onChange}
          />
        </div>
        <div className="p-2">
          <button className="p-2 text-white bg-green-500" type="submit">
            Suscríbete
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomePage;
