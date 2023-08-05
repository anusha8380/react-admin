import { TextField, Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Register = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      isAdmin: false,
    },
  });

  const navigate = useNavigate();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    Axios.post("http://localhost:8000/register", data)
      .then((res) => {
        toast.success(`${res.data.message}`);
        navigate("/login");
      })
      .catch((res) => {
        toast.error(`${res.response.data.message}`);
      });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography variant="h4">
          Register
        </Typography>
        <Stack spacing={2} width={400}>
          <TextField
            type="text"
            label="Name"
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors?.name?.message}
          />

          <TextField
            type="text"
            label="Email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />

          <TextField type="text" label="isAdmin" {...register("isAdmin")} />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
