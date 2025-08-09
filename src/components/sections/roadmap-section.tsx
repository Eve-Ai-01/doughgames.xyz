import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Gem, Terminal, Swords, Shirt } from 'lucide-react';

const roadmapPhases = [
    {
        phase: 1,
        title: "Launch & Foundation",
        status: "Now",
        description: "Token launch, core branding, and building our amazing community from the ground up.",
        icon: <Rocket className="h-8 w-8 text-primary" />,
        items: ["Token Launch", "Branding", "Community Growth"],
    },
    {
        phase: 2,
        title: "NFT Collection",
        status: "Coming Soon",
        description: "Introducing the Doughman NFT collection, with unique traits and utilities.",
        icon: <Gem className="h-8 w-8 text-accent" />,
        items: ["NFT Design", "Minting Event", "Marketplace Listing"],
    },
    {
        phase: 3,
        title: "DoughGames Terminal",
        status: "After Funding",
        description: "A one-stop hub for traders with advanced tools, charts, and analytics.",
        icon: <Terminal className="h-8 w-8 text-green-500" />,
        items: ["Terminal Beta", "Tool Integration", "Public Release"],
    },
    {
        phase: 4,
        title: "Ecosystem Expansion",
        status: "Future Plans",
        description: "Expanding the Doughverse with fight scenes, merchandise, and a mobile app.",
        icon: <div className="flex gap-2"><Swords className="h-8 w-8 text-red-500" /><Shirt className="h-8 w-8 text-purple-500" /></div>,
        items: ["Fight Scenes", "Merch Store", "Mobile App"],
    },
];

const RoadmapCard = ({ phase, title, status, description, icon, items }: (typeof roadmapPhases)[0]) => (
    <div className="clay-card rounded-2xl bg-background/70 backdrop-blur-sm p-6 flex flex-col items-center text-center h-full">
        <div className="mb-4">{icon}</div>
        <CardTitle className="font-headline text-2xl mb-2">{`Phase ${phase}: ${title}`}</CardTitle>
        <p className="text-sm font-bold text-primary mb-4">{status}</p>
        <p className="text-muted-foreground flex-grow mb-4">{description}</p>
        <ul className="text-left list-none space-y-2 font-semibold text-foreground/80">
           {items.map(item => <li key={item} className="flex items-center gap-2">✔<span>{item}</span></li>)}
        </ul>
    </div>
);

const RoadmapSection = () => {
    return (
        <section id="roadmap" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-headline text-foreground">Our Roadmap</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The path to a deliciously baked future.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roadmapPhases.map((phase) => (
                        <RoadmapCard key={phase.phase} {...phase} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
