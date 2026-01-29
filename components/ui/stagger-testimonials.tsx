"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Capital Core Finance helped my manufacturing unit secure ₹2 Cr working capital loan in just 15 days 🏭 Their understanding of MSME needs is exceptional. Highly recommended for Bangalore businesses!",
        by: "Ramesh Naidu, Manufacturing Unit Owner, Peenya Industrial Area",
        emoji: "👨‍💼"
    },
    {
        tempId: 1,
        testimonial: "As a startup founder, getting a business loan seemed impossible 💼 Capital Core understood my vision and helped me secure funding when banks rejected me. Now my tech company is thriving! 🚀",
        by: "Priya Venkatesh, Tech Startup Founder, Koramangala",
        emoji: "👩‍💼"
    },
    {
        tempId: 2,
        testimonial: "Expanded my retail chain from 2 to 5 stores with Capital Core's business financing 🛒 Their team guided me through the entire CGTMSE scheme. Professional and efficient service! ⭐",
        by: "Suresh Gowda, Retail Business Owner, Jayanagar",
        emoji: "🧑‍💻"
    },
    {
        tempId: 3,
        testimonial: "Got my machinery loan approved for my printing press within 10 days 🖨️ Capital Core's expertise in equipment financing is unmatched. They made the complex process simple! 💯",
        by: "Anand Kumar, Printing Press Owner, Rajajinagar",
        emoji: "👨"
    },
    {
        tempId: 4,
        testimonial: "Capital Core helped me restructure my existing loans and get additional working capital 📊 My garment export business is now debt-free and growing. Forever grateful! 🙏",
        by: "Meera Krishnamurthy, Garment Exporter, Bommanahalli",
        emoji: "👩"
    },
    {
        tempId: 5,
        testimonial: "Secured project financing for my commercial complex construction 🏗️ Capital Core's relationship with banks got me the best interest rates. Excellent support throughout! ✨",
        by: "Vijay Reddy, Real Estate Developer, Whitefield",
        emoji: "👨‍🦱"
    },
    {
        tempId: 6,
        testimonial: "My restaurant chain expansion was possible only because of Capital Core 🍽️ They understood the F&B industry challenges and got me sanctioned in record time. Great team! 🌟",
        by: "Lakshmi Prasad, Restaurant Chain Owner, Indiranagar",
        emoji: "👩‍🍳"
    },
    {
        tempId: 7,
        testimonial: "Capital Core arranged MSME loan under Mudra scheme for my auto components unit 🔧 Zero collateral and excellent terms. They truly support small business owners! 💪",
        by: "Ravi Shankar, Auto Components Manufacturer, Bommasandra",
        emoji: "🧑‍🔧"
    },
    {
        tempId: 8,
        testimonial: "From loan application to disbursal, Capital Core handled everything 📈 Got ₹50 lakhs for my IT services company expansion. Professional, transparent, and reliable! 🏆",
        by: "Deepak Rao, IT Services Company, Electronic City",
        emoji: "👨‍💼"
    },
    {
        tempId: 9,
        testimonial: "Capital Core's expertise in government schemes helped me avail Stand-up India benefits 🇮🇳 My logistics company got the funding it needed. Highly professional team! 🚚",
        by: "Fatima Begum, Logistics Business Owner, Yeshwanthpur",
        emoji: "👩‍💻"
    },
    {
        tempId: 10,
        testimonial: "Secured term loan for my pharma distribution business in just 2 weeks 💊 Capital Core's documentation support made the process seamless. Best financial consultants! 👏",
        by: "Karthik Hebbar, Pharma Distributor, BTM Layout",
        emoji: "🧑‍💼"
    },
    {
        tempId: 11,
        testimonial: "Capital Core helped my educational institute get project financing for new campus 🎓 Their understanding of institutional financing is exceptional. Trusted partners! 🙌",
        by: "Dr. Shivakumar, Educational Institute Director, Marathahalli",
        emoji: "👨‍🏫"
    },
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-primary text-primary-foreground border-primary"
                    : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45 bg-border"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2
                }}
            />
            <div
                className="mb-4 h-14 w-14 flex items-center justify-center text-4xl bg-muted/30 rounded-lg"
                style={{
                    boxShadow: "3px 3px 0px hsl(var(--background))"
                }}
            >
                {testimonial.emoji}
            </div>
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-primary-foreground" : "text-foreground"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
                        "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
