import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import healthy from "../assets/healthy-plate.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import categoriesRecipe from "../data/categories.json";
import recipesData from "../data/recipes.json";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  useEffect(() => {
    setCategories(categoriesRecipe);
  }, []);

  const filteredRecipes =
    selectedCategories.length > 0
      ? recipes.filter((recipe) => selectedCategories.includes(recipe.category))
      : recipes;

  const handleCategoryClick = (categoryName) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(categoryName)) {
        return prevSelectedCategories.filter((cat) => cat !== categoryName);
      } else {
        return [...prevSelectedCategories, categoryName];
      }
    });
  };
  return (
    <>
      <Header />

      <section className="w-full lg:relative container  bg-green-200 lg:mx-auto rounded-xl p-4 md:p-32">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-12">Traking your calories</h1>
            <p className="text-3xl font-semibold">
              Toma el control de tus calorias y mantente sano
            </p>

            <button className="bg-green-500 mt-12 mb-8 lg:mb-0 text-white px-4 py-2 rounded-2xl">
              <Link className="text-xl font-semibold" to="/traking">
                Empezar Gratis
              </Link>
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:absolute lg:right-[-8%] lg:top-16">
            <img
              className="w-full md:w-[600px] h-[400px] rounded-3xl object-cover"
              src={healthy}
              alt=" healthy-plate"
            />
          </div>
        </div>
      </section>

      <main className="w-full container mx-auto justify-center flex flex-col items-center my-16">
        <div>
          <h2 className="text-5xl font-bold">Recetas</h2>
        </div>
        <div className="my-8 w-full">
          {/* Mostrar Select en dispositivos móviles */}
          <div className="block md:hidden w-full px-8">
            <FormControl className="w-full">
              <Select
                placeholder="Seleccione una categoria"
                multiple
                value={selectedCategories}
                onChange={(event) => setSelectedCategories(event.target.value)}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Mostrar categorías en dos filas en tablet y todas en pantallas más grandes */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-16 lg:flex lg:flex-row lg:gap-16 justify-center">
            {categories.map((category) => (
              <p
                className={`text-xl flex justify-center font-semibold cursor-pointer rounded-xl p-2 hover:bg-gray-300 ${
                  selectedCategories.includes(category.name)
                    ? "bg-green-300"
                    : "bg-gray-200"
                }`}
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 w-full border-t-2 my-4" />
        <section className="w-full flex justify-center items-center mx-auto">
          <div className="w-full lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                imageUrl={recipe.imageUrl}
                totalCal={recipe.totalCal}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
