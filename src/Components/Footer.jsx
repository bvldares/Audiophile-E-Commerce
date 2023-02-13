import { Link } from "react-router-dom";

export default function Footer(){
    return (
        
        <footer className="bg-light-black text-white">
            <div className="max-w-[1100px] pt-12 pb-9 px-6 mx-auto flex flex-col items-center md:items-start md:p-10">
                <div className="text-center w-full md:text-left lg:flex items-center justify-between">
                    <Link to="/"><img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" /></Link>
                    <ul className="flex flex-col gap-4 my-10 uppercase tracking-[2px] font-bold md:flex-row">
                        <li className="hover:text-terra"><Link to="/">Home</Link></li>
                        <li className="hover:text-terra"><Link to="/headphones">Headphones</Link></li>
                        <li className="hover:text-terra"><Link to="speakers">Speakers</Link></li>
                        <li className="hover:text-terra"><Link to="earphones">Earphones</Link></li>
                    </ul>
                </div>


                <div className="flex w-full flex-col items-center md:flex-row md:justify-between ">
                    <div>
                    <p className="text-center opacity-50 md:text-left max-w-[570px]">Audiophile is an all in one stop to fulfill your audio needs. 
                        We're a small team of music lovers and sound specialists 
                        who are devoted to helping you get the most out of personal audio. 
                        Come and visit our demo facility - we’re open 7 days a week.</p>

                    <p className="my-10 opacity-50 text-center md:text-left md:self-end md:mb-0">Copyright 2021. All Rights Reserved</p>
                    </div>
                    
                    <ul className="flex gap-4 md:self-end lg:self-center">
                        <li><a href="#"><img className="min-h-[24px] min-w-[24px]" src="/assets/shared/desktop/icon-facebook.svg" alt="" /></a></li>
                        <li><a href="#"><img className="min-h-[24px] min-w-[24px]" src="/assets/shared/desktop/icon-twitter.svg" alt="" /></a></li>
                        <li><a href="#"><img className="min-h-[24px] min-w-[24px]" src="/assets/shared/desktop/icon-instagram.svg" alt="" /></a></li>
                    </ul>
                    
                </div>
            </div>
        </footer>
    )
}