import { Link } from "react-router-dom"

export default function ShowcaseProduct(props){
    return (
        <div className="flex flex-col gap-[32px] text-center lg:flex-row lg:justify-between lg:text-left z-50" >
            <img className="basis-[40%] rounded-[16px] lg:max-w-[540px]" src={props.img} alt="product-image" />
            <div className="flex flex-col items-center md:mb-[2rem] lg:items-start lg:justify-center lg:basis-[40%]">
                {props.isNew && <span className="tracking-[10px] uppercase text-terra">new product</span>}
                <h2 className="my-6 uppercase tracking-[1px] font-bold text-3xl md:text-4xl">{props.productName}</h2>
                <p className="max-w-[582px] text-black opacity-[50%]">{props.productDescription}</p>
                <Link to="/" className="px-8 py-4 mt-6 md:mt-10 bg-terra w-fit inline-block uppercase text-white tracking-[1px] hover:bg-terra-light" >see product</Link>
            </div>
           
        </div>
    )
}