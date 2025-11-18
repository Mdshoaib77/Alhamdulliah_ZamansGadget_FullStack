import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState('specs');

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image?.[0] || '');
      setSelectedVariant(null);
      setSelectedColor('');
    }
  }, [productId, products]);

  const notifyError = (msg) => {
    toast.error(msg, { position: 'top-right', autoClose: 2500, theme: 'colored' });
  };

  const notifySuccess = (msg) => {
    toast.success(msg, { position: 'top-right', autoClose: 1500, theme: 'colored' });
  };

  const hasVariants = productData?.variants && productData.variants.length > 0;

  const handleAddToCart = () => {
    if (productData.outOfStock) {
      notifyError('Sorry, this product is OUT OF STOCK');
      return;
    }
    if (hasVariants) {
      if (!selectedVariant) {
        notifyError('Select Product Variant');
        return;
      }
      if (!selectedColor) {
        notifyError('Select Product Color');
        return;
      }
    }

    const variantInfo = hasVariants
      ? {
          variant: selectedVariant.variant,
          color: selectedColor,
          price: selectedVariant.offerPrice || selectedVariant.regularPrice,
        }
      : { variant: 'default', color: '', price: productData.price };

    addToCart(productData._id, variantInfo);
    notifySuccess('Added to cart!');
  };

  const handleBuyNow = () => {
    if (productData.outOfStock) {
      notifyError('Sorry, this product is OUT OF STOCK');
      return;
    }
    if (hasVariants) {
      if (!selectedVariant) {
        notifyError('Select Product Variant');
        return;
      }
      if (!selectedColor) {
        notifyError('Select Product Color');
        return;
      }
    }

    const variantInfo = hasVariants
      ? {
          variant: selectedVariant.variant,
          color: selectedColor,
          price: selectedVariant.offerPrice || selectedVariant.regularPrice,
        }
      : { variant: 'default', color: '', price: productData.price };

    addToCart(productData._id, variantInfo);
    navigate('/place-order');
  };

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
      <ToastContainer />

      <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
        {/* Main Image */}
        <div className="relative flex-1 min-w-0 sm:w-full">
          <img
            src={image}
            alt="Main product"
            className="w-full h-auto rounded-md object-contain max-h-[500px]"
          />
          {productData.outOfStock && (
            <div className="absolute z-30 px-6 py-3 font-bold text-white transform scale-105 rounded-lg shadow-lg pointer-events-none select-none bg-gradient-to-r from-red-600 via-red-500 to-red-400 top-4 left-4 rotate-12">
              OUT OF STOCK
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full mt-4 sm:mt-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {productData.image.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setImage(imgUrl)}
              className={`cursor-pointer rounded-md border ${
                image === imgUrl ? 'border-orange-500' : 'border-transparent'
              } flex-shrink-0 w-20 sm:w-full object-cover`}
              style={{ aspectRatio: '1 / 1' }}
            />
          ))}
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>

          {/* Variants */}
          {hasVariants && (
            <div className="mt-6">
              <label className="font-medium">Variant:</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {productData.variants.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedVariant(item);
                      setSelectedColor('');
                    }}
                    className={`px-4 py-2 rounded border transition-all ${
                      selectedVariant?.variant === item.variant
                        ? 'bg-orange-600 text-white'
                        : 'bg-white text-black hover:border-gray-400'
                    }`}
                  >
                    {item.variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {hasVariants && selectedVariant && (
            <div className="flex items-center mt-4">
              <div>
                <label className="font-medium">Color:</label>
                <div className="relative flex flex-wrap gap-3 mt-2">
                  {selectedVariant.colors.map((colorName, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedColor(colorName)}
                      className={`w-10 h-10 rounded-lg border transition-transform transition-shadow duration-300 ease-in-out
                        ${
                          selectedColor === colorName
                            ? 'border-orange-500 shadow-[0_0_12px_4px_rgba(249,115,22,0.8)] scale-110'
                            : 'border-white shadow-sm hover:shadow-[0_0_8px_3px_rgba(249,115,22,0.5)] hover:scale-105'
                        }
                      `}
                      style={{ backgroundColor: colorName }}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Gorgeous Price */}
          <div className="mt-6 sm:mt-8">
            {hasVariants && selectedVariant ? (
              selectedVariant.offerPrice ? (
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-black line-through sm:text-xl decoration-red-600 decoration-2 sm:decoration-4 md:decoration-8">
                    Regular Price : {currency}{selectedVariant.regularPrice}/-
                  </p>
                  <p className="text-2xl font-extrabold text-orange-600 sm:text-3xl">
                    Offer Price : {currency}{selectedVariant.offerPrice}/-
                  </p>
                </div>
              ) : (
                <p className="text-2xl font-extrabold text-black sm:text-3xl">
                  Price : {currency}{selectedVariant.regularPrice}/-
                </p>
              )
            ) : (
              <p className="text-2xl font-extrabold text-black sm:text-3xl">
                Price : {currency}{productData.price}/-
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col max-w-xs gap-4 mt-6 sm:flex-row sm:max-w-full sm:mt-8">
            <button
              onClick={handleAddToCart}
              disabled={productData.outOfStock}
              className="flex-1 py-3 font-semibold text-white transition-all bg-black rounded-lg shadow-lg sm:py-4 hover:bg-gray-800 disabled:opacity-50"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleBuyNow}
              disabled={productData.outOfStock}
              className="flex-1 py-3 font-semibold text-white transition-all bg-orange-600 rounded-lg shadow-lg sm:py-4 hover:bg-orange-700"
            >
              BUY NOW
            </button>
          </div>

          {/* Highlights */}
          <div className="max-w-md mt-6 space-y-2 text-sm text-gray-600 sm:mt-8 sm:text-base">
            <p>✅ 100% Original product.</p>
            <p>✅ Cash on delivery is available on this product.</p>
            <p>✅ Available for both Online and Offline shopping.</p>
          </div>
        </div>
      </div>

      {/* Gorgeous Tabs */}
      <div className="mt-20 max-w-[900px] mx-auto">
        <div className="flex overflow-hidden rounded-t-lg shadow-md">
          <button
            className={`flex-1 py-3 text-sm font-medium transition-all duration-300 rounded-tl-lg sm:text-base ${
              activeTab === 'description'
                ? 'bg-orange-600 text-white shadow-inner'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`flex-1 py-3 text-sm font-medium transition-all duration-300 rounded-tr-lg sm:text-base ${
              activeTab === 'specs'
                ? 'bg-orange-600 text-white shadow-inner'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('specs')}
          >
            Specifications
          </button>
        </div>

        <div className="p-6 bg-white border border-t-0 border-gray-300 rounded-b-lg shadow-sm sm:p-8 sm:text-base">
          {activeTab === 'description' && (
            <div className="max-w-full prose-sm prose text-gray-700 sm:prose lg:prose-lg">
              {productData.description.split('\n').map((line, idx) => (
                <p key={idx} className="mb-4">{line}</p>
              ))}
            </div>
          )}

          {activeTab === 'specs' && productData.specifications?.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300 sm:text-base">
                <tbody>
                  {productData.specifications.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200 ${
                        idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="w-1/3 px-4 py-2 font-medium text-gray-700">{spec.key}</td>
                      <td className="px-4 py-2 text-gray-600">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
