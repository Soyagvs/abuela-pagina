/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

const ButtonFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="mt-10">
      <form action="" className="flex flex-wrap gap-4 justify-center items-center">
        <div className="flex items-center">
          <input
            type="radio"
            name="category"
            id="all"
            value="All"
            checked={selectedCategory === 'All'}
            onChange={() => handleChange('All')}
          />
          <label htmlFor="all" className="ml-1">All</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="category"
            id="gigot"
            value="Gigot"
            checked={selectedCategory === 'Gigot'}
            onChange={() => handleChange('Gigot')}
          />
          <label htmlFor="gigot" className="ml-1">Gigot</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="category"
            id="violetta"
            value="Violetta"
            checked={selectedCategory === 'Violetta'}
            onChange={() => handleChange('Violetta')}
          />
          <label htmlFor="violetta" className="ml-1">Violetta</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="category"
            id="avon"
            value="Avon"
            checked={selectedCategory === 'Avon'}
            onChange={() => handleChange('Avon')}
          />
          <label htmlFor="avon" className="ml-1">Avon</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            name="category"
            id="amodil"
            value="Amodil"
            checked={selectedCategory === 'Amodil'}
            onChange={() => handleChange('Amodil')}
          />
          <label htmlFor="amodil" className="ml-1">Amodil</label>
        </div>
      </form>
    </div>
  );
};

export default ButtonFilter;
