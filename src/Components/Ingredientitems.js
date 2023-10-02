const Ingredientitems = ({ items }) => {
  console.log(items);
  return (
    <div className="bg-slate-100 w-1/2 px-2 py-4 font-bold shadow-lg">
      <div>
        <h1>{items.strIngredient}</h1>
      </div>
    </div>
  );
};
export default Ingredientitems;
