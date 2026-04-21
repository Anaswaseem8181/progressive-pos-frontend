import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const AuthSplitLayout = ({
  leftContent,
  rightContent,
  leftWidth = "lg:w-[45%]",
  leftBg = "bg-slate-900",
  className
}) => {
  return (
    <div className={cn("min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden font-sans", className)}>
      <div
        className={cn(
          "hidden lg:flex p-12 flex-col justify-between relative overflow-hidden",
          leftWidth,
          leftBg
        )}
      >
        {leftContent}
      </div>

      <div
        className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 bg-slate-50 relative overflow-y-auto"
      >
        {rightContent}
      </div>
    </div>
  );
};

export default AuthSplitLayout;
