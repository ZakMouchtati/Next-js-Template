import React from 'react'
import style from "../styles/Hero.module.css"

const Hero = () => {
  return (
    <div className={style.heroSection}>
        <div className={`${style.banner} container mx-auto rounded-lg`}>
            <div className={style.banner}>
                <div className="flex h-full justify-center items-end text-white">
                    <div className=" w-1/2 text-center mb-9">
                        <div className="bg-[#086425] rounded-lg">
                        <div className="bg-[#24920E] h-3 w-full rounded-lg"></div>
                            <div className="py-12">
                                <h1 className='text-6xl font-bold title'>
                                    Al Akhawayn University <br /> for learnig and growth !
                                </h1>
                                <p className='mt-5'>
                                    Inaugurated in 1995 by His Majesty King Hassan II and Crown Prince Abdallah bin Abdel-Aziz of Saudi Arabia, Al Akhawayn University redefines the classic American liberal arts educational experience on an architecturally stunning modern campus amidst the beauty of Morocco's Middle Atlas Mountains. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero