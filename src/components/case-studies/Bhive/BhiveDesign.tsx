import { useState } from "react";
import { Heart } from "lucide-react";

const BhiveDesign = () => {
  const [open, setOpen] = useState(false);

  return (
    
    <>
   <section className="relative px-6 py-12 bg-card">
    <div className="max-w-4xl mx-auto">
        {/* Card */}
        <div 
            className="bg-white rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
            onClick={() => setOpen(true)}
        >
            <div className="w-full h-auto overflow-hidden">
                <img 
                src="/dektoppage.png" 
                alt="Bhive Website Redesign Preview" 
                className="w-full h-full object-cover rounded-t-2xl transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              <p className="text-center text-xs text-gray-500 mt-2">
              Click the card to see full page
              </p>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">Website Redesign</h3>
                <p className="text-muted-foreground text-sm">
                A conceptual redesign focusing on app-first user journeys.
                </p>
            </div>
        </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-3/4 lg:w-2/3 h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Full Redesign</h2>
              <button 
                className="text-gray-500 hover:text-gray-800" 
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <img 
                src="/landingBhive.png" 
                alt="Full Page Redesign" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
</section>
    </>
  );
};

export default BhiveDesign;
