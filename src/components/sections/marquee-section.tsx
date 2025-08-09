const MarqueeSection = () => {
    const marqueeText = "$DOH to the traders";
    const items = Array(10).fill(marqueeText);

    return (
        <section className="bg-background/50 backdrop-blur-sm py-4 select-none border-y-2 border-primary/20">
            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {items.map((text, index) => (
                        <span key={`p1-${index}`} className="text-4xl font-bold font-headline text-foreground mx-8 drop-shadow-sm flex items-center gap-4">
                            {text}
                            <span className="text-primary/50">*</span>
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee whitespace-nowrap">
                     {items.map((text, index) => (
                        <span key={`p2-${index}`} className="text-4xl font-bold font-headline text-foreground mx-8 drop-shadow-sm flex items-center gap-4">
                            {text}
                            <span className="text-primary/50">*</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarqueeSection;
