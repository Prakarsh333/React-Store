function Product({ item,AddToCart, }) {
  return (
    <>
      <div key={item.id} class="mt-[50px] flex flex-col items-center">
        <img src={item.image} class="w-80 h-80 border-black border-2" />
        <div class="font-bold text-center">{item.name}</div>
        <button class="text-black font-semibold bg-yellow-400 pl-2 pr-2 mt-4 mb- 4 rounded-md h-9 hover:bg-yellow-500" onClick={() => AddToCart(item.id,item.name,item.image)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

function Products({product, AddToCart }) {
  return (
    <>
      <div class="flex flex-wrap justify-around items-start mr-[300px] ml-[300px] mt-[80px]">
        {product.map((item) => (
          <Product key={item.id} item={item} AddToCart={AddToCart} />
        ))}
      </div>
    </>
  );
}

export default Products;
