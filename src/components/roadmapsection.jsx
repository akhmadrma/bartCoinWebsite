import "./phasecards.css"

const RoadmapsSection = () =>{
    return(
        <section className="relative bg-white bg-cover place-content-center sm:bg-top md:bg-center items-center p-4"> {/* Mengurangi p-6 ke p-4 */}
    <div className="grid md:grid-rows-4 justify-items-stretch gap-4 items-center mx-4 my-6 montserrat px-6"> {/* Mengurangi mx-5, my-9 dan gap-6 */}
        {/* Title */}
        <div className="flex justify-center mb-2 mt-4 ">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Roadmaps</h1>
        </div>

        {/* phase card */}
        <div className="grid md:grid-cols-3 md:row-span-3 gap-4 ">
            <div className="flip-card w-full max-w-[400px] aspect-[4/5] mx-auto">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p className="title">PHASE 1</p>
                        <p>Hover Me</p>
                    </div>
                    <div className="flip-card-back">
                        <p>Fair launch on Ape Store (NO PRESALE)</p>
                        <p>Launched Website v1</p>
                        <p>DexScreener Paid at $13k MC</p>
                        <p>100+ members on TG Community</p>
                        <p>Premium on X</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flip-card w-full max-w-[400px] aspect-[4/5] mx-auto">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">PHASE 2</p>
                            <p>Hover Me</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Dexscreener trending</p>
                            <p>Dexscreener ads #1</p>
                            <p>Paid Base trending #1</p>
                            <p>KOLS</p>
                            <p>Meme Contest + GIF Contest #2</p>
                            <p>Grow TG group to 1000+ members</p>
                            <p>Basescan token verification</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flip-card w-full max-w-[400px] aspect-[4/5] mx-auto">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <p className="title">PHASE 3</p>
                            <p>Hover Me</p>
                        </div>
                        <div className="flip-card-back">
                            <p>Connect with influencers</p>
                            <p>Dexscreener ads #2</p>
                            <p>Paid Base trending #3</p>
                            <p>Airdrop for holders</p>
                            <p>More partnerships</p>
                            <p>Launched Website v2</p>
                            <p>Utility</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default RoadmapsSection