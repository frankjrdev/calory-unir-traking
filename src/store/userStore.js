import { create } from "zustand";

const useStore = create((set) => ({
  formData: {
    nombre: "",
    edad: 0,
    genero: "",
    altura: 0,
    peso: 0,
    nivelActividad: "",
    objetivo: "",
  },
  setFormData: (newFormData) =>
    set((state) => ({ formData: { ...state.formData, ...newFormData } })),
}));

export default useStore;
