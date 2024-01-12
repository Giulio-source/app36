import { useContext } from "react";
import { BaseButton } from "../components/BaseButton";
import { BaseLayout } from "../components/BaseLayout";
import { WhiteText } from "../components/WhiteText";
import { AppContext } from "../context/AppContext";
import { languageData } from "../data/languageData";

export const EndGame = ({ startOver }: { startOver: () => void }) => {
  const { lang } = useContext(AppContext);

  return (
    <BaseLayout
      footer={
        <BaseButton label={languageData.startOver[lang]} onPress={startOver} />
      }
    >
      <WhiteText tag="h1">{languageData.endGame[lang]}</WhiteText>
    </BaseLayout>
  );
};
