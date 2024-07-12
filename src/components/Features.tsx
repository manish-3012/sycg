import { FEATURES } from '../../constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-10"> {/* Adjusted mt-20 sm:mt-24 lg:mt-32 */}
      <div className="max-container padding-container relative w-full flex flex-col lg:flex-row ">
        <div className="flex justify-center lg:flex-1 lg:min-h-[900px] mb-10 lg:mb-0">
          <Image
            src="/3.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative sm:pt-0'>
            <h2 className="bold-40 lg:bold-64">Benefits of Sahaja Yoga</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-10 lg:gap-10">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-2 capitalize">
        {title}
      </h2>
      <p className="regular-20 mt-2 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features
