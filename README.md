# Vendup.fun
Vendup.fun es una plataforma de compraventa de productos entre particulares, creada para facilitar el intercambio de bienes de forma segura y eficiente. Esta aplicación web está desarrollada utilizando tecnologías modernas y cuenta con un diseño responsivo y fácil de usar. La plataforma integra servicios y herramientas populares como Bootstrap, JWT, Cloudinary, React, Python y Stripe para ofrecer una experiencia de usuario excepcional y fiable.

## Características principales
- Compraventa de productos entre particulares
- Diseño responsivo y amigable para dispositivos móviles
- Autenticación y autorización seguras utilizando JWT (JSON Web Tokens)
- Gestión de imágenes en la nube con Cloudinary
- Procesamiento de pagos seguro y eficiente con Stripe


## Tecnologías utilizadas
- Frontend: React y Bootstrap
- Backend: Python
- Autenticación: JWT
- Almacenamiento de imágenes: Cloudinary
- Procesamiento de pagos: Stripe


## Instalación y configuración
1. Clone el repositorio en su máquina local:


` https://github.com/jgonzalez-89/vendup-frontend.git `


2. Instale las dependencias necesarias para el frontend y el backend:

    - Navegue al directorio del frontend y ejecute:

    ` cd frontend `
    ` npm install `

3. Navegue al directorio del backend y ejecute:


    ` cd backend `
    ` pip install -r requirements.txt `

3. Configure las variables de entorno necesarias:

    - Cree un archivo .env en el directorio del frontend y configure las variables de entorno requeridas:

```bash
REACT_APP_BACKEND_URL=https://your-backend-url.com
REACT_APP_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/your-cloud-name/image/upload
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your-upload-preset
REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key
```

    - Cree un archivo .env en el directorio del backend y configure las variables de entorno requeridas:

```bash
SECRET_KEY=your-secret-key
DATABASE_URL=your-database-url
JWT_SECRET_KEY=your-jwt-secret-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
STRIPE_SECRET_KEY=your-stripe-secret-key
```

4. Inicie la aplicación:

    - En el directorio del frontend, ejecute:


    ``npm run dev``

    - En el directorio del backend, ejecute:


    ``python app.py``

Ahora la aplicación debería estar ejecutándose en su máquina local. Para obtener más información sobre cómo utilizar y personalizar la plataforma Vendup.fun, consulte la documentación del proyecto.