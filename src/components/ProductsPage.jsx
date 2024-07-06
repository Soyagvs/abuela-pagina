/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import ProductPagination from '../components/ProductPagination';
import ButtonFilter from '../components/ButtonFilter';
import productsData from '../db/products.json';

const ProductsPage = () => {
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    const handleFilterChange = (selectedCategory) => {
        setFilteredProducts(
            selectedCategory === 'All'
                ? productsData
                : productsData.filter(item => item.title.toUpperCase() === selectedCategory.toUpperCase())
        );
    };

    return (
        <div className="flex justify-center items-center mb-20 mt-10">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#BCA2F2] text-2xl">Mis productos</h2>
                <ButtonFilter onFilterChange={handleFilterChange} />
                <ProductPagination products={filteredProducts} />
            </div>
        </div>
    );
};

export default ProductsPage;
