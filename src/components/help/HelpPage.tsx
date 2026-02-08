import React from 'react';
import {
    Book,
    HelpCircle,
    MessageCircle,
    ExternalLink,
    PlayCircle,
    Search,
    MessageSquare,
    LifeBuoy,
    Mail
} from 'lucide-react';

export const HelpPage: React.FC = () => {
    const categories = [
        { title: 'Getting Started', count: 12, icon: Book },
        { title: 'Pipeline Management', count: 8, icon: PlayCircle },
        { title: 'Candidate Experience', count: 15, icon: LifeBuoy },
        { title: 'Jobs & Requisitions', count: 10, icon: MessageCircle }
    ];

    const faqs = [
        { q: "How do I move candidates between stages?", a: "You can simply drag and drop candidate cards between columns in the Recruitment Pipeline view." },
        { q: "Can I customize the pipeline stages?", a: "Yes, stages can be configured in the Pipeline Settings within the Settings module." },
        { q: "How do I add team members?", a: "Navigate to Settings > Company > Team Members to invite your colleagues." }
    ];

    return (
        <div className="space-y-10 max-w-5xl">
            <div className="text-center space-y-4 py-10 bg-brand-900 rounded-[2rem] text-white relative overflow-hidden shadow-2xl shadow-brand-900/20">
                <div className="relative z-10">
                    <h2 className="text-3xl font-black italic tracking-tight">How can we help?</h2>
                    <p className="text-brand-100/60 font-medium">Search our documentation or contact our support team.</p>
                    <div className="mt-8 max-w-lg mx-auto relative px-4 text-slate-900">
                        <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search help articles..."
                            className="w-full bg-white border-0 focus:ring-4 focus:ring-brand-500/20 rounded-2xl py-4 pl-14 pr-4 shadow-xl text-sm"
                        />
                    </div>
                </div>
                <HelpCircle className="absolute -right-10 -bottom-10 w-64 h-64 text-white opacity-5 rotate-12" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat) => (
                    <button key={cat.title} className="bg-white border border-slate-200 p-6 rounded-2xl hover:shadow-premium transition-all text-left group">
                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-50 transition-colors">
                            <cat.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">{cat.title}</h4>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{cat.count} Articles</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-500 transition-colors" />
                        </div>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-6">
                    <h3 className="text-lg font-bold text-slate-900 italic">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand-100 transition-all cursor-pointer group">
                                <div className="flex items-start gap-4">
                                    <span className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-black flex-shrink-0">?</span>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed italic">{faq.a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-4">Still need help?</h4>
                        <div className="space-y-3">
                            <button className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all text-left">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-brand-600 shadow-sm">
                                    <MessageSquare className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Live Chat</p>
                                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Available Now</p>
                                </div>
                            </button>
                            <button className="w-full flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all text-left">
                                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-indigo-600 shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900">Email Support</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Responds in 2h</p>
                                </div>
                            </button>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-6 text-center italic">Our happiness team is here for you Mon-Fri, 9am-6pm EST.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
