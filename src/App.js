import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootElement from "./components/RootElement";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import { RouterProvider } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./components/ErrorPage";

const router = BrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <div>dd</div>;
  // return <RouterProvider router={router} />;
}

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<RootElement />} />
//         <Route path="/welcome" element={<Welcome />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
