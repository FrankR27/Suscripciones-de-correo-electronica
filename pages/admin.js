import React from "react";

const AdminPage = () => {
  const suscriptores = [
    {
      id: 1,
      nombre: "Frank De Jesus Ramos Guzman",
      correo: "frankdejesusramosguzman9@gmail.com",
    },
    { id: 2, nombre: "John Dee", correo: "johndee@gmail.com" },
    {
      id: 3,
      nombre: "Felix Daniel Ramos Guzman",
      correo: "felix78855@gmail.com",
    },
  ];
  return (
    <div className="m-2">
      <h1 className="text-xl">Suscriptores</h1>
      {suscriptores.map((suscriptor) => {
        return (
          <div
            className="border border-yellow-400 p-2 my-2 rounded"
            key={suscriptor.id}
          >
            <div>Nombre: {suscriptor.nombre}</div>
            <div>Nombre: {suscriptor.correo}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPage;
