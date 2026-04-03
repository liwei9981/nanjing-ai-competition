import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, Trophy, Rocket, Users, Lightbulb, ArrowRight, MapPin, Calendar, Building2, Cpu, Brain, CircuitBoard, Zap, GraduationCap, Home, Shield, ChevronDown, Mail, Star, Award, Target } from 'lucide-react';
import { translations } from './translations';

type Lang = 'EN' | 'CN';
type Section = 'home' | 'nanjing' | 'guide' | 'apply';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };
const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.5, delay: i * 0.12 } });

export default function App() {
  const [lang, setLang] = useState<Lang>('EN');
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = translations[lang];
  const toggleLang = () => setLang(lang === 'EN' ? 'CN' : 'EN');

  const navItems: { key: Section; label: string; href: string }[] = [
    { key: 'home', label: t.nav.home, href: '#home' },
    { key: 'nanjing', label: t.nav.nanjing, href: '#nanjing' },
    { key: 'guide', label: t.nav.guide, href: '#guide' },
    { key: 'apply', label: t.nav.apply, href: '#apply' },
  ];

  const trackIcons = [Brain, Cpu, CircuitBoard];
  const highlightIcons = [Zap, Star, Shield];

  return (
    <div className="min-h-screen bg-[#060e1f] text-white selection:bg-emerald-400/30 selection:text-white">
      {/* ═══ NAVIGATION ═══ */}
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8 bg-[#060e1f]/70 backdrop-blur-xl border-b border-white/5">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-cyan-400 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Lightbulb className="h-6 w-6 text-white relative z-10" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent hidden sm:block">AI Competition</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <a key={item.key} href={item.href} onClick={() => setActiveSection(item.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === item.key ? 'bg-white/10 text-emerald-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleLang} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300">
              <Globe className="h-4 w-4 text-emerald-400" />
              {lang === 'EN' ? '中文' : 'EN'}
            </button>
            <a href="#apply" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 animate-gradient">
              {t.nav.apply} <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors">
              <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileMenu ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="lg:hidden bg-[#060e1f]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4 space-y-2">
            {navItems.map(item => (
              <a key={item.key} href={item.href} onClick={() => { setActiveSection(item.key); setMobileMenu(false); }}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white transition-all">
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* ═══ HERO ═══ */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-18">
          <img src="/nanjing-hero.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f]/40 via-[#060e1f]/70 to-[#060e1f]" />
          <div className="absolute top-40 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse-glow" />
          <div className="absolute bottom-20 -left-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-pulse-glow" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm text-emerald-400 font-medium mb-8 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.hero.badge}
              </div>
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black tracking-tight leading-[0.95] text-balance">
                <span className="opacity-90">{t.hero.title}</span><br />
                <span className="text-gradient animate-gradient">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <div className="flex items-center gap-3 mt-8">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <MapPin className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="text-base font-medium text-slate-400 tracking-wide lowercase">{t.hero.location}</span>
              </div>
              <p className="mt-8 text-xl sm:text-2xl leading-relaxed text-slate-300/80 max-w-2xl text-balance">
                {t.hero.desc}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all animate-gradient">
                  {t.hero.cta1} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#nanjing" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                  {t.hero.cta2}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ HIGHLIGHTS ═══ */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f] via-[#0a1628] to-[#060e1f]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.h2 {...fadeUp} className="text-3xl sm:text-4xl font-bold text-center mb-16">{t.highlights.title}</motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.highlights.items.map((item, i) => {
                const Icon = highlightIcons[i];
                return (
                  <motion.div key={i} {...stagger(i)} className="glass card-glow rounded-3xl p-10 group">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-white/5 text-emerald-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-gradient">{item.stat}</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">{item.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ ORGANIZERS ═══ */}
        <section className="py-16 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="glass rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-bold mb-8 text-center text-slate-300">{t.organizers.title}</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { label: t.organizers.hosted, value: t.organizers.hostedBy },
                  { label: t.organizers.coOrg, value: t.organizers.coOrgBy },
                  { label: t.organizers.org, value: t.organizers.orgBy },
                ].map((org, i) => (
                  <div key={i}>
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-2">{org.label}</div>
                    <div className="text-sm text-slate-300 leading-relaxed">{org.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ DISCOVER NANJING ═══ */}
        <section id="nanjing" className="py-24 relative overflow-hidden">
          <img src="/ai-pattern.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f] via-[#0a1628]/95 to-[#060e1f]" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 text-sm text-cyan-400 font-medium mb-4">
                <Building2 className="h-4 w-4" /> {lang === 'EN' ? 'Discover Nanjing' : '魅力南京'}
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold">{t.nanjing.title}</h2>
              <p className="mt-4 text-lg text-slate-400">{t.nanjing.subtitle}</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {t.nanjing.cards.map((card, i) => (
                <motion.div key={i} {...stagger(i)} className="glass card-glow rounded-3xl p-10 group relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 text-[160px] font-black text-white/[0.03] leading-none select-none group-hover:text-white/[0.05] transition-all duration-700">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-4xl font-black text-gradient mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">{card.stat}</div>
                  <div className="text-xs font-bold text-emerald-400/60 mb-8 uppercase tracking-widest">{card.statLabel}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:translate-x-1 transition-transform">{card.title}</h3>
                  <p className="text-slate-400 text-base leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Policies */}
            <motion.div {...fadeUp} className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold">{t.policies.title}</h3>
              <p className="mt-3 text-slate-400 max-w-2xl mx-auto">{t.policies.subtitle}</p>
            </motion.div>

            {/* Landing Bonus Banner */}
            <motion.div {...fadeUp} className="rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 p-8 lg:p-10 mb-8 text-center">
              <div className="text-sm text-emerald-400 font-semibold uppercase tracking-widest mb-2">{t.policies.landing.title}</div>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-gradient">{t.policies.landing.amount}</div>
              <div className="mt-2 text-slate-400">{t.policies.landing.desc}</div>
            </motion.div>

            {/* Talent Programs */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {t.policies.talents.map((talent, i) => (
                <motion.div key={i} {...stagger(i)} className="glass rounded-xl p-6 hover:bg-white/8 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{talent.name}</div>
                      <div className="text-xs text-emerald-400">{talent.type}</div>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{talent.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Housing */}
            <motion.div {...fadeUp} className="glass rounded-xl p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-5 w-5 text-cyan-400" />
                <h4 className="font-bold">{t.policies.housing.title}</h4>
              </div>
              <ul className="space-y-3">
                {t.policies.housing.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* ═══ COMPETITION GUIDE ═══ */}
        <section id="guide" className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 text-sm text-violet-400 font-medium mb-4">
                <Target className="h-4 w-4" /> {lang === 'EN' ? 'Competition Guide' : '大赛指南'}
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold">{t.tracks.title}</h2>
              <p className="mt-4 text-lg text-slate-400">{t.tracks.subtitle}</p>
            </motion.div>

            {/* Tracks */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {t.tracks.items.map((track, i) => {
                const Icon = trackIcons[i];
                return (
                  <motion.div key={i} {...stagger(i)} className="glass card-glow rounded-3xl p-10 group text-center relative">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 text-emerald-400 mb-8 border border-white/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ring-4 ring-emerald-500/0 group-hover:ring-emerald-500/10">
                      <Icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{track.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed">{track.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Eligibility */}
            <motion.div {...fadeUp} className="mb-20">
              <h3 className="text-2xl font-bold mb-8 text-center">{t.eligibility.title}</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {t.eligibility.items.map((item, i) => (
                  <motion.div key={i} {...stagger(i)} className="glass rounded-xl p-6 hover:bg-white/8 transition-all">
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 mb-3">{item.label}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="glass rounded-xl p-4 text-center text-sm text-slate-400 border-emerald-500/10">
                <Star className="inline h-4 w-4 text-yellow-400 mr-1" /> {t.eligibility.priority}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div {...fadeUp} className="mb-24">
              <h3 className="text-3xl font-bold mb-16 text-center">{t.timeline.title}</h3>
              <div className="relative">
                <div className="hidden md:block absolute top-[60px] left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
                <div className="grid md:grid-cols-5 gap-4">
                  {t.timeline.stages.map((stage, i) => (
                    <motion.div key={i} {...stagger(i)} className="glass card-glow rounded-2xl p-6 text-center relative group isolate">
                      <div className="mx-auto h-12 w-12 rounded-full bg-[#06142a] border-2 border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300 relative z-10">
                        <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <div className="text-4xl font-black text-gradient opacity-20 group-hover:opacity-100 transition-opacity duration-500 mb-2">{stage.count}</div>
                      <div className="text-xs font-bold text-emerald-400 mb-3 tracking-widest">{stage.date}</div>
                      <h4 className="font-extrabold text-sm mb-2 group-hover:text-emerald-300 transition-colors">{stage.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{stage.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Prizes */}
            <motion.div {...fadeUp} className="mb-24">
              <h3 className="text-3xl font-bold mb-4 text-center">{t.prizes.title}</h3>
              <p className="text-center text-xl text-emerald-400 font-bold mb-12">{t.prizes.total}</p>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {t.prizes.items.map((prize, i) => (
                  <motion.div key={i} {...stagger(i)} className={`relative overflow-hidden rounded-3xl p-10 text-center transition-all duration-500 ${i === 0 ? 'bg-gradient-to-b from-yellow-500/15 via-[#0a1628] to-[#060e1f] border border-yellow-500/30 shadow-[0_0_50px_rgba(234,179,8,0.1)] scale-105 z-10' : 'glass card-glow'}`}>
                    {i === 0 && <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.1),transparent_70%)] animate-pulse" />}
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl mb-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/5 group-hover:rotate-6 transition-transform">
                      {i === 0 ? <Trophy className="h-8 w-8 text-yellow-400" /> : <Award className="h-8 w-8 text-emerald-400" />}
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">{prize.place}</div>
                    <div className={`text-4xl font-black mb-3 ${i === 0 ? 'text-yellow-400' : 'text-gradient'}`}>{prize.amount}</div>
                    <div className="text-base font-medium text-slate-400">{prize.each} · {prize.winners}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm font-medium text-emerald-400/50 flex items-center justify-center gap-2">
                <Zap className="h-3.5 w-3.5" /> {t.prizes.note}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══ APPLY NOW ═══ */}
        <section id="apply" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f] via-emerald-950/20 to-[#060e1f]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-emerald-500/5 blur-[180px] animate-pulse-glow" />
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center bg-white/[0.01] backdrop-blur-[2px] rounded-[3rem] py-20 border border-white/5">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="relative inline-block mb-10">
                <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full animate-pulse" />
                <Rocket className="h-20 w-20 text-emerald-400 relative z-10 animate-float" />
              </div>
              <h2 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight">{t.apply.title}</h2>
              <p className="text-xl sm:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                {t.apply.desc}
              </p>
              <a href="mailto:contact@transfong.com" className="group relative inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-12 py-5 text-xl font-black text-white shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:shadow-[0_0_80px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-500 animate-gradient overflow-hidden">
                 <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="relative z-10">{t.apply.cta}</span>
                 <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="mt-12 flex items-center justify-center gap-3 text-slate-400 group">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="h-5 w-5 text-emerald-400" />
                </div>
                <span className="text-lg font-medium tracking-wide group-hover:text-emerald-300 transition-colors">{t.apply.contact}</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-300">AI Competition</span>
          </div>
          <p className="text-xs text-slate-500 text-center">{t.footer.rights}</p>
          <a href="mailto:contact@transfong.com" className="text-xs text-slate-500 hover:text-emerald-400 transition-colors">{t.footer.contact}</a>
        </div>
      </footer>
    </div>
  );
}
