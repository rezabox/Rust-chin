function HeaderMenu(){
 return(
      <div className="headerMenu p-4 bg-slate-50 drop-shadow-lg">
          <ul className="categories-menu flex align-center space-x-6">
             <li className="menu-item space-x-3 hover:text-green-oil transition-colors"><a href="#" className="text-lg ml-2"><i class="bi bi-bar-chart"></i>پرفروش ترین ها</a><span className="menu-append text-sm"><i class="bi bi-chevron-down"></i></span></li>
             <li className="menu-item hover:text-green-oil transition-colors"><a href="#" className="text-lg ml-2"><i class="bi bi-wordpress"></i>قالب وردپرس</a><span className="menu-append text-sm"><i class="bi bi-chevron-down"></i></span></li>
             <li className="menu-item hover:text-green-oil transition-colors"><a href="#" className="text-lg ml-2"><i class="bi bi-plug"></i>افزونه وردپرس</a><span className="menu-append text-sm"><i class="bi bi-chevron-down"></i></span></li>
             <li className="menu-item hover:text-green-oil transition-colors"><a href="#" className="text-lg ml-2"><i class="bi bi-filetype-html"></i>قالب HTML</a><span className="menu-append text-sm"><i class="bi bi-chevron-down"></i></span></li>
             <li className="menu-item hover:text-green-oil transition-colors"><a href="#" className="text-lg ml-2"><i class="bi bi-filetype-js"></i>اسکریپت</a><span className="menu-append text-sm"><i class="bi bi-chevron-down"></i></span></li>
             <div className="menu flex">
             <li className="menu-item hover:text-green-oil transition-colors"><a href="#" className="text-lg"><i class="bi bi-phone"></i>اپلیکیشن</a></li>
             <li className="menu-item mr-3 hover:text-green-oil transition-colors"><a href="#">...<span className="menu-append text-sm"><i class="bi bi-chevron-down"></i></span></a></li>
             </div>
          </ul>
      </div>
 )
}
export default HeaderMenu;