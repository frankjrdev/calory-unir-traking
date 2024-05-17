import { useEffect, useState } from "react";

function useCaloriesCalculator(userData) {
  const [calories, setCalories] = useState(0);
  const [macros, setMacros] = useState({
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  useEffect(() => {
    calculateCalories(userData);
  }, [userData]);

  const calculateCalories = (userData) => {
    const { genero, edad, altura, peso, nivelActividad, objetivo } = userData;

    // Calculo del metabolismo basal (MB) según la fórmula de Harris-Benedict
    let MB;
    if (genero === "masculino") {
      MB = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * edad;
    } else if (genero === "femenino") {
      MB = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * edad;
    }

    // Aplicar el factor de actividad física
    let factorActividad;
    switch (nivelActividad) {
      case "sedentario":
        factorActividad = 1.2;
        break;
      case "ligero":
        factorActividad = 1.375;
        break;
      case "moderado":
        factorActividad = 1.55;
        break;
      case "activo":
        factorActividad = 1.725;
        break;
      case "muy_activo":
        factorActividad = 1.9;
        break;
      default:
        // Error: nivel de actividad no especificado
        return;
    }

    // Calcular calorías totales
    let totalCalories;
    switch (objetivo) {
      case "adelgazar":
        totalCalories = MB * factorActividad - 500; // Deficit de 500 kcal para perder peso
        break;
      case "aumentar":
        totalCalories = MB * factorActividad + 500; // Exceso de 500 kcal para ganar peso
        break;
      case "mantener":
        totalCalories = MB * factorActividad; // Mantener el peso
        break;
      default:
        // Error: objetivo no especificado
        return;
    }

    // Calcular macros (porcentaje aproximado)
    const protein = (0.2 * totalCalories) / 4; // 20% de calorías provienen de proteínas
    const fat = (0.3 * totalCalories) / 9; // 30% de calorías provienen de grasas
    const carbs = (totalCalories - protein * 4 - fat * 9) / 4; // El resto de calorías provienen de carbohidratos

    setCalories(totalCalories);
    setMacros({ protein, fat, carbs });
  };

  return {
    calories,
    macros,
  };
}

export default useCaloriesCalculator;
