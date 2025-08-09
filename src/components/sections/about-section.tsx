import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is DoughGames?",
        answer: "$DOH is more than a meme coin; it's a community-driven project aiming to blend crypto culture with gaming and education. We provide tools and a platform for traders to learn, grow, and have fun."
    },
    {
        question: "Who is Doughman?",
        answer: "Doughman is our fearless mascot, a hero made of pure, unadulterated market sentiment. He represents the resilience and fun-loving nature of our community."
    },
    {
        question: "Why are you building this?",
        answer: "We believe that crypto education should be accessible and engaging. DoughGames is our way of creating a fun on-ramp to DeFi, wrapped in a culture of memes, games, and community spirit."
    },
    {
        question: "Why an anonymous team?",
        answer: "Our team has chosen to remain anonymous to let the project and community stand on its own merits, embodying the decentralized ethos. All team and marketing wallets are public for full transparency."
    },
    {
        question: "Is this financial advice?",
        answer: "Legal Disclaimer: $DOH is a meme coin with utility created for entertainment purposes and is not financial advice. Please conduct your own research and invest responsibly. The crypto market is volatile."
    },
];

const AboutSection = () => {
    return (
        <section id="about" className="py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-headline text-foreground">About Us</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Get to know the bakers behind the dough.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6 text-left">
                        <h3 className="text-3xl font-bold font-headline">A Recipe for Success</h3>
                        <p className="text-muted-foreground">
                            Welcome to DoughGames, where the worlds of meme culture and serious trading collide. Our mission is to bake a new kind of crypto experience—one that's fun, educational, and community-owned.
                        </p>
                        <p className="text-muted-foreground">
                            We started DoughGames because we saw a gap. Too many projects were either too serious or lacked any real substance. We're here to prove that you can have your cake and eat it too. With our upcoming trading terminal, NFT collections, and interactive games, we're building an ecosystem where every member has a stake in our collective success.
                        </p>
                    </div>
                    <div>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem value={`item-${index}`} key={index} className="clay-card rounded-2xl bg-background/70 backdrop-blur-sm border-none overflow-hidden">
                                    <AccordionTrigger className="font-headline text-lg hover:no-underline text-left px-6 py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-body text-muted-foreground px-6 pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
