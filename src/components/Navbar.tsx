import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <Image src={"https://svgshare.com/i/sA3.svg"} width={50} height={50} />
          <h3>Ethereum Ecuador</h3>
        </div>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link href="/" className="nav-link">
              Conócenos
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              Calendario
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
              Tickets
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        nav {
          background-color: white;
          color: #333;
          height: 50px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1000px;
        }
        .logo-container {
          display: flex;
          align-items: center;
        }
        .menu-toggle {
          display: none;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          background: none;
          color: #333;
          cursor: pointer;
        }
        .menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .menu li {
          margin-right: 20px;
        }
        .nav-link {
          color: #333;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nav-link:hover {
          text-decoration: underline;
        }
        @media (max-width: 500px) {
          .menu-toggle {
            display: block;
          }
          .menu {
            display: none;
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
            background-color: white;
            border: 1px solid #333;
            padding: 10px;
            flex-direction: column;
            align-items: center;
          }
          .menu.open {
            display: flex;
          }
          .menu li {
            margin: 10px 0;
          }
          .nav-container {
            position: relative;
          }
        }
      `}</style>

    </nav>
  )
}

export default Nav;
