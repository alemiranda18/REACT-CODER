import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer } from "node:http";
import { Server as SocketIOServer } from "socket.io";
import { engine } from "express-handlebars";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer);

// --- Estado en memoria ---
const productos = [
  { nombre: "product1", precio: "555" },
  { nombre: "product2", precio: "55444" },
  { nombre: "product3", precio: "2346" }
]; // { nombre, precio }

const productosForm = [];

// --- Handlebars ---
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "..", "views"));

// --- Middlewares ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));

// --- Rutas ---
app.get("/", (req, res) => {
  res.render("index", { layout: "main", productos });
});

app.get("/productos", (req, res) => {
  res.render("productos", { layout: "main", productos: productosForm });
});

app.post("/api/productos", (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio || isNaN(Number(precio))) {
    return res.status(400).json({ error: "Datos inválidos" });
  }
  const nuevo = { nombre, precio: Number(precio) };
  productos.push(nuevo);
  productosForm.push(nuevo);
  io.emit("producto:nuevo", nuevo); // broadcast en tiempo real
  res.status(201).json(nuevo);
});

// --- Socket.IO (opcional por ahora) ---
io.on("connection", () => {
  // Podríamos enviar estado inicial si hace falta
});

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
