import { TextField, Stack, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const Register = () => {
  const [isAdmin, setisAdmin] = React.useState(false);

  const handleChange = (event) => {
    console.log(event.target.value);
    setisAdmin(event.target.value);
  };

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      isAdmin: "",
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
        <Typography variant="h4">Register</Typography>
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

          <InputLabel id="demo-simple-select-label">Is Admin</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...register("isAdmin", { required: "Is Admin is required" })}
            label="Is admin"
            onChange={handleChange}
          >
            <MenuItem value={false}>False</MenuItem>
            <MenuItem value={true}>True</MenuItem>
          </Select>

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
