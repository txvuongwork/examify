import { Badge } from "@/components/ui";
import { EDifficultyLevel, type EKnowledgeDomain } from "@/enums";
import type { VariantProps } from "class-variance-authority";
import type { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import type { badgeVariants } from "../ui/variants";

const DIFFICULTY_VARIANT: Record<
  EDifficultyLevel,
  VariantProps<typeof badgeVariants>["variant"]
> = {
  [EDifficultyLevel.NHAN_BIET]: "green",
  [EDifficultyLevel.THONG_HIEU]: "blue",
  [EDifficultyLevel.VAN_DUNG]: "amber",
  [EDifficultyLevel.VAN_DUNG_CAO]: "red",
};

interface QuestionBadgesProps {
  difficulty: EDifficultyLevel;
  domain: EKnowledgeDomain;
}

export const QuestionBadges: FunctionComponent<QuestionBadgesProps> = ({
  difficulty,
  domain,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap gap-1.5">
      <Badge variant={DIFFICULTY_VARIANT[difficulty]}>
        {t(`enum.difficultyLevel.${difficulty}`)}
      </Badge>
      <Badge variant="purple">{t(`enum.knowledgeDomain.${domain}`)}</Badge>
    </div>
  );
};
