import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Doctors from "./pages/Doctors";
import BookConsultation from "./pages/BookConsultation";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import FloatingConsultButton from "./components/FloatingConsultButton";
import "./index.css";
import { Toaster } from "react-hot-toast";
import ConsultationTracker from "./pages/ConsultationTracker";
import Profile from "./pages/Profile";
import Appointments from "./pages/Appointments";
import PaymentGateway from './pages/PaymentGateway';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTopButton />
          <div className="min-h-screen flex flex-col bg-surface-50">
            <Navbar />
            <main className="flex-grow scrollable">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/appointments" element={<Appointments />} />
                  <Route
                    path="/book-consultation"
                    element={<BookConsultation />}
                  />
                  <Route
                    path="/consultation/:id"
                    element={<ConsultationTracker />}
                  />
                  <Route
                    path="/consultation/"
                    element={<ConsultationTracker />}
                  />
                  <Route path="/payment" element={<PaymentGateway />} />
                </Routes>
              </AnimatePresence>
            </main>
            <FloatingConsultButton />
            <ScrollToTopButton />
          </div>
          <Footer />
        </Router>
        <Toaster
          position="top-right"
          containerStyle={{
            top: 80,
            right: 20,
          }}
          toastOptions={{
            style: {
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            },
          }}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
