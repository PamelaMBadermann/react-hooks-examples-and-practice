import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img
          src="https://www.growdev.com.br/assets/images/logo-dark.png"
          alt="Logo Growdev"
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
