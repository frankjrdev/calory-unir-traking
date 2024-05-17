import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import healthy from "../assets/healthy-plate.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useCaloriesCalculator from "../hooks/useCaloriesCalculator";
import useFormValidation from "../hooks/useFormValidation";
import "../index.css";

export default function Traking() {
  const { values, errors, handleChange, isFormValid } = useFormValidation({
    nombre: "",
    edad: 0,
    genero: "",
    altura: 0,
    peso: 0,
    nivelActividad: "",
    objetivo: "",
  });

  const { calories, macros } = useCaloriesCalculator(values);
  const [calculando, setCalculando] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCalculate = async () => {
    setCalculando(true);
    // Simulación de cálculo
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCalculando(false);
    setModalOpen(true); // Mostrar el modal con los resultados después del cálculo
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Header />

      <section className="w-full lg:relative container  bg-green-200 lg:mx-auto rounded-xl p-4 md:p-32">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-12">Contáctanos</h1>
            <p className="text-3xl font-semibold">
              Si necesitas un plan de alimentación personalizado que se ajuste a
              tus necesidades y estilo de vida esepecifico no dudes en
              contactarnos
            </p>
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

      <main className="container w-full mx-auto my-8">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-8">
          {/* Card de Historias de Clientes */}
          <Card className="w-full lg:w-2/5">
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/v1710861399/primary/iai8vbd8cjrpvp2p82x2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Novak Djokovic
              </Typography>
              <Typography variant="body2" color="text.secondary">
                El ganador de 24 títulos de Grand Slam mejoró su rendimiento
                después de adoptar una dieta sin gluten. ¿Qué come exactamente
                el tenista serbio? Olympics.com lo descubre en la primera parte
                de este nuevo serial sobre la dieta de los deportistas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a
                  href="https://olympics.com/es/noticias/novak-djokovic-como-dieta-sin-gluten-cambio-carrera"
                  target="_blank"
                  alt="Historia de Clientes"
                >
                  Leer mas
                </a>
              </Button>
            </CardActions>
          </Card>

          {/* Card de Formulario */}
          <Card className="flex-1 p-2">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Información para Calcular tus Calorías y Macros
              </Typography>
              <form>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={values.nombre} // Usa values.nombre en lugar de nombre.value
                  onChange={handleChange}
                  name="nombre" // Agrega el nombre del campo
                  error={Boolean(errors.nombre)} // Muestra el estado de error
                  helperText={errors.nombre} // Muestra el mensaje de error
                />
                <TextField
                  label="Edad"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="number"
                  inputProps={{ min: 0 }}
                  value={values.edad}
                  onChange={handleChange}
                  name="edad"
                  error={Boolean(errors.edad)}
                  helperText={errors.edad}
                  className="no-arrows"
                />
                <TextField
                  label="Género"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  select
                  SelectProps={{ native: true }}
                  value={values.genero}
                  onChange={handleChange}
                  name="genero"
                  error={Boolean(errors.genero)}
                  helperText={errors.genero}
                >
                  <option value=""></option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </TextField>
                <div className="w-full flex gap-4 flex-col md:flex-row">
                  <TextField
                    label="Altura (cm)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 0 }}
                    value={values.altura}
                    onChange={handleChange}
                    name="altura"
                    error={Boolean(errors.altura)}
                    helperText={errors.altura}
                    className="no-arrows"
                  />
                  <TextField
                    label="Peso (kg)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="number"
                    inputProps={{ min: 0 }}
                    value={values.peso}
                    onChange={handleChange}
                    name="peso"
                    error={Boolean(errors.peso)}
                    helperText={errors.peso}
                    className="no-arrows"
                  />
                </div>
                <div className="w-full flex gap-4 flex-col md:flex-row">
                  <TextField
                    label="Nivel de Actividad Física"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    select
                    SelectProps={{ native: true }}
                    value={values.nivelActividad}
                    onChange={handleChange}
                    name="nivelActividad"
                    error={Boolean(errors.nivelActividad)}
                    helperText={errors.nivelActividad}
                  >
                    <option value=""></option>
                    <option value="sedentario">
                      Sedentario(0 días a la semana)
                    </option>
                    <option value="ligero">Ligero(1-2 días a la semana)</option>
                    <option value="moderado">
                      Moderado(3-4 días a la semana)
                    </option>
                    <option value="activo">Activo(5-6 días a la semana)</option>
                    <option value="muy_activo">
                      Muy Activo(7 días a la semana)
                    </option>
                  </TextField>
                  <TextField
                    label="Objetivo"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    select
                    SelectProps={{ native: true }}
                    value={values.objetivo}
                    onChange={handleChange}
                    name="objetivo"
                    error={Boolean(errors.objetivo)}
                    helperText={errors.objetivo}
                  >
                    <option value=""></option>
                    <option value="adelgazar">Adelgazar</option>
                    <option value="mantener">Mantener el Peso</option>
                    <option value="aumentar">Aumentar Masa Muscular</option>
                  </TextField>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleCalculate}
                  disabled={!isFormValid}
                >
                  {calculando ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Calcular Calorías y Macros"
                  )}
                </Button>

                <Modal
                  open={modalOpen}
                  onClose={closeModal}
                  aria-labelledby="modal-title"
                  aria-describedby="modal-description"
                  className="flex justify-center items-center"
                >
                  <div className="bg-white rounded-lg p-6 max-w-[90%] w-[500px] text-center">
                    <Typography variant="h4" id="modal-title" gutterBottom>
                      Resultados de {values.nombre}
                    </Typography>
                    <Typography
                      variant="body1"
                      id="modal-description"
                      gutterBottom
                    >
                      <span className="font-bold">Caloriás Totales:</span>{" "}
                      {calories.toFixed(1)}
                    </Typography>
                    <Typography
                      variant="body1"
                      id="modal-description"
                      gutterBottom
                    >
                      <span className="font-bold">Proteinas:</span>{" "}
                      {macros.protein.toFixed(1)}g
                    </Typography>
                    <Typography
                      variant="body1"
                      id="modal-description"
                      gutterBottom
                    >
                      <span className="font-bold">Carbohidratos:</span>{" "}
                      {macros.carbs.toFixed(1)}g
                    </Typography>
                    <Typography
                      variant="body1"
                      id="modal-description"
                      gutterBottom
                    >
                      <span className="font-bold">Grasas:</span>{" "}
                      {macros.fat.toFixed(1)}g
                    </Typography>
                    <div className="flex justify-center gap-4 items-center my-4">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={closeModal}
                      >
                        Calcular de Nuevo
                      </Button>
                      <Button variant="contained" color="secondary">
                        <Link to="/">Ir a Inicio</Link>
                      </Button>
                    </div>
                  </div>
                </Modal>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
