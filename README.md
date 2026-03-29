# IMY772_G20_AWS_Workshop

## Team Members
- Louise  
- Brendan  

---

## Project Description
This project involves the development of an online hexadecimal calculator application, designed and implemented using the Test-Driven Development (TDD) approach.  

The calculator allows users to perform basic arithmetic operations - addition, subtraction, multiplication, and division - on hexadecimal numbers. The system enforces strict input and output constraints to ensure correctness and consistency.  

As part of the IMY 772 AWS Workshop, this project is structured as an online course package, where each stage of development is demonstrated through a combination of a GitHub repository and instructional videos. The project will progressively evolve from defining requirements, to implementing and testing functionality, to deploying the final application using cloud technologies.

---

## AWS Services Used
The following AWS services will be used in later stages of the project for deployment and scalability:

- **Amazon S3** – for storing static files and assets  
- **AWS Lambda** – for executing backend logic in a serverless environment  
- **Amazon API Gateway** – for handling API requests and communication between the frontend and backend  

---

## Functional Requirements (Summary)

The system must:

- Accept hexadecimal inputs (0–9, A–F) with a maximum of 2 digits  
- Validate all user inputs and prevent invalid characters  
- Perform basic arithmetic operations:
  - Addition  
  - Subtraction  
  - Multiplication  
  - Division  
- Return results in hexadecimal format  
- Restrict outputs to a maximum of 4 digits  
- Prevent negative results and decimal values  
- Convert hexadecimal values to decimal for processing and back to hexadecimal for output  
- Handle edge cases such as division by zero  
- Provide a simple interface for input, operation selection, and result display  

---

## Branching Strategy
To follow a structured development process, the repository is divided into branches corresponding to each section of the assignment:

- `main` – final integrated application  
- `section-1-requirements` – functional requirements and repository setup  
- `section-2-testing` – test-driven development and implementation  
- `section-3-gui` – frontend development and GUI testing  
- `section-4-deployment` – containerisation and AWS deployment  

---

## Development Approach
This project follows the **Test-Driven Development (TDD)** methodology:

1. Define functional requirements  
2. Write tests based on requirements  
3. Implement code to pass tests  
4. Refactor and improve code  

---

## Project Structure
/root
- README.md
- docs/
  - requirements.md
- src/
- tests/
- .github/
  - workflows/

---

## Notes
This repository is part of an instructional course package. Each section is accompanied by short videos that explain the concepts and demonstrate implementation steps.

The focus of this project is not only on building a working application, but also on clearly demonstrating understanding of development processes, testing strategies, and cloud deployment.
