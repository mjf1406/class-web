/** @format */

import {
    MonitorCog,
    Wand2,
    Dices,
    ScrollText,
    Hammer,
    Construction,
} from "lucide-react"; // <- added BarChart2
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/settings/settings";

// Each card has a "underConstruction" boolean
// and "content" is split into { name, description } objects
const featureCards = [
    {
        title: "Screens",
        description: "Display & control classroom screens easily.",
        icon: MonitorCog,
        link: "/features#screens",
        underConstruction: true,
        content: [
            {
                name: "Classroom Screen",
                description: "for the whole class to see",
            },
            {
                name: "Teacher Screen",
                description: "control the classroom screen on mobile",
            },
        ],
    },
    {
        title: "Tools",
        description: "Helpful add-ons for everyday tasks.",
        icon: Hammer,
        link: "/features#tools",
        underConstruction: false,
        content: [
            {
                name: "Attendance",
                description: "quickly manage daily attendance",
            },
            {
                name: "Noise Monitor",
                description: "alert the class if it gets too loud",
            },
            {
                name: "Points",
                description: "reward or deduct points for student behavior",
            },
            {
                name: "Tasks",
                description: "manage student tasks so they know what to do",
            },
            {
                name: "Expectations",
                description: "set student expectations, like essay length",
            },
        ],
    },
    {
        title: "Generators",
        description: "Auto-create custom worksheets with or without AI.",
        icon: Wand2,
        link: "/features#generators",
        underConstruction: true,
        content: [
            {
                name: "Cloze",
                description: "auto-generate fill-in-the-blank passages",
            },
            {
                name: "Crossword Puzzle",
                description: "easily create fun puzzles",
            },
            {
                name: "Word Search",
                description: "generate random word searches",
            },
        ],
    },
    {
        title: "Assigners",
        description: "Fairly distribute tasks & seating.",
        icon: Dices,
        link: "/features#assigners",
        underConstruction: false,
        content: [
            {
                name: "Random",
                description: "pick a random student or group",
            },
            {
                name: "Round-Robin",
                description: "ensure everyone gets a turn",
            },
            {
                name: "Seats",
                description:
                    "assign seats, prioritizing new neighbors and seats",
            },
        ],
    },
    {
        title: "Student Dashboard",
        description:
            "Empower students to track points and behavior at a glance.",
        icon: ScrollText,
        link: "/features#student-dashboard",
        underConstruction: false,
        content: [
            {
                name: "Point History",
                description: "review positive & negative point changes",
            },
            {
                name: "Behavior Stats",
                description: "quick breakdown of behaviors and rewards",
            },
            {
                name: "Redemption History",
                description: "see what has been redeemed",
            },
            {
                name: "Expectations",
                description: "see any expectations they have set for them",
            },
            {
                name: "Tasks",
                description: "see which tasks need to be worked on today",
            },
        ],
    },
];

export default function FeaturesSection() {
    return (
        <div className="w-full mx-auto mt-20">
            <div className="px-4 max-w-7xl flex flex-col justify-center items-center mx-auto">
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h2
                        id="features"
                        className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
                    >
                        Features
                    </h2>
                    <p className="mt-1 text-muted-foreground">
                        Explore tools that enhance your classroom with gamified
                        learning elements. The below features aim to boost
                        student engagement while simplifying your teaching
                        workflow.
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1">
                    {/* Summary on the left, five cards on the right */}
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
                        {/* Left side summary */}
                        <div className="space-y-4 w-full mx-auto max-w-xl col-span-1">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                                Your time as a teacher is extremely valuable
                            </h3>
                            <p className="text-muted-foreground">
                                As a teacher myself, I know I&apos;m expected to
                                do too much.{" "}
                            </p>
                            <p className=" text-muted-foreground">
                                Use {APP_NAME} to quickly manage your class with
                                classroom screens, track attendance,
                                auto-generate worksheets, and assign students
                                fairly. Everything is designed to save you time,
                                keep students engaged, and make your life as a
                                teacher far easier.
                            </p>
                            {/* <Button
                                variant="default"
                                asChild
                            >
                                <Link href="/features">See All Features</Link>
                            </Button> */}
                        </div>

                        {/* Right side: five cards */}
                        <div className="grid gap-4 sm:grid-cols-2 col-span-1 lg:col-span-2">
                            {featureCards.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <Card
                                        key={index}
                                        // If under construction, dim card (50% opacity)
                                        className={
                                            item.underConstruction
                                                ? "opacity-50"
                                                : ""
                                        }
                                    >
                                        <CardHeader>
                                            {/* Title + Icon Row */}
                                            <div className="flex items-center gap-2">
                                                <Icon className="w-5 h-5 text-foreground" />
                                                <CardTitle>
                                                    {item.title}
                                                </CardTitle>
                                            </div>
                                            <CardDescription>
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc list-inside space-y-1 text-xs">
                                                {item.content.map(
                                                    (bullet, i) => (
                                                        <li key={i}>
                                                            <strong>
                                                                {bullet.name}:
                                                            </strong>{" "}
                                                            <span className="dark:text-foreground/70">
                                                                {
                                                                    bullet.description
                                                                }
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </CardContent>
                                        <CardFooter>
                                            {item.underConstruction ? (
                                                <Button
                                                    variant="link"
                                                    disabled
                                                >
                                                    <Construction /> Under
                                                    Construction
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="link"
                                                    asChild
                                                >
                                                    {/* <Link href={item.link}>
                                                        Learn More
                                                    </Link> */}
                                                </Button>
                                            )}
                                        </CardFooter>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
