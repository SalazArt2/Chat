import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageController = () => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    // Cargar el idioma guardado en localStorage (por defecto es inglés)
    const savedLanguage = localStorage.getItem("language") || "es";
    setSelectedLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="language-selector" className="mr-2">
        {t("language")}:
      </label>
      <select
        id="language-selector"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="select select-bordered"
      >
        <option value="en">{t("english")}</option>
        <option value="es">{t("spanish")}</option>
        {/* Agrega más opciones de idiomas si es necesario */}
      </select>
    </div>
  );
};

export default LanguageController;
