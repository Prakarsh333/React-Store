import React, { useRef } from "react";

function AddProduct({handleAddProduct}) {
  const newProductname = useRef();

  function handleNewProduct(event) {
    event.preventDefault();
    const ProductName = newProductname.current.value;
    handleAddProduct(ProductName);
  }
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black opacity-80">
        <div className="bg-white p-4 rounded-md flex-row justify-center">
          <div className="text-black text-3xl mb-3">Add Product</div>
          <form onSubmit={handleNewProduct} class="">
            <div>Enter Product Name :</div>
            <input
              ref={newProductname}
              class="border-black border-2 w-full mb-4"
            />
            <button
              type="submit"
              class="border-black border-2 bg-yellow-400 rounded-md p-2 font-serif w-full"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
