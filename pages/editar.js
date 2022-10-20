import axios from "axios";
import React, { useState } from "react";

const EditarPage = ({ suscripcion }) => {
  const [sub, setSubs] = useState(suscripcion);
  const [mensaje, setMensaje] = useState("");

  const onChange = (e) => {
    setSubs({
      ...sub,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { nombre, correo } = sub;
    const { data } = await axios.put("http://localhost:3000/api/suscripcion", {
      id: sub._id,
      nombre,
      correo
    });
    setMensaje(data);
    setSubs({ nombre: "", correo: "" });
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="bg-yellow-300 m-2 p-2 rounded">
        <h1 className="p-2 text-xl">Actualiza tu información</h1>
        {mensaje && (
          <p className="border border-green-500 rounded p-2 mb-2">{mensaje}</p>
        )}
        <div className="flex flex-col">
          <label className="px-2 mb-0">Nombre</label>
          <input
            className="border p-2 m-2"
            type="text"
            placeholder="Ingresa el nombre"
            name="nombre"
            value={sub.nombre}
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
            value={sub.correo}
            onChange={onChange}
          />
        </div>
        <div className="p-2">
          <button className="p-2 text-white bg-green-500" type="submit">
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export async function getServerSideProps({ query: { id } }) {
  console.log(id);
  const { data } = await axios.get(`http://localhost:3000/api/suscripcion`, {
    params: {
      id,
      accion: "simple",
    },
  });
  return {
    props: {
      suscripcion: data,
    },
  };
}

export default EditarPage;
