const Navbar = () => {
    return (
        <nav className="fixed w-screen bg-[#11172a] p-5 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-white text-2xl font-semibold">Ahmad Fathur Rahman</h1>
                <ul className="flex flex-row space-x-10">
                    <li className="text-[#dfe5ec] text-md hover:text-white">Home</li>
                    <li className="text-[#dfe5ec] text-md hover:text-white">About</li>
                    <li className="text-[#dfe5ec] text-md hover:text-white">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;