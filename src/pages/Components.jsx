/* eslint-disable react/prop-types */

import { Dot, Loader } from "lucide-react";

// Button component
const Button = ({ children, className, variant, ...props }) => {
  const baseStyles =
    "inline-flex px-2 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant || "default"]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Input component
const Input = ({ className, ...props }) => {
  return (
    <input
      className={`border-input ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

function Components() {
  return (
    <div className="container mx-auto grid gap-11 px-44 py-20 md:grid-cols-2">
      <div className="flex max-w-xl flex-col justify-center">
        <div className="space-y-8">
          <div className="inline-flex h-8 items-center rounded-full border px-4 text-sm">
            <Dot className="h-11 w-11" />
            Easy to implement
          </div>

          <div className="flex items-center rounded-lg bg-[#F6F8FA] px-1 py-2 text-[#525866]">
            <Dot className="h-11 w-11" />
            <span>Easy to implement</span>
          </div>
          <h1 className="text-5xl tracking-tight">
            Rapidly embed pixel-perfect designs
          </h1>
          <p className="text-muted-foreground text-xl">
            Quickly implement robust user management features by integrating our
            flexible components:{" "}
            <code className="text-purple-500">&lt;SignIn/&gt;</code>,{" "}
            <code className="text-purple-500">&lt;SignUp/&gt;</code>,{" "}
            <code className="text-purple-500">&lt;UserButton/&gt;</code>, and{" "}
            <code className="text-purple-500">&lt;UserProfile/&gt;</code>.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 rounded-xl bg-slate-50 p-8">
          <div className="relative right-11 items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2">
              <span className="text-muted-foreground text-sm">
                Secured with
              </span>
              <span className="font-medium">entity</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2 text-center">
              <div className="flex items-center justify-center">
                <img src="/logo.png" alt="logo" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h2>
              <p className="text-muted-foreground text-sm">
                Enter your details to login.
              </p>
            </div>
            <div className="flex items-center space-x-5">
              <Button variant="outline" className="h-12">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4Z"
                    fill="currentColor"
                  />
                  <path d="M10 16.5L16 12L10 7.5V16.5Z" fill="currentColor" />
                </svg>
                Sign in with Apple
              </Button>
              <Button variant="outline" className="h-12">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="text-muted-foreground bg-slate-50 px-2">
                  OR
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email Address
                </label>
                <Input
                  id="email"
                  placeholder="username@mail.com"
                  type="email"
                  className="h-12"
                />
              </div>
              <Button className="h-12 w-full bg-black hover:bg-black/90">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Components;
