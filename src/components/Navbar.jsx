function Navbar() {
  return (
    <nav className="sticky top-0 py-3">
      <div className="container mx-auto flex items-center justify-between px-32">
        <a href="" className="font-bold">entityOS</a>

        <div>
          <img src="/logo.png" alt="logo" />
        </div>

        <a href="" className="rounded-lg bg-[#20232D] px-4 py-3 text-white">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
