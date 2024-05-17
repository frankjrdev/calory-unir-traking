import { useEffect, useState } from "react";

function useFormContactValidation(initialState) {
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
      "apellido",
      typeof values.nombre !== "string" || !values.nombre.trim(),
      "El nombre es obligatorio"
    );
    validateField(
      "correo",
      !values.correo || !/\S+@\S+\.\S+/.test(values.correo),
      "El correo electrónico no es válido"
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

export default useFormContactValidation;
