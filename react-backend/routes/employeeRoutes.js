const express = require("express")
const employee_routes = express();

const bodyParser = require("body-parser");

employee_routes.use(bodyParser.json());
employee_routes.use(bodyParser.urlencoded({
    extended:true
}))

const employeeController = require("../controller/userController");
employee_routes.get("/users",employeeController.getUsers);
employee_routes.post("/register",employeeController.registerUser);
employee_routes.post("/login",employeeController.loginUser);
employee_routes.post("/create",employeeController.createUser);
employee_routes.post("/user/:user_id",employeeController.updateUser);

module.exports = employee_routes;
