# Hospital Management System  

A comprehensive **Hospital Management System** backend developed using **Node.js**, **Express.js**, and **MongoDB**. This system provides role-based user authentication for doctors, patients, and admins while ensuring secure handling of data and features like messaging and appointments.  

## Features  
- **Role-Based User Authentication**  
  - Separate roles for **Doctor**, **Patient**, and **Admin**.  
  - Authentication and authorization managed using **JWT** and **bcrypt.js**.  
- **Messaging System**  
  - Enables users to exchange messages securely.  
- **Appointment Scheduling**  
  - Patients can schedule appointments with doctors.  
  - Doctors can view and manage their appointment schedules.  
- **Secure Token Management**  
  - Handles multiple **JWT tokens** for added security and functionality.  

## Tech Stack  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: JWT, bcrypt.js  

## Installation  

### Prerequisites  
Ensure you have the following installed:  
- **Node.js**: v14 or higher  
- **MongoDB**: v4.4 or higher  

### Steps to Set Up  
1. **Clone the repository**:
    
   ```bash  
   git clone https://github.com/your-username/Hospital-Management-system.git  
   cd Hospital-Management-system

**Environment Variables**

Create a `.env` file in the backend directory with the following:

```bash
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
```
**Run the Application**
