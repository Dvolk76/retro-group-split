import { IOSNavigationBar } from "@/components/ui/ios-navigation-bar";
import { IOSList, IOSListItem } from "@/components/ui/ios-list";
import { IOSIcon } from "@/components/ui/ios-icon";
import { Button } from "@/components/ui/button";
import { Users, Plus, DollarSign, TrendingUp, FileText } from "lucide-react";
import { useState } from "react";

interface Group {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  totalExpenses: number;
  yourBalance: number;
  currency: string;
}

export function GroupsScreen() {
  const [groups] = useState<Group[]>([
    {
      id: "1",
      name: "Weekend Trip",
      description: "Cabin rental and activities",
      memberCount: 4,
      totalExpenses: 1247.50,
      yourBalance: -85.25,
      currency: "USD"
    },
    {
      id: "2", 
      name: "Roommates",
      description: "Shared apartment expenses",
      memberCount: 3,
      totalExpenses: 2100.00,
      yourBalance: 156.75,
      currency: "USD"
    },
    {
      id: "3",
      name: "Office Lunch",
      description: "Daily lunch orders",
      memberCount: 8,
      totalExpenses: 450.00,
      yourBalance: 0,
      currency: "USD"
    }
  ]);

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  const getBalanceColor = (balance: number) => {
    if (balance > 0) return "text-success";
    if (balance < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <div className="flex flex-col h-full bg-ios-gray">
      <IOSNavigationBar 
        title="Groups" 
        rightAction={
          <Button size="sm" className="ios-button-primary">
            <IOSIcon icon={Plus} size="sm" className="mr-1" />
            New
          </Button>
        }
      />
      
      <div className="flex-1 p-4 space-y-4 overflow-auto pb-24">
        {groups.length === 0 ? (
          <div className="ios-card p-8 text-center">
            <IOSIcon icon={Users} size="xl" className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="ios-title text-lg font-semibold mb-2">No Groups Yet</h3>
            <p className="ios-body text-muted-foreground mb-4">
              Create your first group to start splitting expenses with friends.
            </p>
            <Button className="ios-button-primary">
              <IOSIcon icon={Plus} size="sm" className="mr-2" />
              Create Group
            </Button>
          </div>
        ) : (
          <>
            {/* Quick Actions */}
            <div className="flex space-x-3">
              <Button className="ios-button-primary flex-1">
                <IOSIcon icon={Plus} size="sm" className="mr-2" />
                Add Expense
              </Button>
              <Button className="ios-button-secondary flex-1">
                <IOSIcon icon={TrendingUp} size="sm" className="mr-2" />
                Settle Up
              </Button>
            </div>

            {/* Groups List */}
            <IOSList>
              {groups.map((group) => (
                <IOSListItem
                  key={group.id}
                  title={group.name}
                  subtitle={`${group.memberCount} members • ${formatCurrency(group.totalExpenses, group.currency)} total`}
                  leftIcon={
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <IOSIcon icon={Users} className="text-primary" />
                    </div>
                  }
                  rightContent={
                    <div className="text-right">
                      <div className={`ios-body font-semibold ${getBalanceColor(group.yourBalance)}`}>
                        {group.yourBalance === 0 
                          ? "Settled up" 
                          : group.yourBalance > 0 
                            ? `You are owed ${formatCurrency(group.yourBalance, group.currency)}`
                            : `You owe ${formatCurrency(Math.abs(group.yourBalance), group.currency)}`
                        }
                      </div>
                    </div>
                  }
                  showChevron
                  onClick={() => {}}
                />
              ))}
            </IOSList>

            {/* Recent Activity */}
            <div className="ios-card p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="ios-title font-semibold">Recent Activity</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              <IOSListItem
                title="Grocery Shopping"
                subtitle="Weekend Trip • Added by Sarah"
                leftIcon={<IOSIcon icon={DollarSign} className="text-success" />}
                rightContent={
                  <span className="ios-body text-muted-foreground">$45.67</span>
                }
              />
              <IOSListItem
                title="Gas Station"
                subtitle="Weekend Trip • Added by Mike"
                leftIcon={<IOSIcon icon={DollarSign} className="text-success" />}
                rightContent={
                  <span className="ios-body text-muted-foreground">$89.43</span>
                }
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}