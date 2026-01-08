'use client'

import { motion } from 'framer-motion'
import {
    Percent, Zap, GraduationCap, UserCheck, Radar, ShieldCheck, Briefcase, Wallet, Truck, ArrowRight, CheckCircle2, MousePointerClick
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Advantages() {
    const { t } = useLanguage()

    const scrollToForm = (formId: 'early-contact' | 'contact' = 'early-contact') => {
        const element = document.querySelector(`#${formId}`)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    const advantagesList = [
        {
            icon: Percent,
            title: t.advantages.items.commission.title,
            text: t.advantages.items.commission.desc,
        },
        {
            icon: Zap,
            title: t.advantages.items.payment.title,
            text: t.advantages.items.payment.desc,
            hasAction: true,
            actionLabel: t.advantages.items.payment.actionBtn
        },
        {
            icon: GraduationCap,
            title: t.advantages.items.learning.title,
            text: t.advantages.items.learning.desc,
        },
        {
            icon: UserCheck,
            title: t.advantages.items.support.title,
            text: t.advantages.items.support.desc,
        },
        {
            icon: Radar,
            title: t.advantages.items.tracking.title,
            text: t.advantages.items.tracking.desc,
        },
        {
            icon: ShieldCheck,
            title: t.advantages.items.security.title,
            text: t.advantages.items.security.desc,
        },
        {
            icon: Briefcase,
            title: t.advantages.items.collab.title,
            text: t.advantages.items.collab.desc,
        },
        {
            icon: Wallet,
            title: t.advantages.items.finance.title,
            text: t.advantages.items.finance.desc,
        },
        {
            icon: Truck,
            title: t.advantages.items.logistics.title,
            text: t.advantages.items.logistics.desc,
        },
    ]

    return (
        <section className="relative py-20 sm:py-32 bg-primary-darkBlue/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div dir="ltr" className="grid lg:grid-cols-2 gap-12 items-end mb-16 sm:mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            {t.advantages.titlePart1} <br />
                            <span className="text-primary-orange">{t.advantages.titlePart2}</span>
                        </h2>
                        <p className="text-xl text-white/80 border-l-4 border-primary-orange pl-6 py-2">
                            {t.advantages.subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:flex justify-end"
                    >
                        <motion.button
                            onClick={() => scrollToForm('early-contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-primary-orange hover:border-primary-orange text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group"
                        >
                            {t.advantages.btnPartner}
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>
                </div>

                {/* List */}
                <div dir="ltr" className="grid md:grid-cols-2 gap-x-16 gap-y-0">
                    {advantagesList.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative border-t border-white/10 py-8 hover:border-white/30 transition-colors duration-300"
                            >
                                <div className="flex gap-6 items-start">
                                    <div className="shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-orange group-hover:text-white text-primary-orange transition-all duration-300">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white/50 mb-2 uppercase tracking-wider text-xs group-hover:text-primary-orange transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-xl text-white/90 font-medium leading-relaxed group-hover:text-white transition-colors">
                                            {item.text}
                                        </p>

                                        {/* @ts-ignore */}
                                        {item.hasAction && (
                                            <motion.button
                                                initial={{ opacity: 0, height: 0 }}
                                                whileInView={{ opacity: 1, height: 'auto' }}
                                                whileHover={{ x: 5 }}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    scrollToForm('early-contact')
                                                }}
                                                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-orange hover:text-white transition-colors uppercase tracking-wide cursor-pointer"
                                            >
                                                <span className="border-b border-primary-orange/30 pb-0.5 hover:border-white transition-colors">
                                                    {/* @ts-ignore */}
                                                    {item.actionLabel}
                                                </span>
                                                <MousePointerClick className="h-4 w-4" />
                                            </motion.button>
                                        )}
                                    </div>

                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                        <CheckCircle2 className="h-6 w-6 text-primary-orange" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-12 lg:hidden text-center">
                    <button
                        onClick={() => scrollToForm('contact')}
                        className="w-full px-8 py-4 bg-primary-orange text-white rounded-lg font-bold text-lg hover:bg-primary-orange/90 transition-all shadow-lg shadow-primary-orange/20"
                    >
                        {t.advantages.btnOffer}
                    </button>
                </div>

            </div>
        </section>
    )
}