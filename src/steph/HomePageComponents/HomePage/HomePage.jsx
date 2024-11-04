import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bgImagee from "./database.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import BooksSection from "../BooksSection/BooksSection";
import CategorySection from "../CategoriesSection/CategorySection";
import AuthorsSection from "../AuthorsSection/AuthorsSection";
import AdminSection from "../AdminSection/AdminSection";
import Footer from '../Footer/Footer';

const bgImage = {
    backgroundImage: `url(${bgImagee})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const Home = ({ userLoggedIn }) => {
    const sectionsRef = useRef([]);
    const [visibleSections, setVisibleSections] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const newVisibleSections = sectionsRef.current.map((section, index) => {
                if (!section) return false;
                const sectionTop = section.getBoundingClientRect().top;
                return sectionTop < window.innerHeight * 0.75; // 75% of viewport height
            });
            setVisibleSections(newVisibleSections);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check in case sections are already in view on load
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main>
            {/* First Section */}
            <motion.section
                style={bgImage}
                className="min-h-screen w-full relative flex items-center justify-center"
                initial="hidden"
                animate={visibleSections[0] ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5 }}
                ref={(el) => (sectionsRef.current[0] = el)}
            >
                <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-lime-50 mb-4">
                        Shelf <span className="text-red-800">Wise</span>
                    </h1>
                    <p className="text-lg md:text-xl text-lime-100">
                        Your gateway to a world of books and knowledge.
                    </p>
                </div>
            </motion.section>

            {/* About Us Section */}
            <motion.section
                className="bg-gray-100"
                initial="hidden"
                animate={visibleSections[1] ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5 }}
                ref={(el) => (sectionsRef.current[1] = el)}
            >
                <div>
                    <AboutUsSection />
                </div>
            </motion.section>

            {/* Admin Section */}
            {userLoggedIn && (
                <motion.section
                    className="py-16 bg-white"
                    initial="hidden"
                    animate={visibleSections[2] ? "visible" : "hidden"}
                    variants={fadeInVariants}
                    transition={{ duration: 0.5 }}
                    ref={(el) => (sectionsRef.current[2] = el)}
                >
                    <div className="container mx-auto">
                        <AdminSection />
                    </div>
                </motion.section>
            )}

            {/* Books Section */}
            <motion.section
                className="py-16 bg-gray-100"
                initial="hidden"
                animate={visibleSections[userLoggedIn ? 3 : 2] ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5 }}
                ref={(el) => (sectionsRef.current[userLoggedIn ? 3 : 2] = el)}
            >
                <div className="container mx-auto">
                    <BooksSection />
                </div>
            </motion.section>

            {/* Categories Section */}
            <motion.section
                className="py-16 bg-white"
                initial="hidden"
                animate={visibleSections[userLoggedIn ? 4 : 3] ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5 }}
                ref={(el) => (sectionsRef.current[userLoggedIn ? 4 : 3] = el)}
            >
                <div className="container mx-auto">
                    <CategorySection />
                </div>
            </motion.section>

            {/* Authors Section */}
            <motion.section
                className="py-16 bg-white"
                initial="hidden"
                animate={visibleSections[userLoggedIn ? 5 : 4] ? "visible" : "hidden"}
                variants={fadeInVariants}
                transition={{ duration: 0.5 }}
                ref={(el) => (sectionsRef.current[userLoggedIn ? 5 : 4] = el)}
            >
                <div className="container mx-auto">
                    <AuthorsSection />
                </div>
            </motion.section>

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Home;
