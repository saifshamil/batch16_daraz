import Cards from "./cards/Cards"


const FlashSale = () => {
  const products = [
    {
      image: '/images/card1.avif',
      title: 'Washing Machine',
      price: 'Rs.42,900',
      oldPrice: 'Rs.49,000',
      discount: '-12%'
    },
    {
      image:'/images/card2.avif',
      title: 'Air Bads',
      price: 'Rs.18,750',
      oldPrice: 'Rs.22,000',
      discount: '-15%'
    },
    {
      image: '/images/card3.avif',
      title: 'Women Bags',
      price: 'Rs.2,499',
      oldPrice: 'Rs.2,999',
      discount: '-17%'
    },
    {
      image: '/images/card4.avif',
      title: 'YM Traders Pack of 12 pieces',
      price: 'Rs.12,300',
      oldPrice: 'Rs.14,000',
      discount: '-12%'
    },
    {
      image: '/images/card5.avif',
      title: 'Tea Whitener - NESTLE EVERYDAY Powder 850g',
      price: 'Rs.3,150',
      oldPrice: 'Rs.3,500',
      discount: '-10%'
    }
  ]
  return (
    <div>
        <h1 className="mt-15 text-3xl ml-90">FlashSale</h1>

        <div className="bg-slate-100 w-300 h-110 m-auto">
          
          <div className="flex border-b h-20 border-slate-400 justify-between items-center">
            
            <h1 className="ml-5 text-[#F57224] font-bold text-xl">On Sale Now</h1>
            <h1 className="mr-5 text-[#F57224] font-bold text-xl border-2 p-2">SHOP ALL PRODUCTS</h1>
          </div>

          
          <div className="flex justify-between items-center h-100">
            {products.map((p, i) => (
              <Cards key={i} {...p} />
            ))}
          </div>

        </div>
    </div>
  )
}

export default FlashSale