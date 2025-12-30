// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  // Verificamos si el idioma existe en nuestro objeto ui
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // 1. Intentamos buscar en el idioma actual (ej. 'es')
    // 2. Si no existe ese idioma o esa clave, usamos el idioma por defecto (ej. 'en')
    // 3. Usamos un fallback vacío para que nunca intente leer de 'undefined'
    return (ui[lang] && ui[lang][key]) || ui[defaultLang][key];
  }
}