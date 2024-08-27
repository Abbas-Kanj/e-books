import TrendingSection from "@/components/bookPage/TrendingSection";
import CategoriesSection from "@/components/main/CategoriesSection";
import ContinueReadingSection from "@/components/main/ContinueReadingSection";

const HomePage = async () => {
  return (
    <main className="flex flex-col w-full items-start text-center p-4 gap-4">
      <h2 className="self-center">
        &ldquo;Knowledge is power.&rdquo; - Francis Bacon
      </h2>
      <TrendingSection />
      <div className="flex flex-col md:flex-row gap-4">
        <ContinueReadingSection />
        <CategoriesSection />
      </div>
    </main>
  );
};

export default HomePage;
