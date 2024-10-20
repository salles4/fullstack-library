import React from "react";
import bgImagee from "./bgImage.png";
import Navbar from "../Navbar/Navbar";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import BooksSection from "../BooksSection/BooksSection";
import CategorySection from "../CategoriesSection/CategorySection";
import AuthorsSection from "../AuthorsSection/AuthorsSection";

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
            <section style={bgImage} className="min-h-[900px] w-full">
                <div  className="container">
                    {/* NavBar section */}
                   <Navbar/> 
                    {/* Bg */}
                    <div className="grid ">
                    {/* text content section */}
                        <div className="text-lime-50 mt-[500px]" >
                            <h1 className="text-7xl font-bold">Shelf <span className="text-red-800" >Wise</span></h1>
                        </div>
                    </div>
                </div>
            </section>

            <section><AboutUsSection/></section>
            <section><BooksSection/></section>
            <section><CategorySection/></section>
            <section><AuthorsSection/></section>
        </main>
    );
};
export default Home;