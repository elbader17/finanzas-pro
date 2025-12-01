#!/bin/bash

PUBLIC_DIR="build"

start_local() {
  echo "🚀 Iniciando el proyecto SvelteKit en modo de desarrollo local..."
  pnpm dev
}

deploy_to_firebase() {
  echo "🏗️ Construyendo la aplicación SvelteKit..."
  pnpm build

  if [ $? -ne 0 ]; then
    echo "❌ Error: La construcción falló. Abortando despliegue."
    exit 1
  fi

  echo "🔥 Desplegando en Firebase Hosting..."
  firebase deploy --only hosting

  if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue exitoso en Firebase Hosting!"
  else
    echo "❌ Error: El despliegue a Firebase falló."
    exit 1
  fi
}

if [ -z "$1" ]; then
  echo "Uso: $0 [local|deploy]"
  echo "  local: Inicia la aplicación en modo de desarrollo local."
  echo "  deploy: Construye la aplicación y la sube a Firebase Hosting."
  exit 1
fi

if [ "$1" == "local" ]; then
  start_local
elif [ "$1" == "deploy" ]; then
  deploy_to_firebase
else
  echo "⚠️ Parámetro desconocido: '$1'. Usa 'local' o 'deploy'."
  exit 1
fi
