Aquí tienes el README.md actualizado con la sección de autores mostrando el perfil de GitHub:

---
# 🚛 Transportes Dial Web

Plataforma web moderna para la gestión y seguimiento de operaciones de transporte. Este proyecto proporciona una interfaz eficiente construida con tecnologías actuales del ecosistema React.

## ✨ Características principales

- 📊 **Panel de control** intuitivo para operaciones diarias
- 🔍 **Seguimiento** de envíos y vehículos
- 📋 **Gestión** de órdenes de transporte
- 🔐 **Autenticación** de usuarios (mediante Supabase)
- 📱 **Diseño responsive** adaptable a móviles y escritorio

## 🛠️ Tecnologías utilizadas

| Área          | Tecnologías                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Frontend**  | React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui                         |
| **Backend**   | Supabase (autenticación, base de datos real-time)                           |
| **Build**     | Bun, npm                                                                    |
| **Testing**   | Vitest                                                                      |
| **Linting**   | ESLint                                                                      |

## 📁 Estructura del proyecto

```

transportesdial/
├── public/          # Archivos estáticos
├── src/             # Código fuente de la aplicación
├── supabase/        # Configuración y migraciones de Supabase
├── .env             # Variables de entorno
├── index.html       # Punto de entrada HTML
├── package.json     # Dependencias y scripts
├── tailwind.config.ts
├── vite.config.ts
└── vitest.config.ts

```

## 🚀 Cómo empezar

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/gbrss/transportesdial.git
   cd transportesdial
```

2. Instalar dependencias (usando bun o npm)
   ```bash
   bun install
   # o
   npm install
   ```
3. Configurar variables de entorno
      Crea un archivo .env basado en el ejemplo y añade tus claves de Supabase:
   ```
   VITE_SUPABASE_URL=tu_url
   VITE_SUPABASE_ANON_KEY=tu_clave
   ```
4. Ejecutar en modo desarrollo
   ```bash
   bun run dev
   # o
   npm run dev
   ```
5. Construir para producción
   ```bash
   bun run build
   ```

👥 Autores

gbrss
https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white

Desarrollador principal y mantenedor del proyecto.

🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir cambios importantes.

📄 Licencia

Este proyecto está bajo la GNU General Public License (GPL).
Consulta el archivo LICENSE para más detalles.

---

Hecho en Chile 🇨🇱 con React, TypeScript y cariño para el sector del transporte ❤️
