import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export interface TabConfig {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabListProps {
  tabs: TabConfig[];
  defaultValue?: string;
  className?: string;
}

export function TabList({ tabs, defaultValue, className = "" }: TabListProps) {
  return (
    <Tabs
      defaultValue={defaultValue || tabs[0]?.id}
      className={`w-full ${className}`}
    >
      <TabsList className="h-auto w-full justify-start gap-8 bg-transparent p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            disabled={tab.disabled || false}
            className="rounded-none border-0 border-b-2 border-transparent bg-transparent px-0 py-4 text-lg font-medium text-gray-400 data-[state=active]:border-white data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:shadow-none"
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.id} value={tab.id} className="mt-6">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
