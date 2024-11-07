# Usar la imagen oficial de Node.js como base
FROM node:18 AS builder

# Crear el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos del proyecto
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build:ssr

# Usar una imagen más ligera para el despliegue
FROM node:18 AS runner
WORKDIR /usr/src/app

# Copiar el build de la etapa anterior
COPY --from=builder /usr/src/app/dist/demo_angular ./dist/demo_angular

# Instalar las dependencias necesarias
COPY package*.json ./
RUN npm install --omit=dev

# Exponer el puerto
EXPOSE 4200

# Comando para ejecutar la aplicación
CMD ["node", "dist/demo_angular/server/main.js"]
