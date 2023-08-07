import React from "react";
import { TextField, Stack, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";



const Login = () =>{
  const form = useForm({
    defaultValues: {
      email: ""
    },
  });

  const navigate = useNavigate();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    Axios.post("http://localhost:8000/login", data)
      .then((res) => {
        console.log(res.data.res.isAdmin);
        localStorage.setItem('user', JSON.stringify(res.data.res.email))
        if(res.data.res.isAdmin === true){
          navigate("/dashboard");
        }else{
          toast.error('Login with Admin credentials to access the dashboard.');
        }
        
      })
      .catch((res) => {
        toast.error(`${res.response.data.msg}`);
      });
  };
  return(
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography variant="h4">
          Login
        </Typography>
        <Stack spacing={2} width={400}>

          <TextField
            type="text"
            label="Email"
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors?.email?.message}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  )
};

export default Login;