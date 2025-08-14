// src/components/sections/community-section.tsx

"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Send, Disc } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const CommunitySection = () => {
    const { toast } = useToast();

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailInput = e.currentTarget.elements.namedItem("email") as HTMLInputElement;
        const email = emailInput.value;
        if (email) {
            toast({
                title: "Subscribed!",
                description: `Thanks for joining the Dough Games community, ${email}!`,
            });
            emailInput.value = '';
        }
    };
    
    return (
        <section id="community" className="py-20 md:py-28 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-headline text-foreground">Join the Community</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The oven is hot and the dough is rising. Don't miss out!</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                         <h3 className="text-3xl font-bold font-headline text-center md:text-left">Get Involved</h3>
                         <p className="text-muted-foreground text-center md:text-left">Follow our socials, join the discussion, and subscribe for the latest alpha drops and project updates.</p>
                         <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Button className="clay-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 text-base font-bold"><Twitter className="mr-2"/> Twitter</Button>
                            <Button className="clay-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 text-base font-bold"><Disc className="mr-2"/> Discord</Button>
                            <Button className="clay-button bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 text-base font-bold"><Send className="mr-2"/> Telegram</Button>
                         </div>
                         <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 pt-4">
                            <Input type="email" name="email" placeholder="your.email@dough.com" className="clay-card !bg-card rounded-full h-12 flex-grow" required aria-label="Email for subscription" />
                            <Button type="submit" className="clay-button bg-primary text-primary-foreground rounded-full h-12 px-6 font-bold">Subscribe</Button>
                         </form>
                    </div>
                     <div className="hidden md:block">
                        <Card className="clay-card rounded-2xl p-4 bg-secondary">
                            <CardContent className="p-2">
                                <div className="space-y-4">
                                    <div className="flex gap-4 items-center">
                                        <Image src="https://placehold.co/48x48.png" data-ai-hint="logo avatar" alt="Dough Games Avatar" width={48} height={48} className="rounded-full" />
                                        <div>
                                            <p className="font-bold font-headline">Dough Games <span className="text-muted-foreground font-normal">@DoughGames · 1h</span></p>
                                        </div>
                                    </div>
                                    <p className="text-foreground">Just dropped our new landing page! Claymorphism is the new meta. What do you guys think? $DOH #memecoin</p>
                                    <Image src="https://placehold.co/500x300.png" data-ai-hint="game screenshot" alt="Dough Games Screenshot" width={500} height={300} className="rounded-lg w-full border-2 border-border" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommunitySection;
