import React from "react";
import bgImagee from "./bgImage.png";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import BooksSection from "../BooksSection/BooksSection";
import CategorySection from "../CategoriesSection/CategorySection";
import AuthorsSection from "../AuthorsSection/AuthorsSection";
import Footer from '../Footer/Footer';


const bgImage ={
    backgroundImage: `url(${bgImagee})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
};

const Home =()=>{
    return   (
        <main>
            {/* First Section */}
            {/* Bg */}
            <section style={bgImage} className="min-h-screen w-full relative">
                <div  className="container"> 
                    {/* text content section */}
                    <div className="flex items-center justify-start min-h-[80vh]"> 
                        <div className="text-lime-50 text-center">
                            <h1 className="text-7xl font-bold">
                                Shelf <span className="text-red-800">Wise</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section><AboutUsSection/></section>
            <section><BooksSection/></section>
            <section><CategorySection/></section>
            <section><AuthorsSection/></section>
            <Footer/>
        </main>
    );
};
export default Home;