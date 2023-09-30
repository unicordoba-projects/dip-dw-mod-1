# Diplomado en Desarrollo de Aplicaciones Orientadas a la Nube

## Módulo 1: Diseño Web y Tecnologías Frontend

### Temas a trabajar en el módulo

- Diseño de interfaces con Tailwind CSS
  - Creación del proyecto VUE JS e instalación de dependencias para Tailwind CSS
  - Creación de un Admin Panel
  - Comunicación asíncrona con APIs
  - Libreria AXIOS
  - Formato JSON
   
#####

- Creación de interfaz gráfica con VUE JS
    - Componentes
    - Enrutamiento
    - Uso de librerías para generación de gráficos

#### Herramientas 
- Node JS: Entorno de ejecución para JavaScript
- NPM: Node Package Manager
- Vite: Herramienta de compilación
- Visual Studio Code
- Github
- Chart JS
- AXIOS

#### Recursos web
- Documentación Tailwind CSS, https://tailwindcss.com/docs/installation
- Cheat Sheet Tailwind CSS, https://tailwindcomponents.com/cheatsheet
- Documentación de VUE JS, https://vuejs.org/guide/introduction.html


### Anotaciones Sesión 1
---

Creación de un proyecto Tailwind CSS dentro de una carpeta ya creada.
```console
   npm install -D tailwindcss
```

Creamos el archivo de configuración **tailwind.config.js** 
```console
   npx tailwindcss init
```

Configuramos la ruta de las plantillas editando el archivo **tailwind.config.js**
```js
   /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    }
```

Creamos el archivo base CSS en **src/css/input.css**
```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

Ejecutamos el siguiente comando para tomar las plantillas y construir los CSS
```console
    npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch
```

INstalar live-server para probar la interfaz gráfica

Puedes probar tu sitio web ejecutando el siguiente comando en la carpeta S0
```bash
    npm install -g live-server
    live-server
```

Configurar archivo **package.json**
```js
"scripts": {
    "build": "live-server & npx tailwindcss -i ./src/css/input.css -o ./dist/output.css",
    "watch": "live-server & npx tailwindcss -i ./src/css/input.css -o ./dist/output.css --watch"
  },
```

Ejecutar el script anterior
```bash
    npm run watch
```