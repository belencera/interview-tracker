# 💼 Interview Tracker

> Una aplicación web moderna para organizar, gestionar y hacer seguimiento de tus candidaturas de empleo. Construida con **React** y **Vite** con persistencia en `localStorage`.

[![React](https://img.shields.io/badge/React-19.2.7-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.1.1-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📌 ¿Por qué Interview Tracker?

Cuando buscas trabajo, es fácil perder track de dónde aplicaste, en qué fase estás de cada proceso, o qué feedback recibiste. **Interview Tracker** te ayuda a:

- 🎯 **Organizar** todas tus candidaturas en un solo lugar
- 📊 **Hacer seguimiento** del estado de cada una (Solicitada, Entrevista, Oferta, Rechazada)
- 🔍 **Buscar y filtrar** candidaturas rápidamente
- 📝 **Añadir notas** sobre cada empresa o puesto
- 💾 **Guardar todo localmente** (sin servidor, tus datos siempre contigo)
- ✏️ **Editar y eliminar** candidaturas cuando necesites

---

## ✨ Características

✅ **Gestión completa de candidaturas**
- Añadir nuevas candidaturas con un formulario sencillo
- Editar candidaturas existentes
- Eliminar candidaturas
- Ver todas tus candidaturas en tarjetas limpias y organizadas

✅ **Búsqueda y filtrado inteligente**
- Buscar por empresa o puesto en tiempo real
- Filtrar por estado (Solicitada, Entrevista, Oferta, Rechazada)
- Combina búsqueda y filtro para resultados precisos

✅ **Interfaz moderna y responsiva**
- Diseño limpio y minimalista (tema oscuro)
- Completamente responsive (funciona en móvil, tablet y desktop)
- Animaciones suaves y transiciones pulidas

✅ **Persistencia de datos**
- Todos los datos se guardan en `localStorage`
- Nada se pierde al cerrar la app o el navegador
- Cada usuario/PC tiene sus propios datos

✅ **Datos de ejemplo listos para usar**
- Viene con candidaturas de ejemplo para que veas cómo funciona
- Puedes eliminarlas y empezar las tuyas

---

## 🚀 Inicio rápido

### Requisitos previos

- **Node.js** (v14 o superior)
- **npm** (incluido con Node.js)

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/interview-tracker.git
   cd interview-tracker
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abre en el navegador:**
   ```
   http://localhost:5173/
   ```

¡Listo! Ya puedes empezar a usar Interview Tracker. 🎉

---

## 📖 Cómo usar

### 1. **Ver candidaturas**
Al abrir la app, verás una lista de candidaturas de ejemplo. Cada tarjeta muestra:
- 🏷️ Estado (con badge de color)
- 💼 Puesto y empresa
- 📅 Fecha de candidatura
- 📝 Notas adicionales

### 2. **Buscar candidaturas**
Usa la barra de búsqueda para encontrar por empresa o puesto:
```
Escribe "Google" o "Frontend" para filtrar
```

### 3. **Filtrar por estado**
Selecciona un estado en el dropdown para ver solo candidaturas en ese estado.

### 4. **Añadir una candidatura**
1. Haz click en **"Añadir candidatura"**
2. Rellena el formulario con los datos
3. Haz click en **"Guardar candidatura"**
4. ¡La candidatura aparecerá en la lista!

### 5. **Editar una candidatura**
1. Haz click en el icono **✏️ (editar)** en la tarjeta
2. El formulario se abrirá con los datos
3. Modifica lo que necesites
4. Haz click en **"Guardar cambios"**

### 6. **Eliminar una candidatura**
1. Haz click en el icono **🗑️ (eliminar)** en la tarjeta
2. ¡La candidatura se eliminará inmediatamente!

---

## 🛠️ Estructura del proyecto

```
interview-tracker/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Encabezado y logo
│   │   ├── Filters.jsx         # Buscador y filtro por estado
│   │   ├── JobForm.jsx         # Formulario para añadir/editar
│   │   ├── JobList.jsx         # Lista de candidaturas
│   │   ├── JobCard.jsx         # Tarjeta individual
│   │   ├── Footer.jsx          # Pie de página
│   │   └── *.css               # Estilos por componente
│   ├── data/
│   │   └── jobs.js             # Datos de ejemplo
│   ├── App.jsx                 # Componente raíz
│   ├── App.css                 # Estilos globales
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos base
├── public/                      # Archivos estáticos
├── package.json                 # Dependencias
├── vite.config.js              # Configuración de Vite
└── README.md                    # Este archivo
```

---

## 💻 Tecnologías utilizadas

| Tecnología | Versión | Descripción |
|-----------|---------|------------|
| **React** | 19.2.7 | Biblioteca para construir UIs |
| **Vite** | 8.1.1 | Bundler y dev server ultrarrápido |
| **JavaScript** | ES6+ | Lenguaje de programación |
| **CSS** | CSS3 | Estilos modular por componentes |
| **localStorage** | Nativo | Persistencia de datos en el navegador |

---

## 🎓 Aprender React con este proyecto

Este proyecto es perfecto para aprender React. Incluye:

- ✅ Componentes funcionales
- ✅ Hooks (`useState`, `useEffect`)
- ✅ Props y comunicación entre componentes
- ✅ Gestión de formularios
- ✅ Filtrado y búsqueda de datos
- ✅ Persistencia con localStorage

---

## 📋 Comandos disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm build

# Previsualizar build de producción
npm run preview

# Linting (verificar código)
npm run lint
```

---

## 🔮 Roadmap futuro

Posibles mejoras para versiones futuras:

- 📱 App móvil nativa (React Native)
- ☁️ Sincronización con backend (guardar en servidor)
- 📧 Enviar recordatorios por email
- 📊 Estadísticas y gráficos de candidaturas
- 🔐 Autenticación y cuentas de usuario
- 📁 Importar/exportar candidaturas (CSV, JSON)
- 🌐 Scraper de ofertas de empleo

---

## 🤝 Contribuir

¿Tienes ideas o encontraste un bug? ¡Eres bienvenido a contribuir!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo libremente en tus proyectos personales y comerciales.

---

## 👤 Autor

Creado por **Belén Cera**

- 🔗 [LinkedIn](https://www.linkedin.com/in/belen-cera-blas/)
- 🐙 [GitHub](https://github.com/belencera/)


## ⭐ Si te fue útil, ¡dame una estrella!

```
Si este proyecto te ayudó, considera darle una ⭐ en GitHub. ¡Significa mucho! 🙌
```


