import { cn } from "@/lib/utils";
import { IOSIcon } from "./ios-icon";
import { ChevronLeft, MoreHorizontal } from "lucide-react";
import { ReactNode } from "react";

interface IOSNavigationBarProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightAction?: ReactNode;
  className?: string;
}

export function IOSNavigationBar({ 
  title, 
  showBackButton = false, 
  onBackPress, 
  rightAction,
  className 
}: IOSNavigationBarProps) {
  return (
    <div className={cn("ios-nav-bar", className)}>
      <div className="flex items-center justify-between h-11">
        <div className="flex items-center">
          {showBackButton && (
            <button
              onClick={onBackPress}
              className="ios-scale-tap flex items-center text-primary mr-2"
            >
              <IOSIcon icon={ChevronLeft} size="md" />
              <span className="ios-body font-medium">Back</span>
            </button>
          )}
        </div>
        
        <div className="flex-1 text-center">
          <h1 className="ios-title text-lg font-semibold truncate">
            {title}
          </h1>
        </div>
        
        <div className="flex items-center">
          {rightAction || <div className="w-8" />}
        </div>
      </div>
    </div>
  );
}