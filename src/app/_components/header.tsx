const Header = () => {
  return (
    <header className="col-span-full relative h-[64px] flex justify-between items-center border-[1px]">
      <a className="text-[#cc4230]">&lt;zero8.dev&#47;&gt;</a>
      <ul className="bullet-none flex justify-center items-center space-x-8">
        <li className="hover:cursor-pointer">About</li>
        <li className="hover:cursor-pointer">Contact Us</li>
        <li className="hover:cursor-pointer">Work</li>
      </ul>
    </header>
  );
};

export default Header;
