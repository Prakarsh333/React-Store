import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import initialproduct from "./data/product.json";

function App() {
  const [cartItem, setCartItem] = useState([]);
  const [product, setProduct] = useState(initialproduct);
  const [openAddProduct, setAddProduct] = useState(false);

  function handleAddProductitem() {
    setAddProduct(!openAddProduct);
  }

  const handleAddToCart = (productid, productname, productimage) => {
    const ProductIndex = cartItem.findIndex((item) => item.id === productid);

    if (ProductIndex === -1) {
      const CartAdd = {
        id: productid,
        name: productname,
        image: productimage,
        quantity: 1,
      };
      setCartItem((state) => [...state, CartAdd]);
    } else {
      const CartProduct = [...cartItem];
      CartProduct[ProductIndex].quantity += 1;
    }
  };

  const handleIncrement = (productid) => {
    console.log("increment");
    const Productindex = cartItem.findIndex((item) => item.id === productid);
    let updatedCartItem = [...cartItem];
    updatedCartItem[Productindex].quantity += 1;
    setCartItem(updatedCartItem);
  };

  const handleDecrement = (productid) => {
    console.log("decrement");

    const Productindex = cartItem.findIndex((item) => item.id === productid);
    let updatedCartItem = [...cartItem];

    if (cartItem[Productindex].quantity === 1) {
      updatedCartItem = updatedCartItem.filter(
        (item, index) => index !== Productindex
      );
    } else {
      updatedCartItem[Productindex].quantity -= 1;
    }

    setCartItem(updatedCartItem);
  };

  function handleAddProduct(productName) {
    const newItem = {
      id: product.length + 1,
      name: productName,
      image:
        "https://birkonium.com/wp-content/uploads/woocommerce-placeholder-600x600.png",
    };
    setProduct((state) => [...state, newItem]);
    setAddProduct(!openAddProduct);
  }

  return (
    <div class="bg-gray-100">
      <Header
        CartItem={cartItem}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleAddProduct={handleAddProduct}
        openAddProduct={openAddProduct}
        handleAddProductitem={handleAddProductitem}
      />
      <Product product={product}
               AddToCart={handleAddToCart}
                />
    </div>
  );
}

export default App;
