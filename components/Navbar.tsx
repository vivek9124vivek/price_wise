
//this library is imported to use <Image />
import Image from 'next/image'
//this library is imported to use <Link />
import Link from 'next/link'

//making array of icons object
const navIcons=[
{src:'/assets/icons/search.svg', alt: 'search'},
{src:'/assets/icons/black-heart.svg', alt: 'heart'},
{src:'/assets/icons/user.svg', alt: 'user'}
]
const Navbar = () => {
  return (
    <header className='w-full'>
        
      <nav className='nav'>
      {/* Navbar */}
      <Link href="/" className='flex items-center gap-1'>
        <Image 
        src="/assets/icons/logo.svg" 
        width={27} 
        height={27} 
        alt='Logo Img' /> 
      <p className='nav-logo'>Price<span className= 'text-primary'>Wise</span> </p>
      </Link>
      <div className='flex items-center gap-5'>

 {navIcons.map((icon) =>(
  <Image 
  key={icon.alt}
  src={icon.src}
  alt={icon.alt}
  width={28}
  height={100}
  className='object-contain'
  />
 ))}




      </div>

      </nav>

    </header>
  )
}

export default Navbar

