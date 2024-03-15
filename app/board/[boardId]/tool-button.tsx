"use client";

import { Button } from "@/components/ui/button";
import { Hint } from "@/components/ui/hint";
import { LucideIcon } from "lucide-react";

interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActivate?: boolean;
  isDisabled?: boolean;
}

export const ToolButton = ({
  icon: Icon,
  label,
  onClick,
  isActivate,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="icon"
        variant={isActivate ? "boardActive" : "board"}
      >
        <Icon />
      </Button>
    </Hint>
  );
};
