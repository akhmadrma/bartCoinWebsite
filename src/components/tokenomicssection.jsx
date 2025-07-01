import pieChart from "../assets/piechart.png";
import { Card } from "flowbite-react";

const Tokenomics = ()=>{
    return(
<section className="relative bg-[#ffe649] bg-cover bg-center sm:bg-top md:bg-center flex items-center p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mx-auto montserrat ">
    
    {/* Title Section */}
    <div className="md:col-span-2 text-center mb-2 mt-4">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Tokenomics</h1>
    </div>

    {/* Pie Chart Section */}
    <div className="flex justify-center mb-6 md:mb-0">
      <img className="max-h-[500px]  object-contain" src={pieChart} alt="Pie chart" />
    </div>

    {/* List Section */}
    <div className="col-span-1 text-center">
      <div className="space-y-4">
        <div className="text-lg font-medium">
            <Card>
                <h5>No Hidden Owner</h5>
            </Card>
        </div>
        <div className="text-lg font-medium">
            <Card>
                <h5>Ownership Renounced</h5>
            </Card>
        </div>
        <div className="text-lg font-medium">
            <Card>
                <h5>1 Billion Token Supply</h5>
            </Card>
        </div>
        <div className="text-lg font-medium">
            <Card>
                <h5>Fair Laucnh by Apestore</h5>
            </Card>
        </div>
        <div className="text-lg font-medium">
            <Card>
                <h5>No Buy/Sell Tax</h5>
            </Card>
        </div>
      </div>
    </div>

  </div>
</section>
    )
}

export default Tokenomics