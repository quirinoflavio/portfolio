import HomePage from "@/app/pages/home/page";
import Footer from "@/app/pages/shared/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <Header /> */}
      <HomePage />
      <Footer />
    </div>
  );
}
