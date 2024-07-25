const CartEmpty = () => {
  return (
    <div className="grid gap-y-4 justify-center">
      <img
        src="/images/illustration-empty-cart.svg"
        alt="Cake illustration"
        className="justify-self-center"
        width={128}
        height={128}
      />
      <p className="text-preset-4 text-preset-4-bold text-rose-500">
        Your added items will appear here
      </p>
    </div>
  );
};

export default CartEmpty;