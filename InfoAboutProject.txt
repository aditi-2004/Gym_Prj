+------------------+      +------------------------+      +---------------------+
|   User Browser   |      |  Third-Party Services  |      |   Database (MongoDB)|
| (React)          |<---->| (Payment, Gemini AI)   |<---->| (Data Persistence)  |
+------------------+      +------------------------+      +---------------------+
        ^                           ^                             ^
        |                           |                             |
        | HTTPS (API Calls)         | Secure Server-to-Server API | Mongoose ODM
        |                           |                             |
        v                           v                             v
+---------------------------------------------------------------------------------+
|                                 Backend API Server                              |
|                          (Node.js / Express on Render)                   |
|---------------------------------------------------------------------------------|
|  Auth Middleware (JWT) | Routes | Controllers | Services | Models (Mongoose)   |
+---------------------------------------------------------------------------------+

Project Overview

Fitness Empire is a full‑stack web application that provides: user authentication, workout plans, diet plans, expert advice, a product storefront & cart, a chatbot assistant, and support/invoice emailing. 
The stack is MERN (React frontend, Node/Express backend, MongoDB), plus integration points for an LLM (Gemini/OpenAI) and email services.

Data Model (ER summary)
User: { _id, email (unique), passwordHash, username, createdAt }
Product: { _id, name, description, category, price, brand }
Cart: { _id, userId -> User, items: [{productId, qty}], totalPrice }
Order: { _id, userId, cartId, status, orderDate }
DietPlan: { _id, gender, goal, description, dailyMeals: [{meal1..meal6}], exercises }
WorkoutPlan: { _id, bodyType, plan: [{ day, title, exercises:[{name, sets, reps,time}] }] }
ExpertAdvice: { _id, userId, question, adviceText }


                          ┌──────────────────────────┐
                          │        FRONTEND          │
                          │  React (UI Components)   │
                          └───────────┬──────────────┘
                                      │ REST API Calls
                                      ▼
                          ┌──────────────────────────┐
                          │         BACKEND          │
                          │ Express + Node.js Server │
                          └───────────┬──────────────┘
                                      │
     ┌────────────────────────────────┼──────────────────────────────────┐
     │                                │                                  │
     ▼                                ▼                                  ▼
┌───────────────┐            ┌──────────────────┐               ┌───────────────────┐
│   AUTH        │            │   PRODUCTS       │               │   CART & ORDERS   │
│ /api/users    │            │ /api/products    │               │ /api/cart         │
│               │            │                  │               │ /api/orders       │
│ • POST /register           │ • GET /          │               │ • POST /cart      │
│ • POST /login              │ • POST / (admin) │               │ • GET /cart/:user │
│  → issues JWT              │ • GET /:id       │               │ • POST /orders    │
└───────────────┘            │ • PUT /:id       │               │ • GET /orders/:id │
                             │ • DELETE /:id    │               └───────────────────┘
                             └──────────────────┘

     ┌────────────────────────────────┼──────────────────────────────────┐
     │                                │                                  │
     ▼                                ▼                                  ▼
┌───────────────┐            ┌──────────────────┐               ┌───────────────────┐
│  DIET PLANS   │            │ WORKOUT PLANS    │               │ SUPPORT & EXPERT  │
│ /api/diet     │            │ /api/workoutPlans│               │ /api/support      │
│               │            │                  │               │ /api/expert-advice│
│ • GET /?goal= │            │ • GET /?params   │               │ • POST /support   │
│ • POST /      │            │ • POST /         │               │ • POST /expert-   │
│               │            │                  │               │   advice          │
└───────────────┘            └──────────────────┘               └───────────────────┘

     ┌────────────────────────────────┼──────────────────────────────────┐
     │                                │                                  │
     ▼                                ▼                                  ▼
┌───────────────┐            ┌──────────────────┐               ┌───────────────────┐
│   CHATBOT     │            │   INVOICE/EMAIL  │               │   SERVICES        │
│ /api/chat     │            │ /api/invoice     │               │ EmailService.js   │
│ POST {msg}    │            │ POST /send-invoice               │ GeminiAPI.js      │
│ → LLM Proxy   │            │ → send invoice via email          │ Auth Middleware   │
└───────────────┘            └──────────────────┘               └───────────────────┘

                          ┌──────────────────────────┐
                          │        DATABASE          │
                          │      MongoDB Atlas       │
                          │ Users, Products, Orders, │
                          │ DietPlans, Workouts,     │
                          │ ExpertAdvice, Chats      │
                          └──────────────────────────┘




