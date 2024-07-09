import React from "react";

function Counter({id,quantity,handleIncrement,handleDecrement}) {
  return (
    <>
    <div class="flex justify-center items-center">
      <div class="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-md cursor-pointer" onClick={() => handleIncrement(id)}>+</div>
      <div class="w-10 h-10 p-1 border-2 border-black mx-2 flex items-center justify-center text-xl text-black rounded-md">{quantity}</div>
      <div class="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-md cursor-pointer" onClick={() => handleDecrement(id)}>-</div>
    </div>
    </>
  )
}

function OneCartItem({ id, name, image, quantity,handleDecrement,handleIncrement }) {
  return (
    <>
      <div class="flex justify-around w-full h-auto border-2 border-black m-3">
        <div class="w-20 h-30 m-2">
          <img src={image}></img>
        </div>
        <div class="flex justify-center items-center text-xl font-extralight m-10">
          {name}
        </div>
        <div class="flex justify-center items-center text-xl font-extralight m-4">
          Product Id: {id}
        </div>
        <div class="flex justify-center items-center text-xl font-extralight m-4">
          <Counter id={id} quantity={quantity} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
        </div>
      </div>
    </>
  );
}

function Cart({ handleCart, CartItem,handleIncrement,handleDecrement }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="bg-white p-4 rounded-md z-40">
        <div className="text-black">Cart is open</div>

        <div className="flex flex-row flex-wrap p-5 h-auto max-h-[500px] w-[800px] overflow-x-auto">
          {CartItem.map((item) => (
            <OneCartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          ))}
        </div>

        <div class="flex justify-between">
          <button
            className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md"
            onClick={handleCart}
          >
            Close
          </button>
          {CartItem.length > 0 && (
            <button
              className="mt-4 bg-black text-yellow-400 px-4 py-2 rounded-md"
              onClick={handleCart}
            >
              CheckOut
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
