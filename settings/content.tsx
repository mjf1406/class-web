/** @format */

import {
    MonitorCog,
    MonitorSmartphone,
    Clock,
    ZoomIn,
    Radio,
    Dices,
    MessageCircle,
    Shuffle,
    Cog,
    BookDashed,
    LayoutGrid,
    Space,
    RectangleEllipsis,
    TextSearch,
    RotateCw,
    RockingChair,
    Text,
    AudioLines,
    CheckSquare,
    CirclePlus,
} from "lucide-react";
import { ItemGridData } from "@/components/ItemGrid";
import { AIBadge } from "@/components/AIBadge";

export const screensData: ItemGridData[] = [
    {
        name: "Classroom Screen",
        description:
            "Display various widgets on a shared screen for your whole class to see.",
        icon: MonitorCog,
        badge: null,
        href: "https://www.classquest.app/assigners/random",
        under_construction: true,
    },
    {
        name: "Teacher Screen",
        description:
            "Easily control what's shown on the Classroom Screen and manage student points right from your phone.",
        icon: MonitorSmartphone,
        badge: null,
        href: "https://www.classquest.app/assigners/round-robin",
        under_construction: true,
    },
];
export const toolsData: ItemGridData[] = [
    {
        name: "Attendance",
        description:
            "Take attendance for any class easily when viewing any class, effecting which students can earn points for the day.",
        icon: CheckSquare,
        href: "https://www.classquest.app/classes",
        under_construction: false,
    },
    {
        name: "Classroom Clock",
        description:
            "Show a full-screen clock with easy-access timers and rotation schedules for classroom centers.",
        icon: Clock,
        href: "https://www.classquest.app/tools/classroom-clock",
        under_construction: true,
    },
    {
        name: "MagniText",
        description:
            "Display large text on your phone so it's easy for students to read from a distance.",
        icon: ZoomIn,
        href: "https://www.classquest.app/tools/magni-text",
        under_construction: true,
    },
    {
        name: "Noise Monitor",
        description:
            "See how loud your students are being while in class and and alert everyone if it gets too loud.",
        icon: AudioLines,
        href: "https://www.classquest.app/tools/noise-monitor",
    },
    {
        name: "Points",
        description:
            "Award student points for good behaviors, and remove points for negative behaviors easily when viewing any class. Students can then redeem things using those points.",
        icon: CirclePlus,
        href: "https://www.classquest.app/classes",
        under_construction: false,
    },
    {
        name: "Random Event",
        description:
            "Randomly choose a daily event from default options or ones you've added.",
        icon: Radio,
        href: "https://www.classquest.app/tools/round-robin",
        under_construction: true,
    },
    {
        name: "Randomizer",
        description:
            "Randomly select a class, group, or student for activities or assignments.",
        icon: Dices,
        href: "https://www.classquest.app/tools/randomizer",
    },
    {
        name: "Silent Chat",
        description:
            "Communicate silently with a student by passing your phone between each other.",
        icon: MessageCircle,
        href: "https://www.classquest.app/tools/silent-chat",
        under_construction: true,
    },
    {
        name: "Shuffler",
        description:
            "Randomly order your classes, groups, or students, ensuring everyone gets a chance to be first and last before any repeats.",
        icon: Shuffle,
        href: "https://www.classquest.app/tools/shuffler",
    },
];
export const generatorsData: ItemGridData[] = [
    {
        name: "Custom",
        description:
            "Design your own worksheet by selecting activities from any of the Generators.",
        icon: Cog,
        badge: null,
        href: "https://www.classquest.app/generators/custom",
        under_construction: true,
    },
    {
        name: "Cloze",
        description:
            "Create reading passages with missing words (e.g., adjectives, nouns) for students to fill in that are tailored to each student's reading level.",
        icon: BookDashed,
        badge: <AIBadge />,
        href: "https://www.classquest.app/generators/cloze",
        under_construction: true,
    },
    {
        name: "Crossword Puzzle",
        description:
            "Create fun crossword puzzles by entering words and clues.",
        icon: LayoutGrid,
        badge: null,
        href: "https://www.classquest.app/generators/crossword",
        under_construction: true,
    },
    {
        name: "Fill-in-the-Blank",
        description:
            "Create fill-in-the-blank sentences tailored to your students' reading levels, with optional word banks.",
        icon: Space,
        badge: <AIBadge />,
        href: "https://www.classquest.app/generators/fill-in-the-blank",
        under_construction: true,
    },
    {
        name: "Reading Passage",
        description:
            "Produce reading passages on any topic, customized for each student's reading level.",
        icon: Text,
        badge: <AIBadge />,
        href: "https://www.classquest.app/generators/reading-passage",
        under_construction: true,
    },
    {
        name: "Word Search",
        description:
            "Create word searches by entering words, with options to adjust difficulty (e.g., reveal directions or letters).",
        icon: LayoutGrid,
        badge: null,
        href: "https://www.classquest.app/generators/word-search",
        under_construction: true,
    },
    {
        name: "Scramble Words",
        description:
            "Create worksheets where students unscramble words you provide.",
        icon: RectangleEllipsis,
        badge: null,
        href: "https://www.classquest.app/generators/unscramble",
        under_construction: true,
    },
    {
        name: "Vocabulary Hunt",
        description:
            "Produce reading passages using specific vocabulary words, tailored to each student's reading level.",
        icon: TextSearch,
        badge: <AIBadge />,
        href: "https://www.classquest.app/generators/vocabulary-hunt",
        under_construction: true,
    },
];
export const assignersData: ItemGridData[] = [
    {
        name: "Random",
        description: "Randomly assign students to all the fungible things!",
        icon: Dices,
        badge: null,
        href: "https://www.classquest.app/assigners/random",
    },
    {
        name: "Round-Robin",
        description: "Randomly assign students ensuring everyone gets a turn!",
        icon: RotateCw,
        badge: null,
        href: "https://www.classquest.app/assigners/round-robin",
    },
    {
        name: "Seats",
        description:
            "Randomly assign students to seats, ensuring boys sit next to girls!",
        icon: RockingChair,
        href: "https://www.classquest.app/assigners/seats",
    },
];
