

const FlashSale = () => {
  return (
    <div>
        <h1 className="mt-15 text-3xl ml-90">FlashSale</h1>
        <div className="bg-slate-100 w-300 h-120 m-auto">
          
          <div className="flex border-b h-20 border-slate-400 justify-between items-center">
            
            <h1 className="ml-5 text-[#F57224] font-bold text-xl">On Sale Now</h1>
            <h1 className="mr-5 text-[#F57224] font-bold text-xl border-2 p-2">SHOP ALL PRODUCTS</h1>
          </div>

          {/* card 1 */}
          <div className="w-50 h-80 border">
            <img src="./images/card1.avif" alt="" />
            <h1>HWM 85-1269S6-Haier-8.5 kg-Fully Automatic-Top</h1>
             <h1 className="text-[#F57224] text-xl">Rs.24,448</h1>
             <p><del className="text-slate-500">Rs.27,500</del><span className="ml-2">-11%</span></p>
              
          </div>

        </div>
    </div>
  )
}

export default FlashSale