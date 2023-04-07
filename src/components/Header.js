import NavScrollExample from './Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src="https://services.jms.rocks/img/logo.png" alt="JTlogo" width={50} />
        </Link>
        <NavScrollExample />
      </div>
    </header>
  );
};

export default Header;
