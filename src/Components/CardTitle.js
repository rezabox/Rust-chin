import Cup_Svg from '../svg/a3df6463583ce10915f695b0a3c83803b581a6be000bc8.svg';
function CardOrigin(){
  return(
       <div className='warriper flex p-7'>
         <div className='svg_image'>
          <img src={Cup_Svg} className='bg-slate-100 p-4' alt="Icon" />
         </div>
         <div className='header_title text-lg font-black mt-3 mr-5 text-color-input'>
            <h3>خرید قالب و افزونه های ویژه</h3>
         </div>
       </div>
  )
}
export default CardOrigin;