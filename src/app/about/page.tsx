import React from "react";

export default function About() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md p-6 bg-gradient-to-r from-gray-400 to-gray-400 border-gray-900 border-2 rounded-md shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Acerca de Mi Proyecto</h1>
        <p className="text-lg mb-4 text-gray-600">
          ¡Hola! Soy Matías, el creador de este proyecto desarrollado con Next.js y NextAuth. Es una simple aplicación
          web que destaca la integración de Next.js para el front-end y NextAuth para la autenticación de usuarios.
        </p>
        <p className="text-lg mb-4 text-gray-600">
          El proyecto incluye funcionalidades como registro de usuarios, inicio de sesión y una página de panel que
          demuestra rutas protegidas utilizando la autenticación proporcionada por NextAuth.
        </p>
        <p className="text-lg mb-4 text-gray-600">
          Si tienes alguna pregunta o comentario, ¡no dudes en ponerte en contacto conmigo!
        </p>
        <p className="text-lg mb-4 text-gray-600">¡Gracias por visitar mi proyecto Next.js con NextAuth!</p>
      </div>
    </div>
  );
}
