import { useState } from "react"
import { Link,useParams } from "react-router-dom"
import data from "../data.json"
import { nanoid } from 'nanoid'
import Outro from "../Components/Outro"
import ProductNavigator from "../Components/ProductNavigator"


export default function ProductDetail(props){
    let {productSlug} = useParams()
    const[count, setCount] = useState(1)
    

    const currentProduct = data.find(prod => prod.slug == productSlug)

    const otherProducts = currentProduct.others.map(prod=>{
        return(
            <div className="flex flex-col items-center" key={nanoid()}>
                <img className="rounded-lg w-full" src={props.size == "desktop" ? prod.image.desktop : props.size == "tablet" ? prod.image.tablet : prod.image.mobile } alt={prod.name} />
                <h3 className="font-bold uppercase my-8 md:mt-10 text-2xl tracking-[1.7px] ">{prod.name}</h3>
                <Link className="py-[15px] px-8 text-white bg-terra hover:bg-terra-light tracking-[1px]" to={`/${prod.slug}`}>SEE PRODUCT</Link>
            </div>
        )
    })

   



    return (
        <main className="px-6 md:px-10 xl:px-0 max-w-[1100px] mx-auto lg:mt-20">
            <Link className="py-3 inline-block opacity-50" to="/">Go Back</Link>
            <section className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-16 lg:gap-8 mb-20 md:mb-[120px] lg:mb-40"  > {/*Hero Section */}
                <img className="rounded-lg md:max-w-[281px] lg:max-w-[540px]"  src={props.size === "desktop" ? currentProduct.image.desktop : props.size == "tablet" ? currentProduct.image.tablet : currentProduct.image.mobile} alt="product img" />
                <div className="flex flex-col justify-center ">
                    {currentProduct.new && <h3 className="text-terra tracking-[10px]">NEW PRODUCT</h3>}
                    <h1 className="text-3xl lg:text-[42px] lg:leading-10 font-bold tracking-[1.4px] my-6 md:mt-4 w-2/3 uppercase    " >{currentProduct.name}</h1>
                    <p className="max-w-[459px]">{currentProduct.description}</p>
                    <h3 className="mt-6 mb-8 md:my-8 text-lg font-bold tracking-[1.3px]">$ {currentProduct.price.toLocaleString('US','us')}</h3>
                   <div className="flex gap-4">
                        <div className="flex justify-between">
                            <button className="p-4" onClick={()=>setCount(p=>p == 1 ? 1 : p-1 )}>-</button>
                            <p className="mx-5 w-fit p-4">{count}</p>
                            <button className="p-4" onClick={()=>setCount(p=>p+1)}>+</button>
                        </div>
                        <button className="px-8 py-4 uppercase bg-terra hover:bg-terra-light text-white font-semibold tracking-[1px] " onClick={()=>props.addToCart(currentProduct, count)}>add to cart</button>
                   </div>
                </div>
            </section>

            <section className="flex flex-col gap-20 md:gap-[120px] mb-[120px] lg:flex-row"> {/*Feauture Section */}
                <div className="lg:basis-2/3">
                    <h3 className="text-2xl md:text-[2rem] font-bold tracking-[1.1px] mb-6 md:mb-8">FEATURES</h3>
                    <p>{currentProduct.features}</p>
                </div>
                <div className="md:flex justify-between lg:block lg:basis-1/3">
                    <h3 className="text-2xl md:text-[2rem] font-bold tracking-[1.1px] mb-6 md:mb-8">IN THE BOX</h3>
                    <ul className="flex flex-col gap-3" >
                        {currentProduct.includes.map(item=><li className="capitalize" key={nanoid()}> <span className="text-terra font-bold mr-5">{item.quantity}x</span>{item.item}</li>)}
                    </ul>
                </div>
            </section>

            <section className="flex flex-col gap-4 md:grid md:grid-cols-2"> {/*Gallery Section */}
                <img className="md:row-start-2 h-full object-cover w-full rounded-lg" src={currentProduct.gallery.first.mobile} alt="product side img" />
                <img img className="md:row-start-1h-full object-cover w-full rounded-lg" src={currentProduct.gallery.second.mobile} alt="product side img" />
                <img className="md:row-span-2 md:col-start-2 object-cover h-full w-full rounded-lg" src={currentProduct.gallery.third.mobile} alt="product side img" />  
            </section>

            <section className="my-[120px] lg:my-40" > {/*Also Like Section */}
                <h3 className="text-center text-2xl md:text-[32px] uppercase font-bold mb-10 md:mb-14 lg:mb-16">You may also like</h3>
                <div className="flex flex-col md:flex-row md:justify-between md:gap-3 gap-14">
                  {otherProducts}  
                </div>
            </section>

            <section className="mt-[170px] md:mt-[200px] lg:mt-[250px]">
                <ProductNavigator />
            </section>

            <section className="my-[120px] lg:my-[160px]">
                <Outro size={props.size} />
            </section>

        </main>
    )    
}