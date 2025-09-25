import logo from './Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo" width="100" height="50" />
      {/* Other header content */}
    </header>
  );
}

export default Header;