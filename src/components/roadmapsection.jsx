import "./phasecards.css"

const RoadmapsSection = () =>{
    return(
        <section className="relative bg-white bg-cover bg-center sm:bg-top md:bg-center flex items-center p-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 items-center mx-auto my-9 montserrat">
                {/* Title */}
                <div className="col-span-5 text-center mb-2 mt-4">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Roadmaps</h1>
    </div>
                {/* phase card */}
                <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">PHASE 1</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p>Fair launch on Ape Stor e(NO PRESALE)</p>
            <p>Launched Website v1</p>
            <p>DexScreener Paid at $13k MC</p>
            <p>100+ members on TG Community </p>
            <p>Premium on X</p>
        </div>
    </div>
</div>
            <div>
                <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">PHASE 2</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
            <p>Dexscreener trending</p>
            <p>Dexscreener ads #1</p>
            <p>Paid Base trending #1</p>
            <p>KOLS </p>
            <p>Meme Contest + GIF Contest #2</p>
            <p>Grow TG group to 1000+ members</p>
            <p>Basescan token verification</p>
        </div>
    </div>
</div>
            </div>
            <div>
                <div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <p class="title">PHASE 3</p>
            <p>Hover Me</p>
        </div>
        <div class="flip-card-back">
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
            
        </section>
    )
}

export default RoadmapsSection