import "../styles/ProductPagination.css"
import { useState } from 'preact/hooks';

const ProductPagination = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Calcular el número total de páginas
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Calcular los productos a mostrar en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Manejar el cambio de página hacia adelante
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Manejar el cambio de página hacia atrás
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 justify-center items-center gap-5">
                {currentProducts.map((item, index) => (
                    <div key={index}
                        className="border rounded-xl p-5 flex flex-col gap-1 shadow-md shadow-gray-600">
                        <div className="flex flex-col items-end">
                            <span class="text-white bg-black rounded-full w-10 h-10 flex text-center justify-center items-center">{item.id}</span>

                            <img
                                src={`/img/products/products-${item.img}.webp`}
                                alt={`Product ${item.title}`}
                                className="w-60 h-60 rounded-xl"
                                decoding="async"
                                loading="lazy" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="font-bold">{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <p className="font-semibold">{`$ ${item.price}`}</p>
                        </div>
                        <div className="flex justify-start items-center">
                            <p className="text-blue-500 font-semibold"># Estado</p>
                            <img
                                className="w-auto"
                                src={`/img/star/star-${item.star}.png`}
                            />
                        </div>
                        <div className="flex justify-center items-center mt-2">
                            <a
                                className="bg-yellow-300 w-32 h-10 rounded-lg flex justify-center items-center gap-2"
                                href={`https://wa.me/5491124613382?text=Hola%20quiero%20comprar%20el%20producto%20${item.id}%20🛒`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src="/img/wsp-logo.webp" alt="logo message." class="w-5" />
                                <p className="text-xs">Comprar</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination mt-8 flex justify-center items-center">
                <button
                    onClick={prevPage}
                    className={`px-4 py-2 border rounded-xl ${currentPage === 1 ? 'bg-gray-200 text-black cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <button
                    onClick={nextPage}
                    className={`px-4 py-2 border rounded-xl ${currentPage === totalPages ? 'bg-gray-200 text-black cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default ProductPagination;
