# 🚆 React Train Booking Notification System — Day 8/100

## 📌 Overview  
This project is a **React-based Train Booking UI** that demonstrates how to handle **user interactions, component communication, and dynamic notifications** using React Hooks.

When users click the **“Book Now”** button on different train cards, a notification appears with a message and color indicating the booking status.

---
## 📸 Preview  

### 🏠 Home UI
![Home](./assets/home.png)

### 🔔 Notification (Success)
![Success](./assets/success.png)

### ⚠️ Notification (Warning)
![Warning](./assets/warning.png)

### ❌ Notification (Error)
![Error](./assets/error.png)

## ✨ Features  

- 🚆 Display multiple train cards  
- 🔘 Reusable Button component  
- 🔔 Dynamic notification system  
- 🎯 Conditional rendering (show/hide notifications)  
- 🎨 Different notification types:
  - ✅ Success  
  - ⚠️ Warning  
  - ❌ Error  
  - ℹ️ Info  
- ⚡ Built using React Hooks (`useState`)  
- 💅 Styled with Tailwind CSS  

---

## 🧠 Concepts Covered  

- React Functional Components  
- Props & Prop Drilling  
- Event Handling (`onClick`)  
- State Management using `useState`  
- Conditional Rendering  
- Reusable Components  
- Dynamic Styling  

---

## 🏗️ Project Structure  
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Button.jsx
│ ├── Notification.jsx
│ └── TrainCard.jsx
│
├── App.jsx
└── main.jsx


---

## ⚙️ How It Works  

1. Each **TrainCard** receives an `onBook` function as a prop  
2. When the button is clicked:
   - A message is set using `setMessage`
   - A type is set using `setType`
3. The **Notification component**:
   - Checks if a message exists  
   - Displays a colored alert based on the type  

---

## 📸 Example Scenarios  

- ✅ **Available Train →** "Ticket booked successfully!"  
- ⚠️ **Few Seats →** "Only few seats left!"  
- ❌ **Full Train →** "Booking failed! Train full."  

---

