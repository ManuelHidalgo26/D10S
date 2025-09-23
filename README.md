<<<<<<< HEAD
<<<<<<< HEAD
# D10S

This repository demonstrates how to manage binary files by using [Git LFS](https://git-lfs.github.com/) to avoid storing large binaries directly in Git.

## Binary files

Binary assets such as images should be tracked with Git LFS.
To track PNG files:

```
git lfs install
git lfs track "*.png"
```

This generates a `.gitattributes` file that tells Git to manage `*.png` files via LFS.

## Example

The file `pixel.png` is tracked with Git LFS and referenced from `index.html`:

```
<img src="pixel.png" alt="1x1 transparent pixel" />
```

## Workflow

1. Add any binary files matching the tracked patterns.
2. Commit as usual; Git LFS stores the binaries separately and keeps the repository lightweight.
3. Ensure all collaborators run `git lfs install` to enable LFS support locally.
=======
=======
>>>>>>> 4c2304e74f4fb7e8a98a2db4bc315b92830e4def
# D10$

Landing oficial del proyecto D10$, construida con [Vite](https://vitejs.dev/), React y Tailwind CSS.

## Instalación

Asegúrate de tener Node.js y npm instalados. Luego ejecuta:

```bash
npm install
```

## Desarrollo

Inicia el servidor de desarrollo con hot reload:

```bash
npm run dev
```

## Despliegue

Genera una versión optimizada para producción:

```bash
npm run build
```

Puedes previsualizar la compilación resultante con:

```bash
npm run preview
```

Los archivos dentro de `dist/` pueden desplegarse en cualquier servicio de hosting estático.

## Contribución

Las contribuciones son bienvenidas. Para colaborar:

1. Haz un fork del repositorio y crea una rama descriptiva.
2. Instala dependencias con `npm install`.
3. Realiza tus cambios y asegúrate de que el proyecto funcione ejecutando `npm test`.
4. Abre un Pull Request describiendo los cambios propuestos.

<<<<<<< HEAD
>>>>>>> 4c2304e74f4fb7e8a98a2db4bc315b92830e4def
=======
>>>>>>> 4c2304e74f4fb7e8a98a2db4bc315b92830e4def
