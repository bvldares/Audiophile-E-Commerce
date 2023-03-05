import { Link } from "react-router-dom"


export default function ProductNavigator(){

    const elements = [
        {
            id:1,
            img:"/assets/shared/desktop/image-category-thumbnail-headphones.png",
            title:"headphones"
        },
        {
            id:2,
            img:"/assets/shared/desktop/image-category-thumbnail-speakers.png",
            title:"speakers"
        },
        {
            id:3,
            img:"/assets/shared/desktop/image-category-thumbnail-earphones.png",
            title:"earphones"
        }
    ]

    const categoryElement = elements.map(cat =>{
        return ( 
            <div key={cat.id} className="flex flex-col items-center  bg-grey pb-[22px] pt-[50px] mt-8 relative rounded-[8px] sm:w-1/3">
                <img src={cat.img} alt="audio category product" className="h-[104px] lg:h-[160px] absolute top-[-45px] lg:top-[-85px]"/>
                <h3 className="font-semibold uppercase text-[15px] lg:text-[18px]">{cat.title}</h3>
                <Link to={`/product/${cat.title}`} className="mt-4 uppercase text-light-black font-semibold text-[13px] flex items-center gap-2 hover:text-terra">
                    Shop
                    <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="right arrow" />
                </Link>
            </div>
        )
    })

    return (
        <section className="flex flex-col gap-[40px] sm:justify-around sm:flex-row sm:gap-6">
            {categoryElement}
        </section>
    )
}