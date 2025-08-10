import logo from '../../image/icons/logo.png'
import search from "../../image/icons/search-icon.png";
import cart from "../../image/icons/cart.png";
function Header() {
  return (
    <header>
      <nav class="header-nav-container">
        <ul>
          <li>
            <a href="#">
              <img src={logo} alt="apple logo" />
            </a>
          </li>
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iphone</a>
          </li>
          <li>
            <a href="#">ipad</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">tv</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="">
              <img src={search} alt="search icon" />
            </a>
          </li>
          <li>
            <a href="">
              <img src={cart} alt="cart icon" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
