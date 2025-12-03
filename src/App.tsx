import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/layouts/navbar";
import { Footer } from "./pages/layouts/footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { ThemeToggle } from "./components/ThemeToggle";

const links = [
    { name: "Home", page: <Home />, path: '/' },
    { name: "About", page: <About />, path: '/about' },
    { name: "Contact", page: <Contact />, path: '/contact' },
];

export const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                {/* Theme Toggle */}
                    <ThemeToggle/>
                {/* Background Effects */}
                {/* Navbar */}
                    <Navbar />
                {/* Main Content */}
                <main>
                    <Routes>
                        {links.map((link, key) => {
                            return (
                                <Route key={key} path={link.path} element={link.page} />
                            );
                        })}
                    </Routes>


                </main>

                {/* Footer */}
                <Footer />
            </div>
        </BrowserRouter>
    );

}

