function Navbar() {
  return (
    <nav className=" top-0 py-2">
      <div className="container mx-auto flex items-center justify-between px-80">
        <a href="" className="font-bold">entityOS</a>

        <div>
          <img src="/logo.svg" alt="logo" />
        </div>

        <a href="" className="rounded-lg bg-[#20232D] px-3 py-2 text-white">
          Sign up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
