import { useState, useEffect } from 'preact/hooks';
import "../styles/ProductPagination.css";

const ProductPagination = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const totalPages = Math.ceil(products.length / productsPerPage);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 justify-center items-center gap-5">
                {currentProducts.map((item, index) => (
                    <div key={index}
                        className="border rounded-xl p-5 flex flex-col gap-1 shadow-md shadow-gray-600">
                        <div className="flex flex-col items-end">
                            <span className="text-white bg-[#BCA2F2] rounded-full w-9 h-9 flex text-center justify-center items-center absolute">{item.id}</span>
                            <img
                                src={`/img/products/products-${item.img}.webp`}
                                alt={`Product ${item.title}`}
                                className="w-[200px] rounded-xl"
                                decoding="async"
                                loading="lazy" />
                        </div>
                        <div className="flex flex-col mt-3">
                            <h3 className="font-bold text-2xl">{item.title}</h3>
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
                            {item.stock ?
                                <a
                                    className="bg-yellow-300 w-32 h-10 rounded-lg flex justify-center items-center gap-2"
                                    href={`https://wa.me/5491124613382?text=Hola%20quiero%20comprar%20el%20producto%20${item.id}%20🛒`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="/img/wsp-logo.webp" alt="logo message." className="w-5" />
                                    <p className="text-xs">Comprar</p>
                                </a> :
                                <a className="bg-red-500 w-32 h-10 rounded-lg flex justify-center items-center gap-2">Sin stock</a>
                            }
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
