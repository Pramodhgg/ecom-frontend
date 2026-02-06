# E-Commerce Frontend Application

A modern, full-featured e-commerce frontend application built with React, Redux Toolkit, and Tailwind CSS. This application provides a complete online shopping experience with user authentication, product browsing, cart management, secure checkout, and a comprehensive admin dashboard.

## 🚀 Features

### Customer Features

- **User Authentication**: Secure login and registration system
- **Product Browsing**: Browse products with advanced filtering and pagination
- **Shopping Cart**: Add, remove, and manage items with quantity controls
- **Checkout Process**: Multi-step checkout with address management
- **Payment Integration**: Support for multiple payment methods (Stripe, PayPal)
- **Order Confirmation**: Real-time order status and confirmation
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop

### Admin Features

- **Dashboard**: Overview of key metrics and statistics
- **Product Management**: Add, edit, and delete products with image uploads
- **Category Management**: Organize products into categories
- **Order Management**: View and update order statuses
- **Seller Management**: Manage seller accounts and permissions
- **Data Grid**: Advanced table views with sorting and filtering

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.3
- **Build Tool**: Vite 7.3.1
- **State Management**: Redux Toolkit 2.11.2
- **Routing**: React Router DOM 7.12.0
- **Styling**: Tailwind CSS 4.1.18
- **UI Components**:
  - Material-UI (MUI) 7.3.7
  - Headless UI 2.2.9
- **Forms**: React Hook Form 7.71.1
- **HTTP Client**: Axios 1.13.2
- **Notifications**: React Hot Toast 2.6.0
- **Payment Processing**:
  - Stripe React 5.4.1
  - Stripe.js 8.6.3
- **Carousels**: Swiper 12.0.3
- **Icons**: React Icons 5.5.0

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16.x or higher
- **npm** or **yarn**: Latest version
- **Backend API**: This frontend requires a backend API to be running

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd FE
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   VITE_BACK_END_URL=http://localhost:5000
   ```

   Replace `http://localhost:5000` with your backend API URL.

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Access the application**

   Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
FE/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── api/               # API configuration
│   │   └── api.js         # Axios instance with base URL
│   ├── assets/            # Images, icons, and static files
│   │   └── sliders/       # Carousel images
│   ├── components/
│   │   ├── admin/         # Admin dashboard components
│   │   │   ├── dashboard/ # Dashboard overview and stats
│   │   │   ├── products/  # Product management
│   │   │   ├── sellers/   # Seller management
│   │   │   ├── categories/# Category management
│   │   │   └── orders/    # Order management
│   │   ├── auth/          # Authentication components
│   │   │   ├── LogIn.jsx
│   │   │   └── Register.jsx
│   │   ├── cart/          # Shopping cart components
│   │   │   ├── Cart.jsx
│   │   │   ├── CartEmpty.jsx
│   │   │   ├── ItemContent.jsx
│   │   │   └── SetQuantity.jsx
│   │   ├── checkout/      # Checkout process components
│   │   │   ├── Checkout.jsx
│   │   │   ├── AddressInfo.jsx
│   │   │   ├── PaymentForm.jsx
│   │   │   ├── StripePayment.jsx
│   │   │   ├── PaypalPayment.jsx
│   │   │   └── OrderSummary.jsx
│   │   ├── home/          # Home page components
│   │   │   ├── Home.jsx
│   │   │   └── HeroBanner.jsx
│   │   ├── products/      # Product listing and filtering
│   │   │   ├── Products.jsx
│   │   │   └── Filter.jsx
│   │   ├── shared/        # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Paginations.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── PrivateRoute.jsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useCategoryFilter.js
│   │   ├── useOrderFilter.js
│   │   └── useProductFilter.js
│   ├── store/             # Redux store configuration
│   │   ├── actions/       # Redux actions
│   │   │   └── index.js
│   │   └── reducers/      # Redux reducers
│   │       ├── store.js
│   │       ├── authReducer.js
│   │       ├── cartReducer.js
│   │       ├── ProductReducer.js
│   │       ├── orderReducer.js
│   │       ├── adminReducer.js
│   │       └── sellerReducer.js
│   ├── utils/             # Utility functions
│   │   ├── constant.js
│   │   ├── formatPrice.js
│   │   ├── truncateText.js
│   │   └── index.js
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite configuration
└── README.md
```

## 🔑 Key Features Explained

### Authentication & Authorization

- JWT-based authentication with secure cookie storage
- Protected routes for authenticated users
- Admin-only routes for administrative functions
- Public routes for login and registration

### State Management

The application uses Redux Toolkit for centralized state management with the following slices:

- **Auth**: User authentication state
- **Cart**: Shopping cart items and quantities
- **Products**: Product data and filters
- **Orders**: Order history and status
- **Admin**: Admin dashboard data
- **Sellers**: Seller management state

### Payment Integration

- **Stripe**: Credit/debit card payments
- **PayPal**: PayPal account payments
- Secure payment processing with PCI compliance
- Order confirmation and tracking

### Admin Dashboard

- Overview dashboard with key metrics
- Product CRUD operations with image upload
- Order management with status updates
- Category organization
- Seller account management
- Data grid with advanced filtering and sorting

## 🎨 Styling

The application uses a combination of:

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Material-UI**: Pre-built React components
- **Custom CSS**: Additional styling for specific components

## 🔒 Security

- **Environment Variables**: Sensitive data stored in environment variables
- **HTTP-Only Cookies**: Secure authentication token storage
- **Protected Routes**: Route guards for authenticated and admin users
- **Input Validation**: Form validation with React Hook Form
- **XSS Protection**: React's built-in XSS protection

## 🌐 API Integration

The application communicates with a backend API using Axios. The base URL is configured through environment variables:

```javascript
// src/api/api.js
const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
  withCredentials: true,
});
```

All API calls include credentials for cookie-based authentication.

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Mobile devices**: 320px and up
- **Tablets**: 768px and up
- **Desktops**: 1024px and up
- **Large screens**: 1280px and up

## 🚧 Development Guidelines

### Code Style

- Follow ESLint configuration
- Use functional components with hooks
- Maintain component modularity
- Keep components focused and single-purpose

### Naming Conventions

- Components: PascalCase (e.g., `ProductCard.jsx`)
- Files: camelCase for utilities, PascalCase for components
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### Component Structure

```jsx
import React from 'react';
// Import statements

