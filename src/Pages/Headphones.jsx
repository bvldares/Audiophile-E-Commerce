import { Link,useParams } from "react-router-dom"
import data from "../data.json"
import ProductNavigator from "../Components/ProductNavigator"
import Outro from "../Components/Outro"



export default function Headphones(props){
    let {productCategory} = useParams()

    const productArray = data.filter(product => product.category === productCategory )

    const productEl = productArray.map(element =>{
        return ( 
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-32" key={element.id}>
                <img className="rounded-lg w-full lg:w-1/2" src={props.size == "desktop" ? element.categoryImage.desktop : props.size == "tablet" ? element.categoryImage.tablet : element.categoryImage.desktop} alt={element.name} />
            
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:object-cover lg:justify-center">
                    {element.new && <h3 className="tracking-[10px] uppercase text-terra mb-6 md:mb-4">New product</h3>}
                    <h2 className="text-3xl md:text-[40px] leading-[44px] tracking-[1.4px] font-bold uppercase mb-6 md:mb-8">{element.name}</h2>
                    <p className="max-w-[570px]">{element.description}</p>
                    <Link className="mt-6 lg:mb-10 px-8 py-4 uppercase bg-terra hover:bg-terra-light inline-block text-white" to={`/${element.slug}`}>See product</Link>
                </div>
            </div>
        )
    })

    


    return (
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 xl:px-0  mt-[64px] md:mt-30 lg:mt-40">
        
        <div className="flex flex-col-reverse gap-32 lg:gap-40 ">
            {productEl}
        </div>

       
        <section className="mb-32 mt-36  lg:mt-[220px] lg:mb-40">
            <ProductNavigator/>
        </section>

        <div className="my-24">
            <Outro  size={props.size} />
        </div>

       </div>
    )
}