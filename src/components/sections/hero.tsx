"use client";

import Image from 'next/image';
import heroImage from '@/images/hero.png';

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute w-full h-full bg-primary/20 filter blur-3xl"></div>
                <Image
                    src={heroImage}
                    alt="Dough Games Character"
                    fill={true}
                    priority
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default HeroSection;
