import { useState } from "react";
import { Link } from "react-router-dom";


export default function Checkout(){
    
    const [name,setName] = useState("")
    const [mail,setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [method, setMethod] = useState("cash")


    return (
        <main>
            <Link className="mx-2 md:mx-6 xl:mx-0 p-4 inline-block opacity-50 cursor-pointer" to="/">Go Back</Link>
            <div className="flex flex-col items-center md:items-start lg:flex-row justify-between gap-2 xl:gap-10 mx-auto max-w-[1100px] px-6 md:px-10 xl:px-0 mb-20 md:mb-28">
                <form className="p-6 md:p-10 bg-white rounded-lg font-semibold lg:w-[600px] xl:w-full " action="">
                    <h2 className="text-[28px] md:text-[32px] uppercase tracking-[1.15px]">Checkout</h2>
                    <h4 className="text-terra text-[13px] tracking-[1px] uppercase mt-10 mb-4">billing details</h4>
                    <fieldset> {/*PERSON INFO SECTION*/}
                        <div className="flex flex-col md:flex-row gap-4 justify-between">
                            <div className="flex flex-col items-start gap-2 w-full">
                                <label className="text-[12px]" htmlFor="name">Name</label>
                                <input className="py-[18px] px-6 border  rounded-lg w-full border-[grey] invalid:border-[red]" placeholder="Alexei Ward" type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className="flex flex-col items-start gap-2 w-full">
                                <label className="text-[12px]" htmlFor="email">Email</label>
                                <input className="py-[18px] px-6 border border-[grey] rounded-lg w-full invalid:border-[red]" value={mail} onChange={(e)=>setMail(e.target.value)} placeholder="Alexei@mail.com"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start mt-4">
                            <label className="text-[12px]" htmlFor="phone">Phone Number</label>
                            <input className="py-[18px] px-6 border rounded-lg w-full md:w-1/2 border-[grey]" value={phone} type="number" onChange={(e)=>setPhone(e.target.value)} placeholder="+1 202-555-0136" />
                        </div>
                    </fieldset>
                
                    <h4 className="text-terra text-[13px] tracking-[1px] uppercase mt-10">Shipping info</h4>
                    <fieldset> {/*ADDRESS SECTION*/}
                        <div className="flex flex-col gap-2 items-start mt-4">
                            <label className="text-[12px]" htmlFor="address">Address</label>
                            <input className="py-[18px] px-6 border rounded-lg w-full border-[grey] " value={address} type="text" onChange={(e)=>setAddress(e.target.value)} placeholder="1137 Williams Avenue" required />
                        </div>
                        <div className="flex flex-col sm:flex-row my-4 gap-4">
                            <div className="flex flex-col items-start gap-2" >
                                <label className="text-[12px]" htmlFor="zip">Zip Code</label>
                                <input className="py-[18px] px-6 border rounded-lg w-full border-[grey]" value={zip} onChange={(e)=>setZip(e.target.value)} placeholder="10001"  required />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[12px]" htmlFor="zip">City</label>
                                <input className="py-[18px] px-6 border rounded-lg w-full border-[grey]" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="New York"  required/>
                            </div>
                        </div>
                    </fieldset>

                    <h4 className="text-terra text-[13px] tracking-[1px] uppercase mt-10 mb-4 text-center sm:text-left">Payment Method</h4>
                    <fieldset className="flex flex-col items-center gap-3 sm:grid sm:grid-cols-2 xl:flex xl:flex-row sm:justify-between whitespace-nowrap">
                        <div className="flex gap-3 w-fit ">
                            <input className="appearance-none" type="radio" name="payment-method" id="bitcoin"  onChange={(e)=>setMethod(e.target.id)} />
                            <label className="flex gap-2 items-center  border border-grey checked:border-red px-8 py-4 rounded-lg" htmlFor="bitcoin">Bitcoin <svg className="w-[1rem]" viewBox="0.004 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"></path><path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#ffffff"></path></g></svg> </label>
                        </div>
                        <div className="flex gap-3  w-fit rounded-lg">
                            <input className="appearance-none" type="radio" name="payment-method" id="cash" onChange={(e)=>setMethod(e.target.id)} />
                            <label className="flex gap-2 items-center  border border-grey checked:border-red px-8 py-4 rounded-lg" htmlFor="cash">Cash<img src="/public/assets/money.png" alt="" /></label>
                        </div>
                       
                        <div className="flex gap-3  w-fit rounded-lg">
                            <input className="appearance-none" type="radio" name="payment-method" id="paypal" onChange={(e)=>setMethod(e.target.id)} />
                            <label className="flex gap-2 items-center  border border-grey checked:border-red px-8 py-4 rounded-lg" htmlFor="paypal">PayPal<img className="w-[16px]" src="/public/assets/paypal.png" alt=""/></label>
                        </div>

                        <div className="flex gap-3  w-fit rounded-lg">
                            <input className="appearance-none" type="radio" name="payment-method" id="creditcard" onChange={(e)=>setMethod(e.target.id)} />
                            <label className="flex gap-2 items-center  border border-grey checked:border-red px-8 py-4 rounded-lg" htmlFor="creditcard">Credit Card<img className="w-[16px]" src="/public/assets/credit-card.png" alt=""/></label>
                        </div>

                    
                    </fieldset>
                    {method === "cash" && 
                        
                            <div className="flex items-center gap-4 mt-4">
                                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><path d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z" fill="#D87D4A"/></svg>
                                <p className="w-[95%] font-light opacity-50">
                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. 
                                Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        }


                </form>
                <section className="py-8 px-6 md:p-8 flex flex-col min-w-[350px] bg-white rounded-lg">
                    <h3 className="uppercase tracking-[1.4px] mb-9 font-bold">Summary</h3>

                    <div>

                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <h4 className="opacity-50 uppercase text-[15px]">total</h4>
                        <p className="font-bold text-lg">€ 500</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="opacity-50 uppercase text-[15px]">shipping</h4>
                        <p className="font-bold text-lg">30000</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="opacity-50 uppercase text-[15px]">{`vat (included)`}</h4>
                        <p className="font-bold text-lg">€ 500</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="opacity-50 uppercase text-[15px]">Grand Total</h4>
                        <p className="font-bold text-lg text-terra">€ 500</p>
                    </div>
                    <button className="py-4 text-center w-full uppercase bg-terra hover:bg-terra-light text-white font-semibold tracking-[1px]">Continue & pay</button>
                </section>
               
            </div>
        </main>
    )
}