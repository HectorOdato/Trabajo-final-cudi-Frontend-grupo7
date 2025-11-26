# 🚀 Proyecto Final CUDI – E-Commerce | Grupo 7
**Aplicación Web Full Stack – Frontend + Backend**

Este proyecto **e-commerce** Trabajo final para la **Diplomatura en Desarrollo Web Fullstack 2025**

*Integrantes del Equipo – Grupo 7*

| Nombre              | GitHub                                                                             |
| ------------------- | -----------------------------------------------------------------------------------|
| **Hector Odato**    | [https://github.com/HectorOdato](https://github.com/HectorOdato)                   |
| **Leonardo Ortiz**  | [https://github.com/leonardo-jesus-ortiz](https://github.com/leonardo-jesus-ortiz) |
| **Mariano Maza**    | [https://github.com/MarianoMaza](https://github.com/Mariano0910)                   |


##Funcionalidades Principales
1. Autenticación
2. Módulo de ABMC (Alta, Baja, Modificación, Consulta)

##Tecnologías Utilizadas

● {*Vite,Tailwindcss,Axios,Lucide-react-,NodeJS*}

● Git: Uso de Git para el control de versiones y colaboración.

Hosting
| Servicio          | URL              |
| ----------------- | ---------------- |
| Frontend (Vercel) | *https://trabajo-final-cudi-frontend-grupo7.vercel.app* |
| Backend (Render)  | *https://trabajo-final-cudi-backend-grupo7.vercel.app* |
| Base de Datos     | MongoDB Atlas    |



## ⚙ Instalación y ejecución

## ⚙ Clonar FrontEnd

git clone git@github.com:HectorOdato/Trabajo-final-cudi-Frontend-grupo7.git
cd Trabajo-final-cudi-Frontend-grupo7
npm install
npm run dev

Dependencias necesarias frontend

npm install lucide-react axios tailwind



📁 Estructura del Proyecto
Frontend

/src
 ├──  /assets
 ├──  /components
 │     ├─  /services
 │     │    ├─ CategoryService.jsx
 │     │    └─ ProductService.jsx
 │     ├─ AuthStatus.jsx
 │     ├─ CartButton.jsx
 │     ├─ CategoryItem.jsx
 │     ├─ Dashboard.jsx
 │     ├─ Footer.jsx
 │     ├─ FormContainer.jsx
 │     ├─ FormField.jsx
 │     ├─ Navbar.jsx
 │     ├─ NavbarBase.jsx
 │     ├─ NavMenu.jsx
 │     ├─ ProductCard.jsx
 │     └─ TitleForm.jsx
 ├── /config
 │     └─ api.js
 ├── /pages
 │     ├─ /AdminPage
 │     │  ├── /components
 │     │  │   ├── AdminTabs.jsx
 │     │  │   ├── Analytics.jsx
 │     │  │   ├── CreateCategoryForm.jsx
 │     │  │   ├── CreateProductForm.jsx
 │     │  │   └── ProductList.jsx
 │     │  └── ABMCPage.jsx
 │     ├─ /Auth
 │     │   ├─/Components
 │     │   │  ├── LoginForm.jsx
 │     │   │  └── SignUpForm.jsx
 │     │   └── AccountPage.jsx
 │     ├─ /HomePage
 │     │  ├─ /components
 │     │  │  └─ CategoriesList.jsx
 │     │  └─ HomePage.jsx
 │     └─ CategoryPage.jsx
 ├── App.jsx
 ├── index.css
 └── main.jsx

