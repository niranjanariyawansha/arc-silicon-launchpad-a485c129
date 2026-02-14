import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Book, Code, Cpu, Download } from "lucide-react";

const docsSections = [
    {
        title: "Datasheets",
        icon: <FileText className="w-8 h-8 text-arc-blue" />,
        items: [
            { name: "VX-1 Soft Core (FPGA) — DS-2024-001", size: "2.4 MB" },
            { name: "VX-1 Hard Core (ASIC) — DS-2024-002", size: "3.1 MB" },
            { name: "NX-2 Network Accelerator — DS-2024-003", size: "2.8 MB" },
        ],
    },
    {
        title: "Integration Guides",
        icon: <Cpu className="w-8 h-8 text-arc-red" />,
        items: [
            { name: "AXI4-Stream Interface Specification", size: "1.2 MB" },
            { name: "APB Configuration Register Map", size: "0.8 MB" },
            { name: "Clock Domain Crossing Guidelines", size: "1.5 MB" },
        ],
    },
    {
        title: "Software SDK",
        icon: <Code className="w-8 h-8 text-arc-green" />,
        items: [
            { name: "Linux Userspace Driver (v2.4.0)", size: "GitHub" },
            { name: "Bare Metal HAL Reference", size: "GitHub" },
            { name: "Python Bindings for Simulation", size: "GitHub" },
        ],
    },
    {
        title: "Application Notes",
        icon: <Book className="w-8 h-8 text-arc-yellow" />,
        items: [
            { name: "AN-101: Reducing JSON Latency in HFT", size: "1.1 MB" },
            { name: "AN-102: 10GbE Line-Rate Parsing", size: "1.4 MB" },
        ],
    },
];

const Docs = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="font-display text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Technical Documentation
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Detailed specifications, integration guides, and application notes for the Voxel VX-1 family.
                    </motion.p>
                </div>
            </section>

            <section className="px-6 pb-32">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {docsSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            className="bg-muted/30 rounded-2xl p-8 border border-border/50 hover:border-border transition-colors group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-background rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                                    {section.icon}
                                </div>
                                <h2 className="font-display text-2xl font-semibold">{section.title}</h2>
                            </div>
                            <ul className="space-y-4">
                                {section.items.map((item) => (
                                    <li key={item.name} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0 hover:bg-muted/50 px-2 rounded-lg transition-colors cursor-pointer">
                                        <span className="text-sm font-medium">{item.name}</span>
                                        <span className="text-xs text-muted-foreground bg-background px-2 py-1 rounded-md border border-border/50 flex items-center gap-1">
                                            {item.size.includes("MB") && <Download className="w-3 h-3" />}
                                            {item.size}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Docs;
