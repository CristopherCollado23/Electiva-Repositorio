console.log("¡Hola Mundo!");

name: Integración Continua y Notificación

on:
  push:
    branches:
      - main

jobs:
  notificar_ntfy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Descargar el código del repositorio
        uses: actions/checkout@v4

      - name: Ejecutar Hola Mundo
        run: node index.js
        
      - name: Enviar alerta a ntfy.sh
        run: curl -d "Se ha realizado un nuevo push a la rama main." https://ntfy.sh/devops-itla
