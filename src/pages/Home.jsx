import { CircleMinus } from "lucide-react";

function Home() {
  return (
    <section className="container mx-auto px-32 py-20 ">
      <div className="flex flex-col items-center space-y-7 justify-center">
        <div className="rounded-sm bg-[#F6F8FA] px-1 py-2 flex items-center space-x-2 text-[#525866]">
          <CircleMinus className="rotate-45"/>
          <span>User management and identification</span>
        </div>

        <div>
            <div className="text-7xl font-bold text-[#0d111b] text-center">Next-Gen Identity Management.</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
