import React from "react";
import PortfolioContents from "@/components/PortfolioContents";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const params = await searchParams;
  const defaultTab = (params.tab as string) ?? "projects";

  console.log(defaultTab);

  return (
    <>
      <section className="w-full md:container md:mx-auto h-full font-poppins pt-10 md:pt-16">
        <div className="w-full h-fit">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase font-black-han bg-clip-text text-transparent bg-gradient-to-r from-dirty-white to-beige select-none">
            My Portfolio
          </h1>
          <hr className="w-full border-t border-dirty-white my-4" />
        </div>

        <article className="mt-5 w-full">
          <PortfolioContents defaultTab={defaultTab} />
        </article>
      </section>
    </>
  );
};

export default page;
