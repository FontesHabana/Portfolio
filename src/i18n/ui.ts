// src/i18n/ui.ts

export const defaultLang = 'en'; // Asegúrate de que esto sea 'en' (si ese es tu default)

export const ui = {
  en: { // <--- Esta llave debe ser igual a defaultLang
    'menuOpen': 'Menu',
    'menuClose': 'Close',
    'navInicio': 'Home',
    'navSobreMi': 'About',
    'navProyectos': 'Projects',
    'navContacto': 'Contact',
  },
  es: { // <--- Esta llave debe ser 'es'
    'menuOpen': 'Menú',
    'menuClose': 'Cerrar',
    'navInicio': 'Inicio',
    'navSobreMi': 'Sobre mí',
    'navProyectos': 'Proyectos',
    'navContacto': 'Contacto',
  },
} as const;