import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IOSIconProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6", 
  lg: "w-8 h-8",
  xl: "w-10 h-10"
};

export function IOSIcon({ icon: Icon, size = "md", className }: IOSIconProps) {
  return (
    <Icon 
      className={cn(
        sizeClasses[size],
        "text-current",
        className
      )} 
    />
  );
}