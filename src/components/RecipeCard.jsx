/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function RecipeCard({ name, ingredients, imageUrl, totalCal }) {
  return (
    <div className="shadow-lg  w-full max-w-[500px] max-h-[500px] flex flex-col items-center justify-between">
      <div className="">
        <span className="text-lg font-bold bg-[#FFEA74] rounded-full p-2">
          {totalCal} cal
        </span>
        <img
          className="max-w-[200px] max-h-full"
          src={imageUrl}
          alt="image-plate"
        />
      </div>
      <div className="w-full flex items-center justify-center line-clamp-1 my-2">
        <h1 className="text-xl font-bold">{name}</h1>
      </div>
      <div className="max-w-full mb-4">
        {ingredients.map((ingredient, index) => (
          <p key={ingredient}>
            {index === ingredients.length - 1
              ? `${ingredient}.`
              : `${ingredient},`}
          </p>
        ))}
      </div>
    </div>
  );
}
