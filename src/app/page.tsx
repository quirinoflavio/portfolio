import HomePage from "@/app/pages/home/page";
import Footer from "@/app/pages/shared/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen p-[500-20-0] gap-16 sm:p-[50_20_0] font-[family-name:var(--font-geist-sans)]">
      <HomePage />
      <Footer />
    </div>
  );
}
