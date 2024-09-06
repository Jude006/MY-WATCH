import React, { useState, useContext } from 'react';
import Logo from '../Asset/myLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { cartContext } from '../CartManaget/CartProvider';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const [searchQuery, setSearchQuery] = useState(''); // State for search input
    const { cart } = useContext(cartContext);
    const updateCount = cart.reduce((total, item) => total + item.quantity, 0);
    const navigate = useNavigate(); // For navigation

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to the product page with the search query
            navigate(`/Product?search=${searchQuery}`);
            setSearchQuery(''); // Clear the search input after submission
        }
    };

    return (
        <nav className='bg-primary sticky top-0 left-0 z-50 font-mont text-white md:py-2 py-4'>
            <div className='container py-2 flex justify-between items-center w-full'>
                <Link to='/'>
                    <div>
                        <img src={Logo} alt="" className='w-14 cursor-pointer object-cover md:ml-0 ml-4'/>
                    </div>
                </Link>
                <div>
                    <h1>Visitors Count: <span className='py-1 px-3 rounded bg-tertiary'>10</span></h1>
                </div>
                <div className='md:flex hidden'>
                    <ul className='flex items-center gap-[40px]'>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/'><li>Home</li></Link>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/About'><li>About</li></Link>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/Product'><li>Product</li></Link>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/Gallery'><li>Gallery</li></Link>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/Contact'><li>Contact Us</li></Link>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/Cart'><li className='flex'><FaCartShopping /> <sup>{updateCount}</sup></li></Link>
                    </ul>
                </div>
                {/* Search bar */}
                <div className='lg:flex items-center hidden'>
                    <form onSubmit={handleSearch} className='flex'>
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search' 
                            className='py-2 rounded-l font-semibold px-6 bg-white text-black focus:outline-none'
                        />
                        <button type="submit" className='py-3 text-lg rounded-r px-3 bg-tertiary text-white'>
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className='md:hidden flex' onClick={() => setShowMenu(!showMenu)}>
                    <span>
                        <FaBars size={30} className='mr-4'/>
                    </span>
                </div>
            </div>
            {showMenu && (
                <div className='border-t sticky z-50'>
                    <ul className='flex flex-col p-6 gap-[40px]'>
                        <Link onClick={() => setShowMenu(false)} to='/'><li>Home</li></Link>
                        <Link onClick={() => setShowMenu(false)} to='/About'><li>About</li></Link>
                        <Link onClick={() => setShowMenu(false)} to='/Product'><li>Product</li></Link>
                        <Link onClick={() => setShowMenu(false)} to='/Gallery'><li>Gallery</li></Link>
                        <Link onClick={() => setShowMenu(false)} to='/Contact'><li>Contact Us</li></Link>
                        <Link className='hover:text-tertiary duration-300 ease-out' to='/Cart'><li className='flex'><FaCartShopping /> <sup>{updateCount}</sup></li></Link>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
