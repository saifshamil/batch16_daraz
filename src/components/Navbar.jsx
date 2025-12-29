
const Navbar = () => {
  return (
    <>
    <div className="bg-[#F85605] h-30">
      <ul className="flex justify-around pl-150">
        <li>SAVE MORE ON APP</li>
        <li>SELL ON DARAZ</li>
        <li>hELP & SUPPORT</li>
        <li>LOGIN</li>
        <li>SIGN UP</li>
      </ul>

      <div className="flex">
        <img className=" w-40 h-30 -mt-7 ml-70" src="./images/logo.jfif" alt="logo" />
        <input placeholder="Search in daraz" className="bg-white w-200 ml-70 h-10 mt-6" type="text" />
      </div>
    </div>
 </> )
}

export default Navbar
