import React from "react";

const EditarPage = () => {
  return (
    <div>
      <form
        // onSubmit={onSubmit}
        className="bg-yellow-300 m-2 p-2 rounded"
      >
        <h1 className="p-2 text-xl">Actualiza tu información</h1>
        <div className="flex flex-col">
          <label className="px-2 mb-0">Nombre</label>
          <input
            className="border p-2 m-2"
            type="text"
            placeholder="Ingresa el nombre"
            name="nombre"
            // value={usuario.nombre}
            // onChange={onChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="px-2 mb-0">Correo</label>
          <input
            className="border p-2 m-2"
            type="text"
            placeholder="Ingresa el correo"
            name="correo"
            // value={usuario.correo}
            // onChange={onChange}
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

export default EditarPage;
