# Guía de entrega: colaboración con Git y GitHub

## Importante
El ZIP contiene la versión final como referencia. **No suban inicialmente los cinco archivos HTML/CSS/JS con todas las páginas ya creadas a `main`**, porque no se demostraría que cada estudiante elaboró su propio servicio. Sigan el orden siguiente.

### Estudiante 1: proyecto inicial
1. Descomprime el ZIP y abre la carpeta `servicios-express` en VS Code.
2. **Mueve temporalmente `servicio1.html` y `servicio2.html` fuera de esta carpeta** (por ejemplo a otra carpeta de respaldo). Deja `index.html`, `style.css`, `script.js`, `assets`, README y la guía. Es normal que temporalmente los enlaces a los servicios todavía no funcionen.
3. Abre CMD en esa carpeta y ejecuta:

```bat
git init
git add .
git commit -m "Crear estructura y pagina principal"
git branch -M main
```

4. En github.com crea un repositorio **vacío**, sin agregar README, llamado `servicios-express`.
5. Conecta el repositorio (reemplaza `USUARIO`):

```bat
git remote add origin https://github.com/USUARIO/servicios-express.git
git push -u origin main
```

6. En GitHub: `Settings` > `Collaborators` > `Add people`; invita a tu compañero. Tu compañero acepta la invitación.

### Estudiante 2: clonar
1. Abre CMD donde quieras guardar su copia del proyecto.
2. Ejecuta (reemplaza `USUARIO`):

```bat
git clone https://github.com/USUARIO/servicios-express.git
cd servicios-express
```

### Estudiante 1: rama del servicio de autos
En la carpeta del repositorio ejecuta:

```bat
git checkout main
git pull origin main
git checkout -b feat/servicio1
```

Copia `servicio1.html` de tu carpeta de respaldo a la carpeta del proyecto. Abre y revisa el código; haz las modificaciones reales que te correspondan y guarda. Después:

```bat
git add servicio1.html
git commit -m "Crear pagina de lavado de autos"
git push -u origin feat/servicio1
```

En GitHub abre `Compare & pull request` para `feat/servicio1` hacia `main`, luego `Create pull request` y `Merge pull request` (si no hay conflictos).

### Estudiante 2: rama del servicio del hogar
En su computadora, en la carpeta clonada, ejecuta:

```bat
git checkout main
git pull origin main
git checkout -b feat/servicio2
```

Copia `servicio2.html` del ZIP original a su copia local del proyecto. Abre y revisa el código; haz las modificaciones reales que te correspondan y guarda. Después:

```bat
git add servicio2.html
git commit -m "Crear pagina de limpieza del hogar"
git push -u origin feat/servicio2
```

En GitHub abre `Compare & pull request` para `feat/servicio2` hacia `main`, luego `Create pull request` y `Merge pull request`.

### Sincronización y comprobación final
Cada estudiante ejecuta en su propia copia:

```bat
git checkout main
git pull origin main
git log --oneline --all --graph --decorate
```

Comprueben en GitHub:
- En `main` aparecen `index.html`, `style.css`, `script.js`, `servicio1.html`, `servicio2.html` y `assets`.
- El historial muestra commits correspondientes a ambos colaboradores.
- Hay dos pull requests integrados a `main`.
- Los enlaces del menú abren ambos servicios.
- **Ambos** entregan el mismo enlace: `https://github.com/USUARIO/servicios-express`.

Si aparece `fatal: not a git repository`, asegúrate de estar dentro de la carpeta `servicios-express` antes de ejecutar Git.
Si aparece `Author identity unknown`, configura tu nombre y correo asociados a tus commits con `git config --global user.name "Tu Nombre"` y `git config --global user.email "tu-correo@example.com"`. El correo puede ser el privado `noreply` de GitHub.

**Nota de integridad académica:** no simulen commits del compañero con otra identidad. Cada uno debe revisar, adaptar y subir su propio servicio desde su cuenta.
