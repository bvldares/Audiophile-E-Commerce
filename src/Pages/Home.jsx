import { Link } from "react-router-dom"
import ProductNavigator from "../Components/ProductNavigator"
import Outro from "../Components/Outro"


export default function Home(props){
    const {size} = props
    

    return (
        <main>
            <section className="bg-light-black">
                <div className={` max-w-[1100px] mx-auto  flex flex-col items-center  lg:items-start lg:text-left pt-14 pb-28 px-6 lg:px-10 xl:px-0 text-center text-white
                     bg-[url('/assets/home/mobile/image-header.jpg')] bg-[center] bg-cover bg-no-repeat bg-origin-content lg:bg-contain lg:bg-right
                     md:bg-[url('/assets/home/tablet/image-header.jpg')] 
                     lg:bg-[url('/assets/home/desktop/image-header.jpg')]" 
                `}>
                    <span className="tracking-[10px] text-[.875rem] uppercase opacity-50">New Product</span>
                    <h1 className="text-4xl md:text-[56px] md:leading-[58px] font-bold tracking-wider uppercase mt-4 mb-6">XX99 Mark II <br /> Headphones</h1>
                    <p className="max-w-[350px]">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <Link className="px-8 py-3 mt-6 bg-terra uppercase tracking-wide font-semibold" to="/xx99-mark-one-headphones">See product</Link>
                </div>
            </section>

            <div className="max-w-[1100px] mx-auto px-6 md:px-10 xl:px-0">
            <section className="mt-20 mb-[120px] md:my-[96px] lg:mt-[160px] lg:mb-[96px]">
                <ProductNavigator/>
            </section>

            <section className="py-[55px] lg:py-[50px] px-6 flex flex-col items-center lg:flex lg:flex-row lg:justify-between  bg-terra rounded-lg  text-white overflow-hidden lg:px-20"  >
                <img className="max-h-[207px] md:max-h-[233px] lg:max-h-[470px] lg:relative lg:top-16" src={`/assets/home/${size}/image-speaker-zx9.png`} alt="" />
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <h1 className="mt-8 mb-6 text-4xl md:text-[56px] font-semibold md:leading-[58px]  ">ZX9 <br /> SPEAKER</h1>
                <p className="max-w-[350px]">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Link className="py-3 px-6 bg-black uppercase tracking-[1px] mt-6 text-[13px] hover:bg-[#4c4c4d]" to="/zx9-speaker">See product</Link>
                </div>
            </section>

            <section className="my-6 md:my-8 rounded-lg lg:my-[48px] py-24 pl-6 md:pl-16 lg:pl-24 bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-no-repeat bg-center bg-cover md:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] ">
                <h2 className="text-[28px] uppercase font-bold mb-8 tracking-[2px] ">ZX7 SPEAKER</h2>
                <Link className="py-4 px-6 uppercase inline-block bg-transparent border font-semibold hover:bg-black hover:text-white " to="/zx7-speaker">see product</Link>
            </section>

            <section className="flex flex-col md:flex-row justify-between gap-4">
                <img className="rounded-lg w-[100%] md:w-[47%] md:max-h-[320px] object-cover" src={`assets/home/mobile/image-earphones-yx1.jpg`} alt="yx1" />
                <div className="px-6 py-10 bg-grey sm:px-10 sm:py-24 rounded-[8px] flex flex-col justify-center items-start md:w-[50%] lg:pl-24" >
                    <h2 className="text-3xl font-bold tracking-[2px] mb-8">YX1 EARPHONES</h2>
                    <Link className="py-4 px-6 uppercase inline-block bg-transparent border font-semibold hover:bg-black hover:text-white " to="/yx1-earphones">see product</Link>
                </div>
            </section>

            <div className="my-24">
                <Outro  size={size} />
            </div>

            </div>
        </main>
    )
}