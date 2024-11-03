import React from "react";
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

const Home = ({ userLoggedIn }) => {
    return (
        <main>
            {/* First Section */}
            <section style={bgImage} className="min-h-screen w-full relative flex items-center justify-center">
                <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
                    <h1 className="text-6xl md:text-7xl font-bold text-lime-50 mb-4">
                        Shelf <span className="text-red-800">Wise</span>
                    </h1>
                    <p className="text-lg md:text-xl text-lime-100">
                        Your gateway to a world of books and knowledge.
                    </p>
                </div>
            </section>

            {/* About Us Section */}
            <section className=" bg-gray-100">
                <div>
                    <AboutUsSection />
                </div>
            </section>

            {/* Admin Section */}
            {userLoggedIn && (
                <section className="py-16 bg-white">
                    <div className="container mx-auto">
                        <AdminSection />
                    </div>
                </section>
            )}

            {/* Books Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto">
                    <BooksSection />
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <CategorySection />
                </div>
            </section>

            {/* Authors Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto">
                    <AuthorsSection />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default Home;
