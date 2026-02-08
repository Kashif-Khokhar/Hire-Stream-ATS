import React from 'react';
import {
    User,
    Settings as SettingsIcon,
    Bell,
    Shield,
    CreditCard,
    Users,
    Globe,
    ExternalLink
} from 'lucide-react';
import { cn } from '../../utils/cn';

export const SettingsPage: React.FC = () => {
    const sections = [
        {
            title: 'General',
            items: [
                { icon: User, label: 'Profile Information', desc: 'Update your name, email and avatar' },
                { icon: Globe, label: 'Localization', desc: 'Manage your timezone and language' }
            ]
        },
        {
            title: 'Company',
            items: [
                { icon: Users, label: 'Team Members', desc: 'Manage your recruiting team permissions' },
                { icon: Shield, label: 'Security', desc: 'Two-factor authentication and passwords' }
            ]
        },
        {
            title: 'System',
            items: [
                { icon: Bell, label: 'Notifications', desc: 'Configure email and browser alerts' },
                { icon: CreditCard, label: 'Billing & Plans', desc: 'Manage your subscription and invoices' }
            ]
        }
    ];

    return (
        <div className="space-y-8 max-w-4xl">
            <div>
                <h2 className="text-xl font-bold text-slate-900">Settings</h2>
                <p className="text-sm text-slate-500 mt-1">Manage your professional profile and recruitment preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <aside className="space-y-1">
                    {sections.map((section) => (
                        <div key={section.title} className="pt-4 first:pt-0">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-2">{section.title}</h3>
                            {section.items.map((item) => (
                                <button
                                    key={item.label}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all group",
                                        item.label === 'Profile Information' ? "bg-brand-50 text-brand-600" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                                    )}
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    ))}
                </aside>

                <div className="md:col-span-3 space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative group">
                                <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center text-2xl font-black text-brand-600 border-2 border-brand-100 group-hover:bg-brand-100 transition-colors">
                                    KK
                                </div>
                                <button className="absolute -bottom-1 -right-1 p-1.5 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-all">
                                    <SettingsIcon className="w-3.5 h-3.5 text-slate-500" />
                                </button>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-slate-900">Kashif Khokhar</h4>
                                <p className="text-sm text-slate-500 font-medium italic">Talent Acquisition Specialist</p>
                                <div className="flex gap-2 mt-3">
                                    <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold">Admin</span>
                                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">Active Now</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="Kashif Khokhar"
                                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    defaultValue="kashif.k@hirestream.com"
                                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Department</label>
                                <input
                                    type="text"
                                    defaultValue="Human Resources"
                                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all font-medium"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Work Schedule</label>
                                <select className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all font-medium appearance-none">
                                    <option>9:00 AM - 5:00 PM EST</option>
                                    <option>8:00 AM - 4:00 PM EST</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                            <div>
                                <button className="text-xs font-bold text-slate-400 hover:text-red-500 transition-all flex items-center gap-2">
                                    Deactivate Account
                                    <Shield className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-5 py-2.5 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors text-sm">Cancel</button>
                                <button className="px-5 py-2.5 bg-brand-500 text-white font-bold rounded-xl hover:bg-brand-600 shadow-lg shadow-brand-500/20 transition-all text-sm">Save Changes</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-emerald-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-900/10 flex items-center justify-between group">
                        <div className="relative z-10 max-w-sm">
                            <h4 className="font-bold text-lg">Looking for more?</h4>
                            <p className="text-sm text-emerald-100 mt-2 leading-relaxed opacity-80 font-medium">Upgrade to Platinum to unlock AI-powered candidate screening and automated scheduling.</p>
                            <button className="mt-6 bg-white text-emerald-900 px-5 py-2.5 rounded-xl font-black text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                                Upgrade to Platinum
                                <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                        <CreditCard className="absolute -right-6 -bottom-6 w-48 h-48 text-white opacity-5 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};
