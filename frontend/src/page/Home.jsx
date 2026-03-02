import React from 'react'
import Layout from '../layout/Layout'
import Hero from '../Components/ui/hero/Hero'
import Deal from '../Components/ui/dealOffer/Deal'
import Inquiry from '../Components/ui/section-inquiry/Inquiry'
import Recommend from '../Components/ui/recommend/Recommend'
import Services from '../Components/ui/services/Services'
import Supplier from '../Components/ui/supplier/Supplier'
import Newspaper from '../Components/global/NewsPaper'
import Navbar from '../Components/global/Navbar'
import CategorySection from '../Components/ui/category-section/CategorySection'
import img2 from "../assets/img/tech/image 28.png";
import img3 from "../assets/img/tech/image 28.png";
import img4 from "../assets/img/tech/image 32.png";
import img5 from "../assets/img/tech/image 33.png";
import img6 from "../assets/img/tech/image 34.png";
import img7 from "../assets/img/tech/image 35.png";
import img8 from "../assets/img/tech/image 85.png";
import img9 from "../assets/img/tech/image 86.png";
import outdoorBanner from '../assets/img/image 92.png'; 
import techBanner from '../assets/img/tech/image 98.png';
const Home=()=>{
    const outdoorItems = [ { title: "Soft chairs", price: "19", img: img2 },
        { title: "Kitchen Mixer", price: "100", img: img3 },
        { title: "Soft chairs", price: "19", img: img4 },
        { title: "Kitchen Mixer", price: "100", img: img5 },
        { title: "Soft chairs", price: "19", img: img6 },
        { title: "Kitchen Mixer", price: "100", img: img7 },
        { title: "Soft chairs", price: "19", img: img8 },
        { title: "Kitchen Mixer", price: "100", img: img9 },];
    const techItems = [{ title: "Soft chairs", price: "19", img: img2 },
                { title: "Kitchen Mixer", price: "100", img: img3 },
                { title: "Soft chairs", price: "19", img: img4 },
                { title: "Kitchen Mixer", price: "100", img: img5 },
                { title: "Soft chairs", price: "19", img: img6 },
                { title: "Kitchen Mixer", price: "100", img: img7 },
                { title: "Soft chairs", price: "19", img: img8 },
                { title: "Electric Kettle", price: "100", img: img9 },];
    return(
        <div style={{backgroundColor:'#F7FAFC'}}>
        <Layout>
            <Navbar/>
            <Hero/> 
            <Deal/> 
            <CategorySection 
                title="Home and outdoor" 
                bannerImg={outdoorBanner} 
                items={outdoorItems} 
            />

            <CategorySection 
                title="Consumer electronics" 
                bannerImg={techBanner} 
                items={techItems} 
            />
            <Inquiry/>
            <Recommend/>
            <Services/>
            <Supplier/>
            <Newspaper/>
        </Layout>
        </div>
    )
}
export default Home