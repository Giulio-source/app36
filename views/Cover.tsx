import { BaseButton } from "../components/BaseButton";
import { BaseLayout } from "../components/BaseLayout";
import TypingText from "../components/TypingText";

export const Cover = ({ onNext }: { onNext: () => void }) => {
  return (
    <BaseLayout footer={<BaseButton icon="right" onPress={onNext} />}>
      <TypingText type="cover" text="36 Questions for Deeper Conversations." />
    </BaseLayout>
  );
};
