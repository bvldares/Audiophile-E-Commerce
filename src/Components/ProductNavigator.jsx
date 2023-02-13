import { Link } from "react-router-dom"


export default function ProductNavigator(){

    const elements = [
        {
            id:1,
            img:"/assets/shared/desktop/image-category-thumbnail-headphones.png",
            title:"Headphones"
        },
        {
            id:2,
            img:"/assets/shared/desktop/image-category-thumbnail-speakers.png",
            title:"Speakers"
        },
        {
            id:3,
            img:"/assets/shared/desktop/image-category-thumbnail-earphones.png",
            title:"Earphones"
        }
    ]

    const categoryElement = elements.map(cat =>{
        return ( 
            <div key={cat.id} className="flex flex-col items-center bg-light-grey pb-[22px] pt-[50px] relative rounded-[8px] md:w-1/3">
                <img src={cat.img} alt="audio category product" className="h-[104px] lg:h-[160px] absolute top-[-45px] lg:top-[-85px]"/>
                <h3 className="font-semibold uppercase text-[15px] lg:text-[18px]">{cat.title}</h3>
                <Link to={"/"} className="mt-4 uppercase text-light-black font-semibold text-[13px] flex items-center gap-2 hover:text-terra">
                    Shop
                    <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow" />
                </Link>
            </div>
        )
    })

    return (
        <section className="flex flex-col gap-[60px] md:flex-row md:gap-6">
            {categoryElement}
        </section>
    )
}