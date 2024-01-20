import { createContext, useState } from "react";

export type LanguageType = "en" | "it" | "es" | "fr" | "de" | "pt";

export const LANGUAGE_HANDLER: { [key in LanguageType]: string } = {
  en: "English",
  it: "Italiano",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
};

type ContextValueType = {
  lang: LanguageType;
  onChangeLang: (lang: LanguageType) => void;
  exiting: boolean;
  onChangeExiting: (value: boolean) => void;
};

export const AppContext = createContext<ContextValueType>({
  lang: "en",
  onChangeLang: () => {},
  exiting: false,
  onChangeExiting: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<LanguageType>("en");
  const [exiting, setExiting] = useState<boolean>(false);
  function onChangeLang(lang: LanguageType) {
    setLang(lang);
  }

  function onChangeExiting(value: boolean) {
    setExiting(value);
  }

  return (
    <AppContext.Provider
      value={{ lang, onChangeLang, exiting, onChangeExiting }}
    >
      {children}
    </AppContext.Provider>
  );
};
