"use client";

import { useRouter, useSearchParams } from "next/navigation";

// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PortfolioContents = ({ defaultTab }: { defaultTab?: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Updates the tab without refreshing the page
  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.replace(`/portfolio?${params.toString()}`);
  }

  return (
    <>
      <Tabs defaultValue={defaultTab} className="w-full" onValueChange={onChange}>
        <TabsList
          className="mb-4 rounded-lg border bg-transparent
              flex w-full flex-wrap gap-2 justify-center h-fit p-2"
        >
          <TabsTrigger value="projects" className="text-dirty-white">
            Projects
          </TabsTrigger>
          <TabsTrigger value="experiences" className="text-dirty-white">
            Experiences
          </TabsTrigger>
          <TabsTrigger value="certificate" className="text-dirty-white">
            Certifications
          </TabsTrigger>
          <TabsTrigger value="stack" className="text-dirty-white">
            Tech Stacks
          </TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
            
        </TabsContent>
        <TabsContent value="experiences">

        </TabsContent>
        <TabsContent value="certificate">

        </TabsContent>
        <TabsContent value="stack">

        </TabsContent>
      </Tabs>
    </>
  );
};

export default PortfolioContents;
