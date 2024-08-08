import CategoriesSection from "@/components/CategoriesSection";
import ContinueReadingSection from "@/components/ContinueReadingSection";
import TrendingSection from "@/components/TrendingSection";
import connectDB from "@/config/database";

const HomePage = async () => {
  await connectDB();
  return (
    <main className="flex flex-col w-full items-start text-center p-4 gap-4">
      <h2 className="self-center">"Knowledge is power." - Francis Bacon</h2>
      <TrendingSection />
      <div className="flex gap-4">
        <ContinueReadingSection />
        <CategoriesSection />
      </div>
    </main>
  );
};

export default HomePage;
