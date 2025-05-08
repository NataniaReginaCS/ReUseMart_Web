import { useEffect, useState } from 'react';
import logo from '../assets/images/LOGO.png';
import Freiren from '../assets/images/Frieren.jpg';
import noprofile from '../assets/images/noprofile.jpg';

const Header = () => {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
    }, []);

    // Roles that should NOT see nav options or search
    const isPrivileged = role === 'Admin' || role === 'Organisasi';

    return (
        <header>
            <div className="w-screen bg-[#1F510F] text-white flex  items-center h-20 px-8">
                {/* Logo (always visible) */}
                <div className="flex items-center w-24 h-24">
                    <img src={logo} alt="Logo" />
                </div>

                {!isPrivileged && (
                    <>
                        <div className="flex items-center font-semibold space-x-4 h-full ml-6">
                            <a
                                className="hover:bg-white hover:text-black h-full px-6 flex items-center justify-center"
                                href="/"
                            >
                                Home
                            </a>
                            <a
                                className="hover:bg-white hover:text-black h-full px-6 flex items-center justify-center"
                                href="/shop"
                            >
                                Shop
                            </a>
                            <a
                                className="hover:bg-white hover:text-black h-full px-6 flex items-center justify-center"
                                href="#"
                            >
                                Merch
                            </a>
                            <a
                                className="hover:bg-white hover:text-black h-full px-6 flex items-center justify-center"
                                href="/about"
                            >
                                About
                            </a>
                        </div>
                        <div className="flex items-center max-w-md w-full ml-50">
                            <div className="w-2/3 bg-white text-black rounded-l">
                                <input
                                    type="text"
                                    className="w-full h-10 px-4 focus:outline-none"
                                    placeholder="Search..."
                                />
                            </div>
                            <button className="bg-[#F5CB58] text-black font-semibold px-4 h-10 rounded-r">
                                Search
                            </button>
                        </div>
                    </>
                )}



                {/* Right Section (Cart + Profile OR Login/Register) */}
                <div className="flex items-center gap-4 font-semibold ml-auto">
                    {role ? (
                        <>

                            {/* Profile picture based on role */}
                            {role === 'Admin' && (
                                <a
                                    href="/profile-organisasi"
                                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                                >
                                    <img src={noprofile} alt="Profile" className="w-full h-full object-cover" />
                                </a>
                            )}
                            {role === 'Organisasi' && (
                                <a
                                    href="/profile-organisasi"
                                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                                >
                                    <img src={Freiren} alt="Profile" className="w-full h-full object-cover" />
                                </a>
                            )} {role === 'Pembeli' && (
                                <>
                                    <a href="/cart" className="bg-gray-500 py-2 px-4 rounded-md">
                                        Cart
                                    </a>

                                    <a
                                        href="/profile"
                                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-white"
                                    >
                                        <img src={Freiren} alt="Profile" className="w-full h-full object-cover" />
                                    </a>
                                </>
                            )}
                        </>
                    ) : (
                        <a href="/login" className="py-2 px-4 rounded-md hover:underline">
                            Login / Register
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
