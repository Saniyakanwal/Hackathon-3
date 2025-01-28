import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";



const MenuDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;


    const query =  `*[_type == "food" && name == $name][0]`;
    const foundMenu = await client.fetch(query,{name:decodeURIComponent(id)} );
return(
    <div>
        <Header/>
    <div className="mt-28 ">
        {foundMenu.image && (
        <Image src={urlFor(foundMenu.image).url()}
        width={400} height={300}
        alt="image" 
        className="md:ml-72  rounded-lg"/>
        )}
        </div>
        <div className="md:ml-[720px] md:-mt-80">
        <h1 className="font-bold text-5xl ml-20 mt-11 md:mt-0 ">{foundMenu.name}</h1>
        <p className="font-semibold text-2xl mt-7 ml-4 md:ml-0">{foundMenu.description}</p>
<p className="mt-6 text-3xl font-medium md:ml-0 ml-5">price: {foundMenu.price}</p>
<button className="mt-8 bg-orange-600 m-6 px-16 py-4 font-bold text-2xl rounded-lg">Add to Cart</button>
    </div>
    <br /> <br /> <br />
    <Footer/>
    </div>
)
}
export default MenuDetailsPage