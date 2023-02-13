import { useState } from "react"
import { Link,useParams } from "react-router-dom"
import data from "../data.json"
import { nanoid } from 'nanoid'
import Outro from "../Components/Outro"


export default function ProductDetail(props){
    let {productSlug} = useParams()
    const[count, setCount] = useState(0)

    const currentProduct = data.find(prod => prod.slug == productSlug)

    const otherProducts = currentProduct.others.map(prod=>{
        return(
            <div key={nanoid()}>
                <img src={props.size == "desktop" ? prod.image.desktop : props.size == "tablet" ? prod.image.tablet : prod.image.mobile } alt={prod.name} />
                <h3>{prod.name}</h3>
                <Link to={`/${prod.slug}`}>SEE PRODUCT</Link>
            </div>
        )
    })



    return (
        <main>
            <Link className="py-3 inline-block opacity-50" to="/">Go Back</Link>
            <section> {/*Hero Section */}
                <img className="rounded-lg" src={props.size === "desktop" ? currentProduct.image.desktop : props.size == "tablet" ? currentProduct.image.tablet : currentProduct.image.mobile} alt="product img" />
                <div>
                    {currentProduct.new && <h3 className="text-terra tracking-[10px]">NEW PRODUCT</h3>}
                    <h1 className="text-3xl lg:text-[42px] lg:leading-7 font-bold tracking-[1.4px] my-6 md:mt-4 w-2/3" >{currentProduct.name}</h1>
                    <p className="max-w-[445px]">{currentProduct.description}</p>
                    <h3 className="mt-6 mb-8 md:my-8 text-lg font-bold tracking-[1.3px]">$ {currentProduct.price.toLocaleString('US','us')}</h3>
                   <div className="flex gap-4">
                        <div className="flex justify-between">
                            <button className="p-4" onClick={()=>setCount(p=>p-1)}>-</button>
                            <p className="mx-5 w-fit p-4">{count}</p>
                            <button className="p-4" onClick={()=>setCount(p=>p+1)}>+</button>
                        </div>
                        <button className="px-8 py-4 uppercase bg-terra hover:bg-terra-light text-white font-semibold tracking-[1px]" >add to cart</button>
                   </div>
                </div>
            </section>

            <section> {/*Feauture Section */}
                <div>
                    <h3 className="text-2xl md:text-[2rem] font-bold tracking-[1.1px] mb-6 md:mb-8">FEATURES</h3>
                    <p>{currentProduct.features}</p>
                </div>
                <div>
                    <h3 className="text-2xl md:text-[2rem] font-bold tracking-[1.1px] mb-6 md:mb-8">IN THE BOX</h3>
                    <ul className="flex flex-col gap-3" >
                        {currentProduct.includes.map(item=><li className="capitalize" key={nanoid()}> <span className="text-terra font-bold mr-5">{item.quantity}x</span>{item.item}</li>)}
                    </ul>
                </div>
            </section>

            <section className="flex flex-col gap-4 md:grid md:grid-cols-2"> {/*Gallery Section */}
                <img className="md:row-start-2 h-full object-cover w-full" src={currentProduct.gallery.first.mobile} alt="product side img" />
                <img img className="md:row-start-1h-full object-cover w-full" src={currentProduct.gallery.second.mobile} alt="product side img" />
                <img className="md:row-span-2 md:col-start-2 object-cover h-full w-full" src={currentProduct.gallery.third.mobile} alt="product side img" />
            </section>

            <section> {/*Also Like Section */}
                {otherProducts}
            </section>

            <section>
                <Outro size={props.size} />
            </section>

        </main>
    )    
}