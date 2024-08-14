import { useEffect } from 'preact/hooks';

export const Navbar = () => {
    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        const handleClick = () => {
            if (menu) {
                menu.classList.toggle('hidden');
            }
        };

        if (menuToggle) {
            menuToggle.addEventListener('click', handleClick);
        }

        return () => {
            if (menuToggle) {
                menuToggle.removeEventListener('click', handleClick);
            }
        };
    }, []); // [] significa que solo se ejecuta una vez al montar el componente

    return (
        <header className="flex justify-center items-center ">
            <nav
                className="flex flex-col justify-center items-center mt-3 "
            >
                <p className="font-bold text-4xl md:hidden">ATETA</p>
                <div className="md:hidden flex items-center">
                    <button id="menu-toggle" className="text-gray-500 focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div
                    id="menu"
                    className="hidden md:flex md:justify-around md:items-center md:gap-20 lg:gap-36 absolute mt-10 max-md:mt-[350px] z-50 max-md:bg-slate-400 max-md:w-52 max-md:h-52 max-md:items-center max-md:flex-col max-md:justify-center max-md:p-5 max-md:text-center max-md:rounded-lg max-md:text-white"
                >
                    <div className="hidden md:flex md:justify-center md:items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="3em"
                            height="3em"
                            viewBox="0 0 24 24">
                            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8" />
                        </svg>
                        <p className="font-bold text-3xl">ATETA</p>
                    </div>
                    <a
                        href="/"
                        className="block md:inline-block text-center md:text-left py-2 md:py-0 max-md:border-b max-md:hover:text-purple-400"
                    >Home</a
                    >
                    <a
                        href="/about"
                        className="block md:inline-block text-center md:text-left py-2 md:py-0 max-md:border-b max-md:hover:text-purple-400 "
                    >About</a
                    >
                    <a
                        href="/new"
                        className="block md:inline-block text-center md:text-left py-2 md:py-0 max-md:border-b max-md:hover:text-purple-400 "
                    >Nuevo</a
                    >
                    <a
                        href="/products"
                        className="block md:inline-block bg-[#BCA2F2] text-black rounded-lg py-2 px-4 mt-4 md:mt-0 md:ml-4"
                    >Ver productos</a
                    >
                </div>
            </nav>
        </header>
    );
};
