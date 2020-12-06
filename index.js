const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the employee name?",
    },
  
    {
      type: "input",
      name: "role",
      message: "What is the employee's role?",
    },
  
    {
        type: "input",
        name: "ID",
        message: "ID number?",
    },

    {
        type: "input",
        name: "specific",
        message: "?",
    },