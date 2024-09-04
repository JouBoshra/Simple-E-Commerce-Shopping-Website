## 🛍️ E-Commerce Shopping Website

Welcome to our modern and responsive e-commerce shopping platform! This website is designed to provide users with a seamless and engaging shopping experience. Below, you'll find a description of all the exciting features and functionalities of the website:

## 🌟 Key Features

1. Responsive Design 📱💻
   The entire website is fully responsive, meaning it adapts smoothly to any screen size, whether it's on a mobile device, tablet, or desktop. Enjoy a seamless shopping experience on any device!
2. Modern Product Grid 🛒
   Products are displayed in a sleek and modern grid layout, making it easy for customers to browse through items. The grid adjusts automatically based on the screen size for optimal viewing.
3. Interactive Product Cards ✨
   Each product card features an elegant hover effect that slightly scales the product and adds a shadow, giving users a premium feel as they explore items in the store.
   🎨 Dynamic Content: The product cards display the name, price, and image of each item, allowing customers to quickly assess their choices.
4. Add to Cart Functionality 🛒➕
   Users can effortlessly add products to their cart with a single click. The "Add to Cart" button is styled with modern hover effects for an interactive shopping experience.
   Items in the cart are automatically saved in localStorage, ensuring that the cart persists even if the page is refreshed.
5. Shopping Cart 🛍️
   The cart displays a list of all selected items, including the product name, price, and quantity.
   Users can remove items from the cart with a simple click, and the total price is updated automatically.
   The cart summary section is designed to be user-friendly and informative, giving a quick overview of what the user has selected.
6. Checkout Page 🏦💳
   After clicking "Checkout," users are taken to a dedicated Checkout Page that displays a summary of the items they added to their cart.
   The total price is calculated and displayed dynamically, ensuring transparency for the buyer.
   ✅ Return to Home Button: The checkout page includes a creatively animated "Return to Home" button, which smoothly takes users back to the home page if they wish to continue shopping.
7. Smooth Animations 🎬
   The website incorporates smooth scale-in-out animations on interactive elements like buttons and hover effects, providing a polished and modern user experience.
   These animations make the website feel more dynamic and engaging without being overwhelming.
8. Intuitive Filtering & Sorting 🔍🧹
   Filter by Size: Users can filter products based on available sizes, helping them find exactly what they need with ease.
   Sort by Price: Users can sort products by price, either from low to high or high to low, simplifying the process of finding the right product at the right price.
9. Efficient State Management 💾⚙️
   The website uses Redux for state management, ensuring that the cart and product data are efficiently handled across the entire application.
   Actions like adding to the cart, removing items, and filtering/sorting products are all managed seamlessly with Redux, keeping the app performant and scalable.
10. Routing with React Router 🚦
    React Router is used to handle client-side navigation, ensuring smooth transitions between the home, product, and checkout pages without needing to reload the page.
    The app features modern route handling to make navigation intuitive for users.

## 🚀 How to Run the Project

Install Dependencies: Run npm install to install the required dependencies.
Start the Development Server: Run npm start to launch the website on localhost:3000.
Build the App: For production, use npm run build to create a production-ready build of the website.

## 🛠️ Tech Stack

React ⚛️
Redux 🛠️
React Router DOM 🚦
Bootstrap 🎨
CSS Animations 🎬

## 🎉 Future Enhancements

User Authentication 🔒: Implement a login system so users can create accounts and save their cart across devices.
Product Search 🔍: Add a search feature to help users quickly find the items they are looking for.
Order History 📜: Allow users to view their previous orders and track current shipments.

## Setup Guide

1. Clone repository.
2. Install dependencies by running `npm run install`.
3. Run json-server `npx json-server -p 8000 db.json` for products json data.
4. Run application by running `npm run start`.
