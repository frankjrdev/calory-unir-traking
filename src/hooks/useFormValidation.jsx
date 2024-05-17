import { useEffect, useState } from "react";
import useStore from "../store/userStore";

function useFormValidation(initialState) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(
    Object.keys(initialState).reduce((acc, curr) => {
      acc[curr] = false;
      return acc;
    }, {})
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (values, touched, previousErrors = {}) => {
    let errors = { ...previousErrors };

    const validateField = (fieldName, validationCondition, errorMessage) => {
      if (touched && touched[fieldName]) {
        if (validationCondition) {
          errors[fieldName] = errorMessage;
        } else if (errors && errors[fieldName]) {
          delete errors[fieldName];
        }
      }
    };

    validateField(
      "nombre",
      typeof values.nombre !== "string" || !values.nombre.trim(),
      "El nombre es obligatorio"
    );
    validateField(
      "edad",
      Number(values.edad) <= 0,
      "La edad es obligatoria y debe ser mayor a 0"
    );
    validateField(
      "genero",
      typeof values.genero !== "string" || !values.genero.trim(),
      "El género es obligatorio"
    );
    validateField(
      "altura",
      Number(values.altura) <= 0,
      "La altura es obligatoria y debe ser mayor a 0"
    );
    validateField(
      "peso",
      Number(values.peso) <= 0,
      "El peso es obligatorio y debe ser mayor a 0"
    );
    validateField(
      "nivelActividad",
      typeof values.nivelActividad !== "string" ||
        !values.nivelActividad.trim(),
      "El nivel de actividad física es obligatorio"
    );
    validateField(
      "objetivo",
      typeof values.objetivo !== "string" || !values.objetivo.trim(),
      "El objetivo es obligatorio"
    );

    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);

    const newErrors = validateForm(newValues, touched);
    setErrors(newErrors);

    setTouched({
      ...touched,
      [name]: true,
    });

    useStore.setState((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    }));
  };

  useEffect(() => {
    const newErrors = validateForm(values, touched);
    setErrors(newErrors);

    const allFieldsTouched = Object.values(touched).every((t) => t === true);
    const noErrors = Object.keys(newErrors).length === 0;

    setIsFormValid(allFieldsTouched && noErrors);
  }, [values, touched]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm(values));
    setIsSubmitting(true);

    const finalValues = {
      ...values,
      edad: parseInt(values.edad),
      altura: parseInt(values.altura),
      peso: parseInt(values.peso),
    };

    useStore.setState((state) => ({
      formData: {
        ...state.formData,
        ...finalValues,
      },
    }));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    isFormValid,
  };
}

export default useFormValidation;
