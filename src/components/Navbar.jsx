import DarkMode from '../pages/DarkMode';
export default function Navbar() {
  return (
    <nav>
      <div className="powered">
        <a href="https://nextjs.org/blog/next-13" rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
          <h3>Powered By</h3>
        </a>
        <h3 style={{ paddingTop: '10px' }}>Nextjs 13</h3>
      </div>
      <div className="toggle-theme">
        <span>
          <DarkMode />
        </span>
      </div>
    </nav>
  );
}
