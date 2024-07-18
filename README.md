# Movie App

Esta es una aplicación de búsqueda de películas construida con React Native y [Expo](https://docs.expo.dev/). La aplicación permite a los usuarios buscar películas por título y año, y ver los detalles de cada película.

![Screenshot 1](./assets/screenshots/image1.png)
![Screenshot 2](./assets/screenshots/image2.png)

## Caracteristicas
- Buscar películas por título y año
- Ver una lista de resultados de búsqueda con imagen, título y calificación
- Ver detalles completos de una película seleccionada, incluyendo descripción, director, actores, etc
- Uso de estilos personalizados para el diseño
- Manejo de estado local con React Hooks
- Manejo de errores para proporcionar retroalimentación adecuada al usuario
- Tests unitarios para asegurar la calidad del código

## Requisitos
- Node.js y npm

## Instalacion

1. Clonar el repo:

   ```bash
   git clone https://github.com/matiasosorio1999/movie-app.git
   cd movie-app
   npm install
   ```

2. Instalar dependencias:

   ```bash
    npm install
   ```
3. Iniciar la app con Expo:
   ```bash
    npm start
   ```
4. Seguir las instrucciones en la terminal para abrir la aplicación en un emulador o dispositivo físico usando la aplicación Expo Go.


## Scripts Disponibles

Iniciar la aplicación para desarrollo:
```bash
  npm start
```

Construir la aplicación para producción:
```bash
  expo build
```

Correr ESLint para verificar el código:
```bash
  npm run lint
```

Correr los tests unitarios:
```bash
  npm test
```

## Estructura del Proyecto
```bash
movie-app/
│
├── app/
│   ├── movie/
│   │   └── [id].tsx
│   ├── _layout.tsx
│   ├── +not-found.tsx
│   └── index.tsx
│
├── assets/
│   ├── fonts/
│   └── images/
│
├── components/
│   ├── __tests__/
│   ├── MovieCard.tsx
│   └── SearchBar.tsx
│
├── constants/
├── scripts/
├── services/
│   └── api.ts
│
├── types/
│   ├── movies.ts
│   └── navigation.ts
│
├── .eslintrc.js
├── .gitignore
├── app.json
├── babel.config.js
├── expo-env.d.ts
├── package.json
├── package-lock.json
└── README.md
```

## API Utilizada
Los datos de las películas se obtienen de la [API de OMDB](https://www.omdbapi.com/).
