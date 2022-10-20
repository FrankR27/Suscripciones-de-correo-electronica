import mongoose from "mongoose";

const SuscripcionSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: false,
    },
    correo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Suscripcion ||
  mongoose.model("Suscripcion", SuscripcionSchema);
