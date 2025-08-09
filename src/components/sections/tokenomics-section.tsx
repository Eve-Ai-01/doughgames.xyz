"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Wallet, ShoppingCart } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import React from 'react';

const tokenData = [
    { name: 'Liquidity Pool', value: 40 },
    { name: 'Marketing & Team', value: 20 },
    { name: 'Community Airdrop', value: 25 },
    { name: 'Ecosystem Fund', value: 15 },
];
const COLORS = ['hsl(var(--primary))', 'hsla(var(--primary), 0.7)', 'hsl(var(--accent))', 'hsla(var(--accent), 0.7)'];

const TokenomicsChart = () => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
                data={tokenData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                nameKey="name"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
                {tokenData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className="stroke-background focus:outline-none" />
                ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "hsl(var(--background) / 0.8)",
                borderColor: "hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.1) inset",
                fontFamily: "var(--font-body)",
              }}
            />
            <Legend/>
        </PieChart>
    </ResponsiveContainer>
);

const TokenomicsSection = () => {
    const { toast } = useToast();
    const contractAddress = "0xL1X...DoughGamesContract...42069";

    const handleCopy = () => {
        navigator.clipboard.writeText(contractAddress);
        toast({
            title: "Copied to clipboard!",
            description: "You can now paste the contract address.",
        });
    };

    return (
        <section id="tokenomics" className="py-20 md:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-headline text-foreground">Tokenomics</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The recipe for our delicious dough.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="clay-card rounded-2xl lg:col-span-2 bg-secondary">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Token Allocations</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <TokenomicsChart />
                           
                        </CardContent>
                    </Card>
                    <Card className="clay-card rounded-2xl bg-secondary">
                        <CardHeader><CardTitle className="font-headline text-2xl">Contract Address</CardTitle></CardHeader>
                        <CardContent className="flex flex-col gap-4">
                            <p className="text-sm font-code break-all text-muted-foreground">{contractAddress}</p>
                            <Button onClick={handleCopy} className="w-full clay-button bg-primary text-primary-foreground"><Copy className="mr-2 h-4 w-4" /> Copy Address</Button>
                        </CardContent>
                    </Card>
                    <Card className="clay-card rounded-2xl bg-secondary">
                        <CardHeader><CardTitle className="font-headline text-2xl">Token Utilities</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                                <li>Access to exclusive tools</li>
                                <li>NFT collection upgrades</li>
                                <li>Discounts on merchandise</li>
                                <li>Governance rights</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="clay-card rounded-2xl bg-secondary">
                        <CardHeader><CardTitle className="font-headline text-2xl">How to Buy</CardTitle></CardHeader>
                        <CardContent className="flex flex-col gap-4">
                             <p className="text-muted-foreground">Get your $DOH tokens in a few easy steps.</p>
                             <Button className="w-full clay-button bg-accent text-accent-foreground"><Wallet className="mr-2 h-4 w-4" /> Get Wallet</Button>
                             <Button className="w-full clay-button bg-accent text-accent-foreground"><ShoppingCart className="mr-2 h-4 w-4" /> Go to DEX</Button>
                        </CardContent>
                    </Card>
                    <Card className="clay-card rounded-2xl bg-secondary">
                        <CardHeader><CardTitle className="font-headline text-2xl">Live Price Chart</CardTitle></CardHeader>
                        <CardContent>
                           <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                             <p className="text-muted-foreground">DexScreener embed coming soon!</p>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default TokenomicsSection;
