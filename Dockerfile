# Usar una imagen de Node.js para construir la app
FROM node:20 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la app
RUN npm run build --prod

# Usar Nginx para servir la app
FROM nginx:alpine

# Copiar los archivos de construcción al directorio de Nginx
COPY --from=build /app/dist/demo-angular/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
