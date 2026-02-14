import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BarChart, Activity, Zap, Clock } from "lucide-react";

const Benchmarks = () => {
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
                        VX-1 Performance Benchmarks
                    </motion.h1>
                    <motion.p
                        className="text-lg text-muted-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Comparing the Voxel VX-1 Hardware Core against industry-standard software parsers (simdjson, Jackson).
                    </motion.p>
                </div>
            </section>

            <section className="px-6 pb-20">
                <div className="max-w-5xl mx-auto">
                    {/* Main Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <motion.div
                            className="col-span-1 md:col-span-3 bg-muted/20 rounded-2xl p-8 border border-border/50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-arc-blue" />
                                Throughput (Gbps) - Higher is Better
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-semibold text-foreground">ASC VX-1 (Hardware)</span>
                                        <span className="font-mono text-arc-blue font-bold">128.0 Gbps</span>
                                    </div>
                                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-arc-blue"
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-muted-foreground">simdjson (AVX-512)</span>
                                        <span className="font-mono text-muted-foreground">2.5 Gbps</span>
                                    </div>
                                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-muted-foreground/50"
                                            initial={{ width: 0 }}
                                            animate={{ width: "2%" }}
                                            transition={{ duration: 1, delay: 0.6 }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-muted-foreground">Jackson (Java)</span>
                                        <span className="font-mono text-muted-foreground">0.8 Gbps</span>
                                    </div>
                                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-muted-foreground/30"
                                            initial={{ width: 0 }}
                                            animate={{ width: "0.6%" }}
                                            transition={{ duration: 1, delay: 0.7 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "Deterministic Latency", value: "12 ns", sub: "per byte", icon: <Zap className="w-6 h-6 text-arc-yellow" /> },
                            { label: "Power Efficiency", value: "150x", sub: "vs Intel Xeon", icon: <Activity className="w-6 h-6 text-arc-green" /> },
                            { label: "Throughput Limit", value: "Line Rate", sub: "Scales with clock", icon: <BarChart className="w-6 h-6 text-arc-red" /> },
                        ].map((metric, i) => (
                            <motion.div
                                key={metric.label}
                                className="bg-card rounded-xl p-6 border border-border shadow-sm text-center"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + i * 0.1 }}
                            >
                                <div className="flex justify-center mb-4">{metric.icon}</div>
                                <div className="text-3xl font-display font-bold text-foreground mb-1">{metric.value}</div>
                                <div className="text-sm font-semibold text-muted-foreground mb-1">{metric.label}</div>
                                <div className="text-xs text-muted-foreground/60">{metric.sub}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 bg-arc-blue/5 border border-arc-blue/20 rounded-2xl p-8 text-center" >
                        <h3 className="text-lg font-semibold mb-2">Eliminate the CPU Tax</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Moving JSON parsing to ASC hardware offloads up to 40% of CPU cycles in data-intensive applications, freeing up general-purpose cores for business logic.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Benchmarks;
