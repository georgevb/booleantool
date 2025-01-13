export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-5 bg-black">
      <div className="flex items-center space-x-2">
        <span className="text-white text-[19.2px] font-semibold">Boolean Tool</span>
      </div>
      <nav className="flex items-center space-x-10">
        <a href="#" className="text-[#36b39a] hover:text-[#36b39a] transition-colors font-normal text-[19.2px]">Boolean Tool</a>
        <a href="#" className="text-white hover:text-[#36b39a] transition-colors font-normal text-[19.2px]">Meer leads</a>
        <a href="#" className="text-white hover:text-[#36b39a] transition-colors font-normal text-[19.2px]">FAQ</a>
        <a href="#" className="text-white hover:text-[#36b39a] transition-colors font-normal text-[19.2px]">HL George</a>
      </nav>
    </header>
  );
}