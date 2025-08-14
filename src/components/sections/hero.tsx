"use client";





import Image from 'next/image';



const HeroSection = () => {

    return (

           

                    <div className="relative cover justify-center items-center group mt-10 md:mt-0">

                        <div className="absolute w-full h-full bg-primary/20 rounded-full filter blur-3xl group-hover:scale-110 transition-transform duration-500"></div>

                         <Image

                            src="/images/hero.png"

                            alt="Dough Games Character"

                            width={100%}

                            height={100%}

                            

                        />

                    </div>

           

    );

};



export default HeroSection;
