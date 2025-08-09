"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gamepad2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Tokenomics', href: '#tokenomics' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'About', href: '#about' },
        { name: 'Community', href: '#community' },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
        )}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="#home" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary-foreground drop-shadow-md">
                        <Gamepad2 className="w-8 h-8 text-primary" />
                        <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-300 bg-clip-text text-transparent">Dough Games</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="font-headline text-lg text-foreground hover:text-primary transition-colors duration-200">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <Button className="clay-button rounded-full font-bold px-6 py-3 text-base bg-primary text-primary-foreground border-2 border-orange-300/50">
                        Play Now
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
