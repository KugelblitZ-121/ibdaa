import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-[#000000] text-white font-sans w-full">
      <div className="sticky top-0 z-50 bg-[#dca64a] text-black text-center py-2 font-semibold shadow-md">
        رقم السجل التجاري: 1010960486
      </div>
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#dca64a] to-[#fce5c2] text-black text-center px-6">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold"
          >
            مؤسسة عصور الإبداع للدعاية والإعلان
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg max-w-xl mx-auto"
          >
            نقدم حلول إبداعية تنطق بصوتك وتلامس جمهورك
          </motion.p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-[#fce5c2] text-black text-center">
        <h2 className="text-4xl font-bold mb-6">ليش عصور الإبداع ؟</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-800">
          لاننا مو مجرد مؤسسة دعاية وإعلان وتصوير… إحنا فريق يعشق الشغل الإبداعي، ونسعى دايم نخلي كل مشروع نسويه يترك
          بصمة. نشتغل بشغف، ونحب التفاصيل، ونفهم إن الإعلان والتصوير مو بس صور وكلمات، هو إحساس يوصل للناس. نبدأ معك من
          أول فكرة، ونمشي معك خطوة بخطوة، لين نشوف فكرتك صارت واقع يلفت النظر ويشد الانتباه. سواء كنت صاحب مشروع صغير أو
          شركة كبيرة، بنكون دايمًا شركاء نجاحك، ونحرص إننا نقدم لك حلول تناسبك وتتكلم بصوتك. إحنا في عصور الإبداع… نشتغل
          بإحساس، ونبدع بفخر!
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[#eecb8a] text-black text-center">
        <h2 className="text-3xl font-bold mb-10">إيش نقدم؟</h2>
        <div className="grid gap-8 md:grid-cols-3 w-full">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-black">
            <h3 className="text-xl font-semibold mb-2">Reel تصوير</h3>
            <p>ركزنا على الجودة العالية باسلوب سريع وغير ممل</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-black">
            <h3 className="text-xl font-semibold mb-2">صناعة المحتوى</h3>
            <p>نصيد الترندات ونبدع فيها وكل شغلنا خارج الصندوق</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition text-black">
            <h3 className="text-xl font-semibold mb-2">Video تصوير</h3>
            <p>حرصنا على اظهار اعلى جودة ممكنه ونوعنا بالاساليب</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-[#dca64a] text-black text-center">
        <h2 className="text-3xl font-bold mb-6">كيف توصل لنا؟</h2>
        <p className="text-lg">smm4marketing@outlook.com : الايميل 📧</p>
        <p className="text-lg mt-2">+966 55 093 9860 : رقم التواصل 📞</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] text-[#fce5c2] py-6 text-center">
        <p>&copy; {new Date().getFullYear()} مؤسسة عصور الإبداع للدعاية والإعلان . جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

export default App;
