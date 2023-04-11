import image_1 from '../images/56c6d35a761aca516556a54d015805f710e8a6e028750d.jpg';
import image_2 from '../images/d436602349ed171763bdcf54f05ac14e65ad6963936708-590x300.jpg'
function SectionImage(){
  return(
     <div className='Image_section col-lg-12 px-8 md:p-3'>
       <img src={image_1} className='rounded-md hidden md:block' alt="" />
       <img src={image_2} className='rounded-md block md:hidden' alt=''/>
     </div>
  )
}
export default SectionImage;