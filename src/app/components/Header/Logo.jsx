import Image from 'next/image'

function Logo() {
  return (
    <div className="relative w-30 h-30">
      <Image 
        src="/schoolLogo.png"   // no import needed
        alt="School Logo"
        fill
        className="object-cover"
      />
    </div>
  )
}

export default Logo;
