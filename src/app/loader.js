import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-16 h-16 border-4 border-t-white border-white rounded-full animate-spin"></div>
        <h1 className="text-black text-3xl flex gap-3 items-center font-semibold ">
          <Loader2 className="animate-spin" /> Loading...
        </h1>
      </div>
    </div>
  );
};

export default Loader;
