# IENSCH

---

# Programación Orientada a Objetos en JavaScript - Gestión de Productos

Este proyecto es un **ejercicio educativo interactivo** diseñado para enseñar los 
fundamentos de la **Programación Orientada a Objetos (POO) en JavaScript**.  
Forma parte del curso de **Desarrollo Web** y está orientado a estudiantes que 
están aprendiendo a crear, estructurar y manipular clases en JavaScript.

---

## 📌 Tecnologías utilizadas

- **JavaScript (ES6+)**
- **Node.js** (para ejecutar las pruebas en consola)

---

## 🎯 Características principales

- 🆕 **Creación de productos** y almacenamiento en memoria.
- 🔍 **Listado individual** de un producto por su `id`.
- 📋 **Listado de todos los productos** existentes.
- 🗑️ **Eliminación de un producto** por `id`.
- ✏️ **Actualización de un producto** por `id`.
- ✅ Validación básica de datos antes de ejecutar operaciones.

---

## 🧪 ¿Qué aprenderán los estudiantes?

- Cómo declarar una clase con la palabra reservada `class`.
- Cómo inicializar propiedades con el método especial `constructor`.
- Cómo crear métodos públicos dentro de una clase.
- Cómo manejar errores con `try...catch`.
- Cómo usar métodos de arrays como `.push()`, `.find()`, `.findIndex()`, `.splice()` y `.map()`.
- Cómo manipular propiedades de objetos de forma segura usando el operador spread (`...`).
- Cómo validar parámetros y devolver respuestas estructuradas.

---

## ⚙️ Estructura del proyecto

- **`ProductServices`**: Clase que encapsula toda la lógica de gestión de productos.
    - **`createOne(newProduct)`**: Agrega un nuevo producto al listado.
    - **`listOne(productID)`**: Muestra un producto específico según su `id`.
    - **`listAll()`**: Devuelve todos los productos creados.
    - **`deleteOne(productID)`**: Elimina un producto según su `id`.
    - **`updateOne(productID, newProduct)`**: Actualiza la información de un producto existente.
- **`productServices.js`**: Archivo de ejemplo para instanciar la clase y probar todos sus métodos.

---

## 🚀 ¿Cómo probar el proyecto?

1. Clona este repositorio:

```bash
git clone https://github.com/iensc-software-sena/product-services-class.git
```

2. Accede al directorio::

```bash
    cd product-services-class
```

3. Abre el proyecto en Visual Studio Code:

```bash
    code .
```

4. Ejecuta el archivo en la terminal de comandos:

```bash
    node src/ProductServices.js
```

## Ideas para extender el ejercicio

- 💾 Guardar los productos en un archivo JSON o base de datos.
- 🔄 Permitir búsqueda de productos por nombre o rango de precio.
- 🎨 Crear una interfaz web para interactuar con la clase.
- 📊 Mostrar estadísticas de productos (total, promedio de precios, etc.).
- 🕒 Agregar fecha de creación o última modificación de cada producto.
- ♻️ Implementar un método para eliminar todos los productos.

---

## Licencia

Distribuido bajo la licencia MIT. Consulte la sección «LICENCIA» para más información.