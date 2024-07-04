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
        <header className="flex justify-center items-center">
            <nav
                className="flex flex-col justify-center items-center mt-12"
            >
                <p className="font-bold text-4xl">ATETA</p>
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
                    className="hidden"
                >
                    <a
                        href="/"
                        className="block md:inline-block text-center md:text-left py-2 md:py-0"
                    >Home</a
                    >
                    <a
                        href="/about"
                        className="block md:inline-block text-center md:text-left py-2 md:py-0"
                    >About</a
                    >
                    <a
                        href="/new"
                        className="block md:inline-block text-center md:text-left py-2 md:py-0"
                    >Nuevo</a
                    >
                    <a
                        href="/products"
                        className="block md:inline-block bg-[#BCA2F2] text-white rounded-lg py-2 px-4 mt-4 md:mt-0 md:ml-4"
                    >Ver productos</a
                    >
                </div>
            </nav>
        </header>
    );
};
