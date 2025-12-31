import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hero from "../assets/hero_transparent.png";
export default function HomePage () { 
    return ( 
        <div className="w-full">
        < Carousel showThumbs={false} infiniteLoop={true} showStatus={false} showArrows={true}>
        <div className="bg-[#23A6F0] flex flex-col items-center text-center py-12 px-6 md:flex-row md:justify-between md:px-48 " >
            <div className="flex flex-col gap-6 md:items-start md:text-left items-center text-center ">
             <h5 className="text-white font-bold tracking-[0.1em] text-[14px] mb-[30px]">
                SUMMER 2020
                </h5>
            <h1 className="text-white text-[40px] font-bold uppercase leading-[50px] mb-[30px]">
                NEW COLLECTİON 
                </h1>
            <p className="text-white text-[20px] max-w-[280px] mb-[30px] ">
                We know how large objects will act,but things on a small scale
                </p>
            <button className="bg-[#2DC071] text-white px-10 py-4 rounded-md text-xl font-bold uppercase transition-transform active:scale-95">
                SHOP NOW
                </button>
                </div>
                <div className="mt-8 w-full flex justify-center">
                    <img
                    src={hero}
                    className="object-contain h-[400px]"
                    alt="Summer Collection" />
                    </div>
                  </div> 
                  </Carousel>
                  </div>
                  
    );
}
