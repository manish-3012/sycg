import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 pb-10 md:gap-28 lg:py-20 xl:flex-row -mt-20">      
    <div className="relative z-20 flex flex-1 flex-col justify-center xl:w-8/12">
        <h1 className="bold-52 lg:bold-90 text-green-700">Sahaja Yoga</h1>
        <h6 className="bold-38 lg:bold-80 text-green-700">Know Thyself: Through Sahaja Yoga</h6>
        
        <blockquote className="italic font-semibold text-lg border-l-4 border-green-700 pl-4 my-6 text-gray-700">
            "Yoga means union with the divine. When you become one with the divine, the divine starts flowing through you and you become part and parcel of the whole."
            <footer className="text-right mt-2 text-gray-600">— H. H. Shri Mataji Nirmala Devi</footer>
        </blockquote>
        
        <p className="regular-22 xl:regular-24 mt-6 text-gray-30 xl:max-w-[520px]">
        Sahaja Yoga teaches a unique method of meditation, rooted in ancient spiritual knowledge. You can achieve a state of balance in just 10 minutes. Try it out!
        </p>

        <div className="flex flex-col mt-3 w-full gap-3 sm:flex-row">
            <Button 
            type="button" 
            title="Meditate Now!" 
            variant="btn_green" 
            />
            <Button 
            type="button" 
            title="Read More" 
            icon="/play.svg"
            variant="btn_white_text" 
            />
        </div>
    </div>

      <div className="hero-image-container relative flex-1 xl:w-4/12 aspect-square">
        <Image
          src="/shri-mataji.svg"
          alt="Sahaja Yoga Hero Image"
          fill
          style={{ objectFit: 'contain' }}
          className="rounded-2xl"
        />
      </div>
    </section>
  )
}

export default Hero