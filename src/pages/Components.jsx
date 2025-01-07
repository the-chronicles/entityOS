import { Dot, Mail } from "lucide-react";

function Components() {
  return (
    <div className="container mx-auto box-border grid grid-cols-2 gap-11 px-44 py-20">
      <div className="flex max-w-xl flex-col justify-center">
        <div className="space-y-4">
          <div className="inline-flex h-8 items-center rounded-lg border bg-[#F6F8FA] px-4 text-sm text-[#525866]">
            <Dot className="h-11 w-11" />
            <span>Easy to implement</span>
          </div>

          <h1 className="text-5xl tracking-tight">
            Rapidly embed pixel-perfect designs
          </h1>
          <p className="text-muted-foreground text-xl">
            Quickly implement robust user management features by integrating our
            flexible components:{" "}
            <code className="text-purple-500">&lt;SignIn/&gt;</code>,
            <code className="text-purple-500">&lt;SignUp/&gt;</code>,{" "}
            <code className="text-purple-500">&lt;UserButton/&gt;</code>, and{" "}
            <code className="text-purple-500">&lt;UserProfile/&gt;</code>.
          </p>
        </div>
      </div>


      <div className="rounded-xl bg-[#f6f8fa] p-5">
      <div className="absolute  right-[40%] ">
        <div className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-2">
          <span className="text-muted-foreground text-sm">Secured with</span>
          <span><img src="/logo.svg" alt="logo" className="w-5 h-5" /></span>
          <span className="font-medium">entity</span>
        </div>
      </div>
        <div className="space-y-8 rounded-xl border bg-white p-5">
          <div className="flex flex-col items-center justify-center space-y-5">
            <img src="/logo.svg" alt="logo" />
            <div className="space-y-1 text-center">
              <div className="text-3xl font-medium">Login to your account</div>
              <div>Enter your details to login.</div>
            </div>

            <div className="flex items-center space-x-5">
              <div className="flex items-center gap-2 rounded-xl border border-[#E2E4E9] px-3 py-3 text-[#0a0d14]">
                <img src="ap.svg" alt="apple" className="h-7 w-7" />
                <span>Sign in with Apple</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#E2E4E9] px-4 py-3 text-[#0a0d14]">
                <img src="gg.svg" alt="apple" className="h-7 w-7" />
                <span>Sign in with Google</span>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">OR</span>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <div className="relative flex items-center rounded-lg border border-gray-300 bg-white">
              <span className="absolute pl-3">
                <Mail className="text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                className="block w-full rounded-xl border-0 py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                placeholder="username@mail.com"
              />
            </div>
          </div>

          <div className="rounded-lg bg-[#20232D] px-4 py-3 text-center text-white">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Components;
