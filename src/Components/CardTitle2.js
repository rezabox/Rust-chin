import logo_svg from '../svg/05870d89a44d8a2a979ca7986174f013312ac5553d6060.svg';

function CardTitle2(){
  return(
    <div className="card_title2">
      <div className="title_header2 flex align-center justify-between p-4">
          <div className="title_right flex">
              <span className="title_right icon rounded">
                  <img src={logo_svg} className='bg-slate-200 p-4' alt="logo_card2" />
              </span>
              <h3 className='header_title mt-3 mr-5 text-base font-bold text-color-input'>جدیدترین قالب و افزونه های وردپرس</h3>
          </div>
          <div className='header_dropdown mt-3 '>
             <div className="dropdown_select text-base flex align-center bg-slate-200 p-3 mt-[-10px] text-color-sub-title rounded">
               <i className="bi bi-grid-3x3-gap-fill"></i>
               <div className='dropdown_select_content'>
                  <span className='dropdown_select_content_text mr-2'>جدیدترین ها</span>
                  <span className='dropdown_select_content_arrow mr-20'>
                     <i className="bi bi-chevron-down text-sm font-black"></i>
                  </span>
               </div>
             </div>
          </div>
      </div>
    </div>
  )
}
export default CardTitle2;