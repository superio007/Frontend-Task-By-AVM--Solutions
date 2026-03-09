const Navbar = () => {
  return (
    <>
      <header className="h-14 flex items-center justify-between px-6 z-20 shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex items-center text-brand text-2xl font-bold tracking-tight">
            <svg
              className="w-8 h-8 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
            </svg>
            DigiSpace
          </div>
        </div>
        <div className="flex items-center">
          <img
            alt="User Profile"
            className="w-9 h-9 rounded-full border-2 border-brand/20 p-0.5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKD8zXkHCbItyNgxWum2aOtwYSrSbeXKIw4Mcl_BgfVvqa5XOeGivyRP7c2cmoYj7A7UvElqIttRZdtkcXiZXH6E8faruOFktEKN5RTdo0pNor5GD_DoQYRQf4LhftudqaWFmI1SSZ3i04o9kkdATt7z5mHzxeY5uv58jO2iWrHPGB7PXVtj4mia-TvpIo9mHUdqSoLl0CRefCpK6-LtKuhk0tb3m_JHEVr9QB9tlOC1fNlYu_SfKXNKl6zMYHYltC3fjBRkucDpc"
          />
        </div>
      </header>
    </>
  );
};
export default Navbar;
