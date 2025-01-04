import { CircleMinus, Lock, Shield, User2, Users } from "lucide-react";
import Feature from "../components/Feature";

function Home() {
  return (
    <section className="container mx-auto px-44 py-20">
      <div className="flex flex-col items-center justify-center space-y-7">
        <div className="flex items-center space-x-2 rounded-sm bg-[#F6F8FA] px-1 py-2 text-[#525866]">
          <CircleMinus className="rotate-45" />
          <span>User management and identification</span>
        </div>

        <div className="space-y-5">
          <div className="text-center text-7xl font-bold text-[#0d111b]">
            Next-Gen Identity Management.
          </div>
          <p className="text-center text-2xl font-light leading-normal">
            Providing a secure and interoperable platform for self-sovereign
            identities, diverse credentials storage and ethical data practices.
          </p>
        </div>

        <div className="flex items-center space-x-5">
          <div className="rounded-lg bg-[#E2E4E9] px-4 py-3 text-[#525866]">
            Contact Sales
          </div>
          <div className="rounded-lg bg-[#20232D] px-4 py-3 text-white">
            Create your account
          </div>
        </div>

        <div className="  py-2 ">
          <div className="grid gap-8 items-center md:grid-cols-4">
            <Feature
              icon={Lock}
              title="Authentication"
              description="User login/signup"
            />
            <Feature
              icon={User2}
              title="Profile Management"
              description="User profiles"
            />
            <Feature
              icon={Users}
              title="Organization & Team"
              description="Manage your teams"
            />
            <Feature
              icon={Shield}
              title="Session & Security"
              description="Manage sessions"
            />
          </div>
        </div>

        <div>
            <img src="Chrome.png" alt="chrome" />
        </div>
      </div>
    </section>
  );
}

export default Home;
