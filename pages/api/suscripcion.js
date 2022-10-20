/* eslint-disable import/no-anonymous-default-export */
import { connectDB } from "../../utils/connectDB";
import Suscripcion from "../../models/suscripcionModel";

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await obtenerSuscripciones(req, res);
      break;

    case "POST":
      await crearSuscripcion(req, res);
      break;

    case "DELETE":
      await eliminarSuscripcion(req, res);
      break;

    case "PUT":
      await actualizarSuscripcion(req, res);
      break;

    default:
      return `El metodo ${req.method} no está permitido`;
  }
};

const obtenerSuscripciones = async (req, res) => {
  try {
    const subs = await Suscripcion.find();
    return res.status(200).json(subs);
  } catch (error) {
    console.error(error.message);
  }
};

const crearSuscripcion = async (req, res) => {
  const { nombre, correo } = req.body;

  try {
    const existeSuscripcion = await Suscripcion.findOne({ correo });

    if (existeSuscripcion) {
      return res.status(200).send("Usted ya está suscripto");
    }
    const newSub = await new Suscripcion({
      nombre,
      correo,
    });
    newSub.save();

    return res.status(201).send("Suscripción exitosa");
  } catch (error) {
    console.error(error.message);
  }
};

const eliminarSuscripcion = async (req, res) => {
  const { id } = req.query;

  try {
    await Suscripcion.findByIdAndDelete(id);
    return res.status(200).send("Suscripción eliminada correctamente");
  } catch (error) {
    console.error(error.message);
  }
};

const actualizarSuscripcion = async (req, res) => {
  const { _id, nombre, correo } = req.body;

  try {
    await Suscripcion.findByIdAndUpdate(_id, { nombre, correo }, { new: true });
    return res.status(200).send("Su suscripción ha sido modificada");
  } catch (error) {}
};
