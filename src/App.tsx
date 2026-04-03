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
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:block">AI Competition</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <a key={item.key} href={item.href} onClick={() => setActiveSection(item.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeSection === item.key ? 'bg-white/10 text-emerald-400' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={toggleLang} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all">
              <Globe className="h-3.5 w-3.5 text-emerald-400" />
              {lang === 'EN' ? '中文' : 'EN'}
            </button>
            <a href="#apply" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all animate-gradient">
              {t.nav.apply} <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-slate-400 hover:text-white">
              <ChevronDown className={`h-5 w-5 transition-transform ${mobileMenu ? 'rotate-180' : ''}`} />
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
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05]">
                {t.hero.title}<br />
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent animate-gradient">
                  {t.hero.titleHighlight}
                </span>
              </h1>
              <div className="flex items-center gap-2 mt-6 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-emerald-500" />
                {t.hero.location}
              </div>
              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-2xl">{t.hero.desc}</p>
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
            <div className="grid md:grid-cols-3 gap-6">
              {t.highlights.items.map((item, i) => {
                const Icon = highlightIcons[i];
                return (
                  <motion.div key={i} {...stagger(i)} className="glass rounded-2xl p-8 hover:bg-white/8 transition-all group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-emerald-400">{item.stat}</div>
                        <div className="text-xs text-slate-500">{item.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
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
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {t.nanjing.cards.map((card, i) => (
                <motion.div key={i} {...stagger(i)} className="glass rounded-2xl p-8 hover:bg-white/8 transition-all group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 text-[120px] font-black text-white/[0.02] leading-none">{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-1 animate-count-pulse">{card.stat}</div>
                  <div className="text-xs text-emerald-400/60 mb-6">{card.statLabel}</div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
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
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {t.tracks.items.map((track, i) => {
                const Icon = trackIcons[i];
                return (
                  <motion.div key={i} {...stagger(i)} className="glass rounded-2xl p-8 hover:bg-white/8 transition-all group text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400 mb-6 group-hover:from-emerald-500/30 group-hover:to-cyan-500/30 transition-all">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                    <p className="text-slate-400 text-sm">{track.desc}</p>
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
            <motion.div {...fadeUp} className="mb-20">
              <h3 className="text-2xl font-bold mb-12 text-center">{t.timeline.title}</h3>
              <div className="relative">
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent -translate-y-1/2" />
                <div className="grid md:grid-cols-5 gap-6">
                  {t.timeline.stages.map((stage, i) => (
                    <motion.div key={i} {...stagger(i)} className="glass rounded-xl p-6 text-center relative hover:bg-white/8 transition-all group">
                      <div className="hidden md:block absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-emerald-500 border-4 border-[#0a1628] z-10" />
                      <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-2">{stage.count}</div>
                      <div className="text-xs text-emerald-400 font-medium mb-2">{stage.date}</div>
                      <h4 className="font-bold text-sm mb-1">{stage.title}</h4>
                      <p className="text-slate-500 text-xs">{stage.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Prizes */}
            <motion.div {...fadeUp}>
              <h3 className="text-2xl font-bold mb-4 text-center">{t.prizes.title}</h3>
              <p className="text-center text-emerald-400 font-semibold mb-10">{t.prizes.total}</p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {t.prizes.items.map((prize, i) => (
                  <motion.div key={i} {...stagger(i)} className={`rounded-2xl p-8 text-center transition-all ${i === 0 ? 'bg-gradient-to-b from-yellow-500/10 to-yellow-500/5 border border-yellow-500/20' : 'glass'} hover:scale-[1.02]`}>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full mb-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                      {i === 0 ? <Trophy className="h-7 w-7 text-yellow-400" /> : <Award className="h-7 w-7 text-emerald-400" />}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest mb-1">{prize.place}</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-1">{prize.amount}</div>
                    <div className="text-sm text-slate-400">{prize.each} · {prize.winners}</div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-sm text-emerald-400/60">{t.prizes.note}</p>
            </motion.div>
          </div>
        </section>

        {/* ═══ APPLY NOW ═══ */}
        <section id="apply" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#060e1f] via-emerald-950/20 to-[#060e1f]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-emerald-500/5 blur-[150px]" />
          <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Rocket className="h-16 w-16 text-emerald-400 mx-auto mb-8 animate-float" />
              <h2 className="text-3xl sm:text-5xl font-black mb-4">{t.apply.title}</h2>
              <p className="text-xl text-slate-400 mb-10">{t.apply.desc}</p>
              <a href="mailto:contact@transfong.com" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-10 py-4 text-lg font-bold text-white shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all animate-gradient">
                {t.apply.cta} <ArrowRight className="h-5 w-5" />
              </a>
              <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-sm">{t.apply.contact}</span>
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
