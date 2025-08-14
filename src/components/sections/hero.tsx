"use client";

import Image from 'next/image';

/**
 * HeroSection Component
 * This component displays the main banner image for the website. It's designed
 * to be visually engaging, featuring the hero image with a subtle glowing
 * background and interactive hover effects.
 */
const HeroSection = () => {
    return (
        // The main container for the entire hero section.
        // It's set to take up the full screen height (`min-h-screen`) and uses flexbox
        // to center the image both vertically and horizontally.
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* The main content div, centered within the container. */}
                <div className="flex justify-center">
                    {/* The wrapper for the image and its background effect.
                      The `group` class allows us to trigger animations on child elements
                      when this parent div is hovered over by the user.
                    */}
                    <div className="relative flex justify-center items-center group w-full max-w-4xl">
                        {/* This is the blurred, glowing background effect. It's an absolute-positioned
                          div that sits behind the image. On hover (`group-hover`), it scales up.
                        */}
                        <div className="absolute w-full h-full bg-primary/20 rounded-full filter blur-3xl group-hover:scale-110 transition-transform duration-500"></div>

                        {/* The main hero image. It uses the Next.js <Image> component for optimization.
                          On hover (`group-hover`), it scales up slightly and rotates.
                        */}
                        <Image
                            src="/images/hero.png"
                            alt="Dough Games Character"
                            width={1000}
                            height={1000}
                            priority // This tells Next.js to load this image first, as it's important.
                            className="relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
