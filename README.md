# TO-DO List — Lista de Tareas

Aplicación web sencilla para gestionar tareas diarias, construida con **HTML, CSS y JavaScript puro (vanilla)**. Las tareas se guardan en el navegador con `localStorage`, así que persisten aunque cierres la pestaña.

🔗 **[Demo en vivo](https://coderblockch.github.io/todo-list/)** *(activa GitHub Pages para publicarla)*

<!-- Agrega una captura de pantalla: ![TO-DO List](docs/screenshot.png) -->

## Funcionalidades

- Agregar nuevas tareas desde el input.
- Marcar tareas como completadas (tachado) haciendo clic en ellas.
- Eliminar tareas.
- Persistencia en `localStorage` (los datos sobreviven al recargar).
- Validación de entradas vacías.

## Stack técnico

- **HTML5** — estructura.
- **CSS3** — estilos y layout con Flexbox.
- **JavaScript (ES6+)** — lógica, eventos y persistencia.
- **localStorage** — almacenamiento en el navegador.

## Cómo ejecutarlo

No requiere instalación ni dependencias. Opción 1: abre `index.html` directamente en el navegador. Opción 2 (recomendada, evita restricciones del navegador):

```bash
git clone https://github.com/coderblockch/todo-list.git
cd todo-list
python3 -m http.server 8000
```

Luego abre [http://localhost:8000](http://localhost:8000).

## Estructura

```
todo-list/
├── index.html   # Estructura de la página
├── style.css    # Estilos (Flexbox, estados)
└── script.js    # Lógica de tareas y persistencia
```
