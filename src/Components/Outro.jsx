export default function Outro(props){

    return (
        <section className="text-center flex flex-col items-center lg:flex-row-reverse lg:justify-between lg:gap-5 lg:text-left">
            <img 
                id="outro-img" className="outro-img lg:w-[50%] rounded-[16px]"
                src={`/assets/shared/${props.size}/image-best-gear.jpg`}
                alt="guy wearing headphones" />
            <div className="max-w-[570px] lg:max-w-[445px]">
                <h2 className="text-3xl uppercase font-bold tracking-[1px] mt-8 mb-6 md:text-[2.5rem] md:leading-[44px]  ">Bringing you the <span className="text-terra">best</span> audio gear</h2>
                <p className="opacity-[70%]">
                    Located at the heart of New York City, 
                    Audiophile is the premier store for high end headphones, 
                    earphones, speakers, and audio accessories. We have a large 
                    showroom and luxury demonstration rooms available for you to browse 
                    and experience a wide range of our products. Stop by our store to meet 
                    some of the fantastic people who make Audiophile the best place 
                    to buy your portable audio equipment.
                </p>
            </div>
        </section>
    )
}