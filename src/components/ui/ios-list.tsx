import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { IOSIcon } from "./ios-icon";
import { ChevronRight } from "lucide-react";

interface IOSListItemProps {
  title: string;
  subtitle?: string;
  leftIcon?: ReactNode;
  rightContent?: ReactNode;
  showChevron?: boolean;
  onClick?: () => void;
  className?: string;
}

export function IOSListItem({
  title,
  subtitle,
  leftIcon,
  rightContent,
  showChevron = false,
  onClick,
  className
}: IOSListItemProps) {
  const Component = onClick ? "button" : "div";
  
  return (
    <Component
      onClick={onClick}
      className={cn(
        "ios-list-item justify-between",
        onClick && "ios-scale-tap hover:bg-muted/50",
        className
      )}
    >
      <div className="flex items-center flex-1 min-w-0">
        {leftIcon && (
          <div className="mr-3 flex-shrink-0">
            {leftIcon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="ios-body font-medium text-foreground">
            {title}
          </div>
          {subtitle && (
            <div className="ios-caption text-muted-foreground">
              {subtitle}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center ml-3">
        {rightContent}
        {showChevron && (
          <IOSIcon 
            icon={ChevronRight} 
            size="sm" 
            className="ml-2 text-muted-foreground" 
          />
        )}
      </div>
    </Component>
  );
}

interface IOSListProps {
  children: ReactNode;
  className?: string;
}

export function IOSList({ children, className }: IOSListProps) {
  return (
    <div className={cn("ios-card overflow-hidden", className)}>
      {children}
    </div>
  );
}