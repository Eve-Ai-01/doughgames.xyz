import Link from 'next/link';
import { Twitter, Send, Disc, Gamepad2 } from 'lucide-react';

const Footer = () => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Tokenomics', href: '#tokenomics' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'Community', href: '#community' },
    ];

    const socialLinks = [
        { icon: <Twitter className="h-6 w-6" />, href: '#' },
        { icon: <Disc className="h-6 w-6" />, href: '#' },
        { icon: <Send className="h-6 w-6" />, href: '#' },
    ];

    return (
        <footer className="bg-secondary border-t-4 border-orange-300/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 text-2xl font-bold font-headline text-primary-foreground drop-shadow-md">
                        <Gamepad2 className="w-8 h-8 text-primary" />
                         <span className="bg-gradient-to-r from-primary via-orange-400 to-yellow-300 bg-clip-text text-transparent">Dough Games</span>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                         {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="font-headline text-lg text-foreground hover:text-primary transition-colors duration-200">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                     <div className="flex gap-4">
                        {socialLinks.map((link, index) => (
                             <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-200" aria-label={`Social link ${index + 1}`}>
                                {link.icon}
                             </Link>
                        ))}
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground font-body">
                    <p>&copy; {new Date().getFullYear()} Dough Games. All Rights Reserved.</p>
                    <p className="text-xs mt-2">This is not financial advice. $DOH is a meme coin with utility for entertainment.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
