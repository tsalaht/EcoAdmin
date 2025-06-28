import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';

const categories = [
  'Electronics',
  'Fashion',
  'Home',
  'Furniture',
  'Sports',
  'Books',
  'Beauty',
  'Toys',
  'Automotive',
  'Health'
];

interface ProductFormData {
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  stock: string;
  specifications: { [key: string]: string };
}

const AddProduct: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    category: '',
    price: '',
    description: '',
    image: '',
    stock: '',
    specifications: {}
  });
  const [specKey, setSpecKey] = useState('');
  const [specValue, setSpecValue] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const addSpecification = () => {
    if (specKey.trim() && specValue.trim()) {
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [specKey.trim()]: specValue.trim()
        }
      }));
      setSpecKey('');
      setSpecValue('');
    }
  };

  const removeSpecification = (key: string) => {
    setFormData(prev => {
      const newSpecs = { ...prev.specifications };
      delete newSpecs[key];
      return {
        ...prev,
        specifications: newSpecs
      };
    });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    if (!formData.price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(parseFloat(formData.price))) {
      newErrors.price = 'Price must be a valid number';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.image.trim()) {
      newErrors.image = 'Image URL is required';
    }
    if (!formData.stock.trim()) {
      newErrors.stock = 'Stock quantity is required';
    } else if (isNaN(parseInt(formData.stock)) || parseInt(formData.stock) < 0) {
      newErrors.stock = 'Stock must be a valid positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      // For now, we'll just navigate back to products page
      console.log('New product data:', formData);
      alert('Product added successfully!');
      navigate('/products');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link 
          to="/products" 
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Add New Product</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Information</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent transition-colors ${
                      errors.name 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                    placeholder="Enter product name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent transition-colors ${
                      errors.category 
                        ? 'border-red-500 dark:border-red-400' 
                        : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Price *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        className={`w-full pl-8 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent transition-colors ${
                          errors.price 
                            ? 'border-red-500 dark:border-red-400' 
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                        placeholder="0.00"
                      />
                    </div>
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                  </div>

                  <div>
                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Stock Quantity *
                    </label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      min="0"
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent transition-colors ${
                        errors.stock 
                          ? 'border-red-500 dark:border-red-400' 
                          : 'border-gray-300 dark:border-gray-600'
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                      placeholder="0"
                    />
                    {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Description</h3>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Product Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent transition-colors ${
                    errors.description 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="Enter detailed product description..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>
            </div>
          </div>

          {/* Image and Specifications */}
          <div className="space-y-6">
            {/* Image */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Product Image</h3>
              
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Image URL *
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[color:var(--theme-500)] focus:border-transparent transition-colors ${
                    errors.image 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                  placeholder="https://example.com/image.jpg"
                />
                {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
              </div>

              {formData.image && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preview:</p>
                  <img
                    src={formData.image}
                    alt="Product preview"
                    className="w-full h-48 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Specifications</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={specKey}
                    onChange={(e) => setSpecKey(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Specification name"
                  />
                  <input
                    type="text"
                    value={specValue}
                    onChange={(e) => setSpecValue(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Specification value"
                  />
                </div>
                <button
                  type="button"
                  onClick={addSpecification}
                  className="w-full px-4 py-2 bg-[color:var(--theme-600)] text-white rounded-lg hover:bg-[color:var(--theme-700)] transition-colors"
                >
                  Add Specification
                </button>

                {Object.keys(formData.specifications).length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Added Specifications:</p>
                    {Object.entries(formData.specifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm text-gray-900 dark:text-white">
                          <strong>{key}:</strong> {value}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeSpecification(key)}
                          className="p-1 text-red-500 hover:text-red-700 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Link
            to="/products"
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="px-6 py-2 bg-[color:var(--theme-600)] text-white rounded-lg hover:bg-[color:var(--theme-700)] transition-colors"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct; 