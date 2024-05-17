import {
  Button,
  CircularProgress,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFormContactValidation from "../hooks/useFormContactValidation";

export default function Contact() {
  const [enviando, setEnviando] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { values, errors, handleChange, isFormValid } =
    useFormContactValidation({
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
    });

  const handleCalculate = async () => {
    setEnviando(true);
    // Simulación de cálculo
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setEnviando(false);
    setModalOpen(true); // Mostrar el modal con los resultados después del cálculo
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full lg:px-32 py-8 flex flex-col lg:flex-row">
        <div className="mb-8 max-w-screen ml-8 md:ml-32 lg:ml-0 xs:justify-center lg:w-1/2">
          <div className="w-full">
            <h2 className="text-3xl font-bold">Contáctanos</h2>
          </div>

          <div className="max-w-xl mt-8">
            <p className="text-xl">
              Ingresa tus datos al formulario y te escribiremos ofreciendote más
              información sobre nuestra plataforma y sus planes personales
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:ml-16">
          <Container maxWidth="sm">
            <form noValidate autoComplete="off">
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.nombre}
                onChange={handleChange}
                name="nombre"
                error={Boolean(errors.nombre)}
                helperText={errors.nombre}
              />
              <TextField
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.apellido}
                onChange={handleChange}
                name="apellido"
                error={Boolean(errors.apellido)}
                helperText={errors.apellido}
              />
              <TextField
                label="Correo"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.correo}
                onChange={handleChange}
                name="correo"
                error={Boolean(errors.correo)}
                helperText={errors.correo}
              />
              <TextField
                label="Teléfono(opcional)"
                variant="outlined"
                fullWidth
                margin="normal"
                value={values.telefono}
                onChange={handleChange}
                name="telefono"
                error={Boolean(errors.telefono)}
                helperText={errors.telefono}
                inputProps={{
                  pattern: "\\+34 [0-9]{9}",
                }}
              />
              <TextField
                id="compania"
                label="Nombre de Compañía(opcional)"
                fullWidth
                margin="normal"
              />
              <TextField
                id="comentario"
                label="Comentario"
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleCalculate}
                disabled={!isFormValid}
              >
                {enviando ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Enviar correo"
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
                    {values.nombre} {values.apellido} pronto recibiras tu correo
                  </Typography>

                  <div className="flex justify-end gap-4 items-center my-4">
                    <Button
                      onClick={closeModal}
                      variant="contained"
                      color="secondary"
                    >
                      <Link to="/">Ir a Inicio</Link>
                    </Button>
                  </div>
                </div>
              </Modal>
            </form>
          </Container>
        </div>
      </section>

      {/* <Card className="flex-1 p-2">
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Llena este formulario para solicitar una consulta personalizada{" "}
          </Typography>
          <form>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              value={values.nombre}
              onChange={handleChange}
              name="nombre"
              error={Boolean(errors.nombre)}
              helperText={errors.nombre}
            />
            <TextField
              label="Apellidos"
              variant="outlined"
              fullWidth
              margin="normal"
              value={values.apellido}
              onChange={handleChange}
              name="apellido"
              error={Boolean(errors.apellido)}
              helperText={errors.apellido}
            />
            <TextField
              label="Correo"
              variant="outlined"
              fullWidth
              margin="normal"
              value={values.correo}
              onChange={handleChange}
              name="correo"
              error={Boolean(errors.correo)}
              helperText={errors.correo}
            />
            <TextField
              label="Teléfono"
              variant="outlined"
              fullWidth
              margin="normal"
              value={values.telefono}
              onChange={handleChange}
              name="telefono"
              error={Boolean(errors.telefono)}
              helperText={errors.telefono}
              inputProps={{
                pattern: "\\+34 [0-9]{9}",
              }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleCalculate}
              disabled={!isFormValid}
            >
              {enviando ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Enviar correo"
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
                  {values.nombre} {values.apellido} pronto recibiras tu correo
                </Typography>

                <div className="flex justify-end gap-4 items-center my-4">
                  <Button variant="contained" color="secondary">
                    <Link to="/">Ir a Inicio</Link>
                  </Button>
                </div>
              </div>
            </Modal>
          </form>
        </CardContent>
      </Card> */}
    </div>
  );
}
