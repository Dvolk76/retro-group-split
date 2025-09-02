import { cn } from "@/lib/utils";
import { IOSIcon } from "./ios-icon";
import { LucideIcon } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badge?: number;
}

interface IOSTabBarProps {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export function IOSTabBar({ tabs, activeTab, onTabChange, className }: IOSTabBarProps) {
  return (
    <div className={cn("ios-tab-bar", className)}>
      <div className="flex h-full items-center justify-around px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-2 py-1 ios-scale-tap rounded-lg transition-colors duration-200",
                "min-w-0 flex-1 max-w-20",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className="relative">
                <IOSIcon 
                  icon={tab.icon} 
                  size="md" 
                  className={cn(
                    "transition-colors duration-200",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                />
                {tab.badge && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {tab.badge > 99 ? "99+" : tab.badge}
                  </span>
                )}
              </div>
              <span className={cn(
                "text-xs font-medium truncate leading-tight ios-caption",
                isActive ? "text-primary" : "text-muted-foreground"
              )}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}