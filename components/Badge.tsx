import React from "react";

interface BadgeProps {
  title: string;
}

const Badge: React.FC<BadgeProps> = ({ title }) => {
  return (
    <span className="py-2 px-3 text-xs text-Snow bg-EvenningBlack rounded-full">
      {title}
    </span>
  );
};

export default Badge;
