function SneakerPrice() {
  return (
    <div>
      <h1
        className="text-3xl font-bold mb-1 inline-block relative before:absolute before:content-['50%'] before:-right-20 before:text-base
      before:bg-black before:text-white before:rounded-lg before:px-3 before:py-1"
      >
        $125
      </h1>
      <p className=" text-lg line-through text-slate-500">$250</p>
    </div>
  );
}

export default SneakerPrice;
