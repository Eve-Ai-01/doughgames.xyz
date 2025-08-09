const MarqueeSection = () => {
    const marqueeText = "$DOH to the traders";
    const items = Array(10).fill(marqueeText);

    return (
        <section className="sticky top-0 z-50 py-4 bg-white bg-opacity-5 backdrop-blur-md shadow-md">
            <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {items.map((text, index) => (
                        <span key={`p1-${index}`} className="text-1xl font-regular font-headline text-foreground mx-8 drop-shadow-sm flex items-center gap-4">
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
