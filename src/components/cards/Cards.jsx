import React from 'react'

const Cards = ({
  image = '/images/card1.avif',
  title = 'HWM 85-1269S6-Haier-8.5 kg-Fully Automatic-Top',
  price = 'Rs.24,448',
  oldPrice = 'Rs.27,500',
  discount = '-11%'
}) => {
  return (
    <div className="w-50 h-80 border p-2">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <h2 className="text-sm mt-2">{title}</h2>
      <h3 className="text-[#F57224] text-xl">{price}</h3>
      <p>
        <del className="text-slate-500">{oldPrice}</del>
        <span className="ml-2">{discount}</span>
      </p>
    </div>
  )
}

export default Cards
