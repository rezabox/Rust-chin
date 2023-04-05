import RustChinLogo from '../svg/7c93b19d1f866c11114337f21f4273247f473be63c29d0.svg';

function Header(){
  return(
     <div className="header ">
        <div className='warrpier flex align-center justify-between '>
           <div className='logo p-5'>
           <img className='w-40' src={RustChinLogo} alt="" />
           </div>
           <div className='header-option flex p-5 mt-1'>
                 <div className='header-access relative text-xl mt-1.5  ml-8 text-slate-700 '><i class="bi bi-microsoft bg-slate-200 hover:bg-slate-300 transition-colors px-2 rounded-sm cursor-pointer"></i></div>
                 <div className='header-ricycle text-xl mt-1.5 ml-8 text-slate-700'><i class="bi bi-basket bg-slate-200 hover:bg-slate-300 transition-colors px-2 rounded-sm cursor-pointer"></i></div>
                 <div className='header-account'><button className='bg-green-oil hover:bg-[#7caf54] transition-colors text-xl text-white px-2 py-1 rounded'><span><i class="bi bi-person-circle"/></span>ورود / ثبت نام</button></div> 
           </div>
        </div>
     </div>
  )
}
export default Header;