import CategoriesSection from "@/components/CategoriesSection";
import ContinueReadingSection from "@/components/ContinueReadingSection";
import TrendingSection from "@/components/TrendingSection";

const HomePage = async () => {
  return (
    <main className="flex flex-col w-full items-start text-center p-4 gap-4">
      <h2 className="self-center">
        &ldquo;Knowledge is power.&rdquo; - Francis Bacon
      </h2>
      <TrendingSection />
      <div className="flex gap-4">
        <ContinueReadingSection />
        <CategoriesSection />
      </div>
    </main>
  );
};

export default HomePage;
