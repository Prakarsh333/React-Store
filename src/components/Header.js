import { useState } from "react";
import Cart from "./Cart";
import AddProduct from "./AddProduct"

function Header({CartItem,handleIncrement,handleDecrement,handleAddProduct,openAddProduct,handleAddProductitem}) {
  const [openCart, setOpenCart] = useState(false);
 
  function handleCart() {
    setOpenCart(!openCart);
  }
  

  return (
    <div>
      <div className="bg-black flex flex-wrap items-center justify-between">
        <h1 className="text-4xl font-bold text-left text-yellow-400 p-4">
          React Store
        </h1>
        <div>
          <button
            className="text-black bg-yellow-400 rounded-sm pl-4 pr-4 pt-1 pb-1 cursor-pointer mr-4 hover:border-2 hover:border-white"
            onClick={() => handleAddProductitem()}
          >
            Add Product
          </button>
          <button
            className="text-black bg-yellow-400 rounded-sm pl-4 pr-4 pt-1 pb-1 cursor-pointer mr-4 hover:border-2 hover:border-white"
            onClick={handleCart}
          >
            Cart
          </button>
        </div>
      </div>
      {openAddProduct && <AddProduct handleAddProduct={handleAddProduct}/>}
      {openCart && (<Cart handleCart={handleCart} CartItem={CartItem} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />)}
    </div>
  );
}

export default Header;