import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const AdminPage = () => {
  const [suscriptores, setSuscriptores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://localhost:3000/api/suscripcion",
        { params: { accion: "full" } }
      );
      setSuscriptores(data);
    };
    fetchData();
  }, [suscriptores]);

  return (
    <div className="m-2">
      <h1 className="text-xl">Suscriptores</h1>
      {suscriptores.map((suscriptor) => {
        return (
          <div
            className="border border-yellow-400 p-2 my-2 rounded"
            key={suscriptor._id}
          >
            <div>Nombre: {suscriptor.nombre}</div>
            <div>Nombre: {suscriptor.correo}</div>
            <Link href={`/editar?id=${suscriptor._id}`}>
              <a className="text-yellow-600">Editar</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AdminPage;
