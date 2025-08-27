# FlyNest School API

A simple school management API built with **Express.js (TypeScript)**, **PostgreSQL + Prisma**, and **JWT authentication** following the **MVC pattern**.  
Supports role-based access: `admin`, `teacher`, `student`.

---

## 🚀 Tech Stack
- Express.js + TypeScript
- PostgreSQL (ORM: Prisma)
- JWT Authentication (access + refresh)
- Role Guards (admin / teacher / student)
- Validation with class-validator

---

## ⚙️ Setup & Run

```bash
# Install deps
npm install

# Run migrations
npm run prisma:migrate

# Seed demo data (optional)
npm run seed

# Dev mode
npm run dev

# Production build
npm run build && npm start



---
```

🌎 Server URL
http://localhost:4000

## 🔑 Authentication APIs

### 1. Signup (Create a new user)

**Endpoint:** `POST /auth/signup`  
**Access:** Public

#### Request Body Examples

**Admin User**
```json
{
  "name": "Admin User",
  "email": "admin@school.com",
  "password": "password123",
  "role": "admin"
}
```

**Teacher user**
```
{
  "name": "Teacher Tom",
  "email": "teacher@school.com",
  "password": "password123",
  "role": "teacher"
}
```

**Student user**
```
{
  "name": "Student Sam",
  "email": "student@school.com",
  "password": "password123",
  "role": "student"
}
```

### 2. Login (Generate access & refresh tokens)

Endpoint: POST /auth/login
Access: Public

Request Body
```
{
  "email": "admin@school.com",
  "password": "password123"
}
```
Example response
```
{
  "user": {
    "id": "uuid",
    "name": "Admin User",
    "email": "admin@school.com",
    "role": "admin"
  },
  "accessToken": "eyJhbGciOi...",
  "refreshToken": "eyJhbGciOi..."
}
```

# 🎓 Student APIs
### 4. Create Student

Endpoint: POST /students
Access: Admin only

Headers:
Authorization: Bearer <accessToken>

Request Body
```
{
  "name": "Alice",
  "age": 14
}
```

### 5. Get All Students

Endpoint: GET /students
Access: Admin, Teacher

Headers:
Authorization: Bearer <accessToken>

### 6. Get Single Student

Endpoint: GET /students/:id
Access: Admin, Teacher

Headers:
Authorization: Bearer <accessToken>

# 🏫 Class APIs
### 7. Create Class

Endpoint: POST /classes
Access: Admin only

Headers:
Authorization: Bearer <accessToken>

Request Body
```
{
  "name": "Physics",
  "section": "A"
}
```

### 8. Enroll Student in Class

Endpoint: POST /classes/:id/enroll
Access: Admin, Teacher

Headers:
Authorization: Bearer <accessToken>

Request Body
```
{
  "studentId": "<studentId>"
}
```

### 9. Get Students of a Class

Endpoint: GET /classes/:id/students
Access: Admin, Teacher

Headers:
Authorization: Bearer <accessToken>