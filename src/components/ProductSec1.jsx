import React, { useState, useContext } from 'react';
import Watch from '../components/Watch.json';
import { cartContext } from '../CartManaget/CartProvider';
import { FaSearch } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa6';
import image from '../Asset/side.jpg'

function ProductSec1() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [items, setItems] = useState(Watch);
    const [hide, setHide] = useState(true);
    const [searcher, setSearcher] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all'); // New state to track selected category

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const filteredWatches = items.filter((item) =>
        item.name.toLowerCase().includes(searcher.toLowerCase())
    );

    const filterItems = (catItems) => {
        const updateItems = Watch.filter((curItems) => curItems.category === catItems);
        setItems(updateItems);
        setSelectedCategory(catItems); // Set selected category when an item is clicked
    };

    const { addToCart } = useContext(cartContext);
    const openPopup = (product) => {
        setSelectedProduct(product);
    };

    const closePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div className='grid grid-cols-12 gap-8 mt-10 py-10 lg:px-20 md:px-10 font-mont h-[140vh] px-4 bg-white'>
            <div className='md:col-span-4 shadow col-span-12 py-4 pl-4 md:pr-10 bg-white'>
                <div>
                    <h1 className='text-xl font-bold'>Search Products</h1>
                </div>
                <div className='flex items-center mt-4 w-full'>
                    <form className='flex items-center w-full' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search watch e.g florence'
                            className='focus:outline-none rounded py-3 w-full px-8 bg-[#f0f0f0] border border-primary'
                            value={searcher}
                            onChange={(e) => setSearcher(e.target.value)}
                        />
                        <button className='py-4 px-4 rounded border border-primary'>
                            <FaSearch />
                        </button>
                    </form>
                </div>
                <div className='flex items-center justify-between w-full font-bold mt-4'>
                    <span>Shop By Category</span>
                    <span className='cursor-pointer' onClick={() => setHide(!hide)}>
                        <FaAngleDown />
                    </span>
                </div>
                {hide && (
                    <div className='mt-4 flex flex-col gap-2 border-b border-primary'>
                        <div className='flex items-center cursor-pointer gap-4 font-semibold' onClick={() => { setItems(Watch); setSelectedCategory('all'); }}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'all'}
                                onChange={() => {}}
                            />
                            <span>All</span>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4 font-semibold' onClick={() => filterItems('mens')}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'mens'}
                                onChange={() => {}}
                            />
                            <span>Mens Collection</span>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4 font-semibold' onClick={() => filterItems('women')}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'women'}
                                onChange={() => {}}
                            />
                            <span>Womens Collection</span>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4 font-semibold' onClick={() => filterItems('kids')}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'kids'}
                                onChange={() => {}}
                            />
                            <span>Kids Collection</span>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4 font-semibold' onClick={() => filterItems('couple')}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'couple'}
                                onChange={() => {}}
                            />
                            <span>Best of couples</span>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4 font-semibold' onClick={() => filterItems('leather')}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'leather'}
                                onChange={() => {}}
                            />
                            <span>Leather strap</span>
                        </div>
                        <div className='flex items-center cursor-pointer gap-4 mb-6 font-semibold' onClick={() => filterItems('smartwatch')}>
                            <input
                                type='radio'
                                checked={selectedCategory === 'smartwatch'}
                                onChange={() => {}}
                            />
                            <span>Smart watch</span>
                        </div>
                    </div>
                )}
                <div>
                  <img src={image} alt=""  className='object-cover w-full mt-3 '/>
                </div>
            </div>
            <div className='md:col-span-8 col-span-12 overflow-y-scroll'>
                <div className='md:grid-cols-2 lg:grid-cols-3 grid grid-cols-1 gap-6'>
                    {filteredWatches.map((item, key) => (
                        <div
                            key={key}
                            className='bg-white shadow py-6 px-4 flex justify-center items-center flex-col rounded relative overflow-hidden group'
                        >
                            <div>
                                <img src={item.image} alt='' className='h-44 object-cover object-top' />
                            </div>
                            <div className='text-center flex flex-col gap-2 py-3'>
                                <p>{item.rating}</p>
                                <p className='font-semibold'>{item.name}</p>
                                <p className='font-semibold'>${item.price}</p>
                            </div>
                            <div className='py-1 px-2 bottom-0 w-full left-0 flex justify-center items-center absolute translate-y-full group-hover:translate-y-0 duration-500 transform ease-in transition-transform'>
                                <button className='py-3 px-8 rounded bg-tertiary text-white' onClick={() => openPopup(item)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* POPUP */}
                {selectedProduct && (
                    <div className='bg-tertiary bg-opacity-25 backdrop-blur-sm fixed inset-0 w-full h-screen flex justify-center items-center z-50'>
                        <div className='bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full'>
                            <button onClick={closePopup} className='absolute top-3 right-3 text-black'>
                                ✖️
                            </button>

                            {/* Product Details */}
                            <div className='text-center'>
                                <img src={selectedProduct.image} alt={selectedProduct.name} className='h-56 object-cover mx-auto' />
                                <h2 className='text-2xl font-bold py-4'>{selectedProduct.name}</h2>
                                <p className='text-lg'>Rating: {selectedProduct.rating}</p>
                                <p className='text-lg'>Price: ${selectedProduct.price}</p>
                                <p className='py-4'>{selectedProduct.description}</p>
                                <div className='flex gap-4 justify-center items-center text-white'>
                                    <button className='py-3 px-8 rounded-md bg-tertiary' onClick={() => addToCart(selectedProduct)}>
                                        Add To Cart
                                    </button>
                                    <button className='py-3 px-8 rounded-md bg-tertiary'>Buy Now!!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductSec1;