const ComponentName = ({ props }) => {
  // State and hooks

  // Handler functions

  // Render
  return (
    // JSX
  );
};

export default ComponentName;
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Kill the process using the port
   kill -9 $(lsof -ti:5173)
   ```

2. **Module not found errors**

   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**
   ```bash
   # Clear Vite cache
   rm -rf .vite
   npm run build
   ```

## 📈 Performance Optimization

Current optimizations:

- **Image Optimization**: WebP format used for slider images
- **Bundle Size**: Vite's optimized production builds with automatic code splitting
- **Fast Refresh**: Vite's HMR for instant development feedback

## 🔧 Technical Improvements & Refactoring Opportunities

The following improvements could enhance code quality and maintainability:

### State Management

- **Migrate to RTK Slices**: Currently using traditional Redux reducers with action creators. Refactor to use `createSlice` from Redux Toolkit for cleaner, more maintainable code
- **Implement Redux Toolkit Query or Thunks**: Replace manual `useEffect` API calls with `createAsyncThunk` for better async state management
- **Add Redux Persist**: Replace manual `localStorage` handling with redux-persist library for automatic state persistence

### Code Organization

- **Implement Route-Based Code Splitting**: Add `React.lazy()` and `Suspense` for dynamic imports to reduce initial bundle size
- **Create Reusable UI Components**: Extract common button variants, error messages, and loading states into a shared component library
- **Add React.memo**: Optimize rendering of expensive components like product cards and data grids

### Performance

- **Implement useMemo and useCallback**: Prevent unnecessary re-renders in complex components
- **Add Image Lazy Loading**: Implement lazy loading for product images using Intersection Observer or native loading="lazy"

### Current Architecture

```javascript
// Current: Traditional Redux Pattern
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": // ...
  }
};

// Improvement: RTK Slice Pattern
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: { addCart: (state, action) => {} },
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing-fast build tool
- All contributors and package maintainers

## 📞 Support

For support, email support@example.com or join our Slack channel.

## 🗺️ Roadmap

- [ ] Add wishlist functionality
- [ ] Implement product reviews and ratings
- [ ] Add social authentication (Google, Facebook)
- [ ] Implement real-time notifications
- [ ] Add analytics dashboard
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme
- [ ] Progressive Web App (PWA) features

---

Made with ❤️ using React and Vite
