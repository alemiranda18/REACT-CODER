// Conexión Socket.IO (mismo origen)
const socket = io();

// --- Cache de nodos (puede que algunos no existan según la vista) ---
const form = document.getElementById("form-producto");
const lista = document.getElementById("lista-productos");
const sinProductos = document.getElementById("sin-productos");

// Utilidad: mostrar la <ul> y quitar el mensaje vacío si llega el primer item
function ensureListVisible() {
  if (sinProductos) sinProductos.remove();
  if (lista) lista.hidden = false;
}

// Utilidad: agregar <li> al listado
function appendProducto(prod) {
  if (!lista) return; // si la vista no tiene lista, no hacemos nada
  const li = document.createElement("li");
  li.innerHTML = `<strong>${prod.nombre}</strong> — $ ${prod.precio}`;
  lista.appendChild(li);
}

// 1) Envío del formulario (solo existe en "/")
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nombre: form.nombre.value.trim(),
      precio: form.precio.value.trim(),
    };

    if (!data.nombre || !data.precio) {
      alert("Completá nombre y precio");
      return;
    }

    const res = await fetch("/api/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      form.reset();
      // No hace falta tocar la UI acá: el servidor emitirá "producto:nuevo"
      // y actualizaremos por el handler de socket.
    } else {
      const err = await res.json().catch(() => ({}));
      alert(err.error || "Error al agregar producto");
    }
  });
}

// 2) Recepción en tiempo real: se dispara en "/" y en "/productos"
socket.on("producto:nuevo", (producto) => {
  ensureListVisible();
  appendProducto(producto);
});
