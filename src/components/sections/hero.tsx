"use client";

import { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';

const CountdownCard = () => {
    const targetDate = useMemo(() => new Date("2024-12-31T23:59:59"), []);

    const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
        <div key={interval} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold font-headline text-foreground">{String(value).padStart(2, '0')}</span>
            <span className="text-sm uppercase font-body text-muted-foreground">{interval}</span>
        </div>
    ));

    return (
        <div className="clay-card bg-card/70 backdrop-blur-sm rounded-2xl p-6 w-full max-w-md mx-auto md:mx-0">
            <div className="flex justify-around items-center">
                {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? timerComponents : <span className="text-2xl font-bold">Time's up!</span>}
            </div>
        </div>
    );
};

const AnimatedShape = ({ className, animationDelay }: { className: string; animationDelay: string }) => (
    <div
        className={`absolute rounded-full filter blur-xl opacity-30 ${className}`}
        style={{ animation: `float 8s ease-in-out infinite`, animationDelay }}
    />
);

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
            <AnimatedShape className="bg-primary/50 w-72 h-72 top-1/4 left-1/4" animationDelay="0s" />
            <AnimatedShape className="bg-accent/50 w-52 h-52 bottom-1/4 right-1/4" animationDelay="2s" />
            <AnimatedShape className="bg-primary/30 w-64 h-64 top-1/2 right-1/3" animationDelay="4s" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left space-y-6">
                        <h1 className="text-7xl md:text-9xl font-black font-headline text-gradient-doh drop-shadow-lg">$DOH</h1>
                        <h3 className="text-4xl md:text-5xl font-bold font-headline text-foreground">to the traders</h3>
                        <p className="text-lg font-body text-muted-foreground max-w-lg mx-auto md:mx-0">
                            Join the sweetest revolution in meme coin history. It's not just a game, it's a bakery of opportunities.
                        </p>
                        <div className="pt-8">
                           <CountdownCard />
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center group mt-10 md:mt-0">
                        <div className="absolute w-full h-full bg-primary/20 rounded-full filter blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
                         <Image
                            src="/hero-image.png"
                            width={600}
                            height={600}
                            alt="Dough Games Character"
                            className="relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3"
                            data-ai-hint="gamer character"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
