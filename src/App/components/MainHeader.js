import { Link } from 'react-router-dom';

const MainHeader = function () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
