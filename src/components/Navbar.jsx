import DarkMode from '../pages/DarkMode';
export default function Navbar() {
  return (
    <nav className="flex items-center h-16 justify-between border-b-2">
      <div className=" px-4 h-full flex items-center">
        <a href="https://nextjs.org/blog/next-13" rel="noreferrer" target="_blank">
          <h3 className="text-sm">Powered By</h3>
          <h1 className="text-xl font-serif font-bold ">Nextjs 13</h1>
        </a>
      </div>
      <div className="flex items-center text-3xl pr-10 p-2 h-full cursor-pointer">
        <DarkMode />
      </div>
    </nav>
  );
}
