import { useContext } from "react";
import { BaseButton } from "../components/BaseButton";
import { BaseLayout } from "../components/BaseLayout";
import TypingText from "../components/TypingText";
import { WhiteText } from "../components/WhiteText";
import { AppContext } from "../context/AppContext";
import { languageData } from "../data/languageData";

export const Introduction = ({ onNext }: { onNext: () => void }) => {
  const { lang } = useContext(AppContext);

  function handleOnClick() {
    onNext();
  }

  return (
    <BaseLayout footer={<BaseButton icon="right" onPress={handleOnClick} />}>
      <TypingText type="title" text={languageData.introTitle[lang]} />
      <WhiteText>{languageData.intro1[lang]}</WhiteText>
      <WhiteText>{languageData.intro2[lang]}</WhiteText>
    </BaseLayout>
  );
};
