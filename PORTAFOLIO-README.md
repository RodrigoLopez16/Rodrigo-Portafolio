# 🎨 Portafolio Profesional de Rodrigo

Un portafolio moderno y elegante desarrollado con Angular, diseñado con colores pastel y animaciones suaves.

## 🚀 Características

- **Diseño Responsivo**: Perfectamente adaptado a dispositivos móviles, tablets y escritorio
- **Colores Pastel**: Paleta de colores suaves y profesionales
- **Animaciones Suaves**: Transiciones elegantes y efectos visuales
- **Secciones Completas**: Hero, About, Skills, Experience, Education, Projects, Contact
- **Formulario de Contacto**: Funcional con validación
- **Componentes Reutilizables**: Arquitectura modular y mantenible

## 📋 Secciones Incluidas

1. **🏠 Hero Section**: Presentación principal con llamadas a la acción
2. **👨‍💻 About**: Información personal y estadísticas
3. **🛠️ Skills**: Habilidades técnicas con barras de progreso
4. **💼 Experience**: Experiencia laboral en timeline
5. **🎓 Education**: Formación académica y certificaciones
6. **🚀 Projects**: Portafolio de proyectos con filtros
7. **📄 Download CV**: Sección para descargar currículum
8. **📞 Contact**: Formulario de contacto funcional

## 🛠️ Tecnologías Utilizadas

- **Angular 20+**: Framework principal
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador CSS
- **Bootstrap 5**: Framework CSS
- **Font Awesome 6**: Iconos
- **Google Fonts**: Tipografía Poppins

## 📦 Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <tu-repositorio>
   cd Rodrigo-Portafolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo:**
   ```bash
   ng serve
   ```

4. **Abre el navegador:**
   ```
   http://localhost:4200
   ```

## 🎨 Personalización

### Colores
Los colores se definen en `src/styles.scss`:
```scss
:root {
  --primary-pastel: #B4A7D6;     /* Lavanda suave */
  --secondary-pastel: #FFB6C1;   /* Rosa pastel */
  --accent-pastel: #98D8C8;      /* Menta pastel */
  --warning-pastel: #F7DC6F;     /* Amarillo pastel */
  --info-pastel: #AED6F1;        /* Azul pastel */
}
```

### Contenido Personal
1. **Información Personal**: Edita los archivos en `src/app/components/about/about.ts`
2. **Habilidades**: Modifica `src/app/components/skills/skills.ts`
3. **Experiencia**: Actualiza `src/app/components/experience/experience.ts`
4. **Educación**: Edita `src/app/components/education/education.ts`
5. **Proyectos**: Modifica `src/app/components/projects/projects.ts`

### Imágenes
Coloca tus imágenes en `src/assets/images/`:
- `hero-avatar.png`: Foto para la sección hero
- `profile.jpg`: Foto para la sección about
- Imágenes de proyectos (puedes usar las URLs actuales o reemplazarlas)

### Documentos
Coloca tu CV en `src/assets/documents/`:
- `cv-rodrigo-desarrollador.pdf`: Tu currículum en formato PDF

## 🌈 Paleta de Colores

### Colores Principales
- **Lavanda Suave**: `#B4A7D6` - Color principal
- **Rosa Pastel**: `#FFB6C1` - Color secundario
- **Menta Pastel**: `#98D8C8` - Color de acento
- **Amarillo Pastel**: `#F7DC6F` - Color de advertencia
- **Azul Pastel**: `#AED6F1` - Color de información

### Colores de Fondo
- **Primario**: `#F8F9FA` - Fondo principal
- **Secundario**: `#FFF5F5` - Fondo alternativo
- **Tarjetas**: `#FFFFFF` - Fondo de tarjetas

## 📱 Responsive Design

El portafolio está optimizado para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Comandos Útiles

```bash
# Servidor de desarrollo
ng serve

# Build para producción
ng build

# Ejecutar tests
ng test

# Linting
ng lint

# Crear nuevo componente
ng generate component nombre-componente
```

## 📂 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── download-cv/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── projects/
│   │   └── skills/
│   └── pages/
│       └── home/
├── assets/
│   ├── images/
│   └── documents/
└── styles.scss
```

## 🚀 Deployment

### Para GitHub Pages:
```bash
ng build --base-href="/tu-repositorio/"
```

### Para Netlify:
```bash
ng build
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes sugerencias o mejoras:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

- **Email**: rodrigo.developer@email.com
- **LinkedIn**: [Tu perfil de LinkedIn]
- **GitHub**: [Tu perfil de GitHub]

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
