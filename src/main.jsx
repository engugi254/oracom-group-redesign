import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X, Globe2, Code2, Cloud, MessageSquareText, Megaphone, Camera, GraduationCap, Cpu, Sparkles, Play, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import './styles.css';

const services = [
  {icon:Code2,n:'01',title:'Web & software development',text:'Digital experiences, custom platforms and mobile applications built around your goals.'},
  {icon:Cloud,n:'02',title:'Domains, hosting & cloud',text:'The dependable infrastructure, security and business tools that keep you moving.'},
  {icon:MessageSquareText,n:'03',title:'Messaging & communication',text:'Bulk SMS, WhatsApp, USSD and smarter ways to reach the people who matter.'},
  {icon:Megaphone,n:'04',title:'Digital marketing & growth',text:'Build visibility, connect with customers and turn attention into measurable growth.'},
  {icon:Camera,n:'05',title:'Photography & production',text:'Creative storytelling through photography, video, livestreaming and media.'},
  {icon:GraduationCap,n:'06',title:'Training & digital skills',text:'Practical learning experiences that help people and teams thrive in a digital world.'}
];
const brands = [
 ['Oracom','Web & app development','OW'],['Orawebhost','Domains & hosting','OH'],['Oramobile','Mobile communication','OM'],['OraDMT','Digital skills & training','DT'],['OraDMA','Digital marketing','DM'],['OraMedia','Photography & video','MD'],['Mybigorder','E-commerce marketplace','MB'],['Palscity','Social networking & gigs','PC'],['DFTNews','News, podcast & radio','DF'],['KEOnline','Search & business directory','KE'],['ODS Chap Chap','On-demand services','ODS'],['Palscity Sacco','Digital community finance','PS'],['Palscity Foundation','Community impact','PF'],['My Leader Kenya','Civic information','ML'],['Digitally Fit Awards','Recognition & excellence','DFA'],['CEOs Networking Tours','Business networking','CEO'],['ODSAI Tech','AI-powered innovation','AI'],['ODSERP','Business management','ERP'],['ODSALMA','Alumni & group platforms','AL'],['ODSVIRAL','Social media automation','VR'],['Wellnia','Wellness technology','WE']
];
const reveal={hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}};
function InView({children,delay=0,className=''}){return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.12}} transition={{delay}}>{children}</motion.div>}
function App(){
 const [open,setOpen]=useState(false); const close=()=>setOpen(false);
 const nav=[['Services','#services'],['Our ecosystem','#ecosystem'],['About us','#about'],['Our reach','#reach']];
 return <>
  <div className="announcement"><i/>Building the next generation of African digital solutions<a href="#about">Discover Oracom <ArrowUpRight size={13}/></a></div>
  <header className="header"><a href="#top" className="brand-lockup"><span className="brand-symbol">O<span>.</span></span><span className="brand-name">ORACOM<small>GROUP</small></span></a><nav className={open?'nav nav-open':'nav'}>{nav.map(([t,h])=><a href={h} key={t} onClick={close}>{t}</a>)}<a href="#contact" className="nav-cta" onClick={close}>Let's talk <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>
  <main id="top">
   <section className="hero"><div className="hero-grid"/><div className="orb orb-one"/><div className="orb orb-two"/><div className="hero-content"><InView><div className="eyebrow light"><b/>A connected world starts here</div></InView><InView delay={.08}><h1>Building what's<br/><em>next.</em> Together.</h1></InView><InView delay={.16}><p className="hero-copy">We bring technology, creativity and bold ideas together to help businesses and communities move forward in a digital-first world.</p></InView><InView delay={.24}><div className="hero-actions"><a className="button button-primary" href="#services">Explore what we do <ArrowUpRight size={17}/></a><a className="text-link" href="#about"><span className="play-icon"><Play size={12} fill="currentColor"/></span> Get to know us</a></div></InView><div className="hero-footnote"><span>INNOVATION WITH PURPOSE</span><span>KENYA · EAST AFRICA · BEYOND</span></div></div>
    <div className="hero-visual"><div className="visual-ring ring-a"/><div className="visual-ring ring-b"/><div className="visual-ring ring-c"/><div className="visual-core"><span>O</span><small>ORACOM<br/>ECOSYSTEM</small></div><div className="orbit-label label-a"><i><Code2 size={16}/></i>Digital experiences</div><div className="orbit-label label-b"><i><Cpu size={16}/></i>Emerging technology</div><div className="orbit-label label-c"><i><Globe2 size={16}/></i>Connected communities</div><div className="spark spark-a"/><div className="spark spark-b"/><div className="spark spark-c"/></div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div/><span>01 / 05</span></div></section>
   <section className="trust-strip"><div className="trust-intro">ONE GROUP.<br/><strong>MANY POSSIBILITIES.</strong></div><div className="trust-stat"><strong>21<span>+</span></strong><small>CONNECTED BRANDS</small></div><div className="trust-stat"><strong>8</strong><small>EAST AFRICAN MARKETS</small></div><div className="trust-stat"><strong>2010</strong><small>OUR JOURNEY BEGAN</small></div><div className="trust-note">A diverse ecosystem.<br/>One shared ambition.</div></section>
   <section className="section" id="services"><div className="section-heading"><InView><div className="eyebrow"><b/>What we do</div><h2>Everything you need<br/>to <em>move forward.</em></h2></InView><InView delay={.12}><p>From your first digital step to your next big leap, our connected capabilities bring the right expertise together under one roof.</p><a className="arrow-link" href="https://oracomgroup.com/our-services/" target="_blank" rel="noreferrer">Explore all services <ArrowUpRight size={16}/></a></InView></div><div className="service-grid">{services.map((s,i)=><InView key={s.n} delay={i*.04}><article className="service-card"><div className="service-top"><span className="service-icon"><s.icon size={21}/></span><span className="service-number">{s.n}</span></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={'Enquire about '+s.title}><ArrowUpRight size={18}/></a></article></InView>)}</div></section>
   <section className="about-section" id="about"><div className="about-image"><div className="image-backdrop"/><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85" alt="A team collaborating around a table" loading="lazy"/><div className="image-caption"><i/>PEOPLE. IDEAS. PROGRESS.</div><div className="floating-note"><Sparkles size={18}/><span>One ecosystem.<br/><strong>Infinite potential.</strong></span></div></div><div className="about-copy"><InView><div className="eyebrow"><b/>Who we are</div><h2>Big ideas work<br/>better <em>together.</em></h2><p className="lead">Oracom Group is a technology-driven ecosystem built to make digital opportunity more accessible.</p><p>Founded in Nairobi in 2010, we have grown from humble beginnings into a group of specialised brands working across technology, communication, commerce, media, learning and community impact.</p><p>Our strength is in how our capabilities connect — giving people and organisations room to imagine, build and grow.</p><a className="button button-dark" href="https://oracomgroup.com/who-are-we/" target="_blank" rel="noreferrer">Discover our story <ArrowUpRight size={16}/></a></InView></div></section>
   <section className="ecosystem-section" id="ecosystem"><div className="ecosystem-head"><InView><div className="eyebrow light"><b/>The Oracom ecosystem</div><h2>21 brands.<br/><em>One bigger picture.</em></h2></InView><InView delay={.12}><p>Different specialities. Shared ambition. Explore the brands creating solutions across our ecosystem.</p></InView></div><div className="brand-grid">{brands.map(([name,desc,mono],i)=><InView key={name} delay={(i%5)*.025}><a className="brand-card" href="https://oracomgroup.com/" target="_blank" rel="noreferrer"><span className="brand-monogram">{mono}</span><span className="brand-card-copy"><strong>{name}</strong><small>{desc}</small></span><ArrowUpRight className="brand-arrow" size={17}/></a></InView>)}</div><div className="ecosystem-footer"><span>ONE ROOF. MANY WAYS TO MAKE AN IMPACT.</span><a href="https://oracomgroup.com/our-services/" target="_blank" rel="noreferrer">Explore the ecosystem <ArrowUpRight size={16}/></a></div></section>
   <section className="reach-section" id="reach"><div className="reach-copy"><InView><div className="eyebrow"><b/>Our footprint</div><h2>Rooted in East Africa.<br/><em>Ready for the world.</em></h2><p>Our network spans eight East African countries, bringing digital services and opportunities closer to the people and businesses we serve.</p><div className="country-list">{['Kenya','Uganda','Tanzania','Rwanda','Burundi','Somalia','DR Congo','South Sudan'].map(c=><span key={c}><CheckCircle2 size={14}/>{c}</span>)}</div></InView></div></section>
   <section className="quote-band"><div className="quote-mark">“</div><p>We believe the future belongs to those who <em>build it together.</em></p><span>THE ORACOM GROUP MINDSET</span></section>
   <section className="contact-section" id="contact">
          <div className="contact-glow"/>
          <div className="contact-photo">
            <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85" alt="A team sharing ideas around a table" loading="lazy" />
            <span className="contact-photo-caption">GOOD IDEAS GROW TOGETHER</span>
          </div>
          <div className="contact-content">
            <InView>
              <div className="eyebrow light"><b/>Start a conversation</div>
              <h2>Have a big idea?<br/><em>Let's build it.</em></h2>
              <p>Tell us where you want to go. We'll help you explore what's possible.</p>
              <a className="button button-primary" href="mailto:info@oracomgroup.com">Talk to our team <ArrowUpRight size={17}/></a>
            </InView>
            <div className="contact-details">
              <a href="mailto:info@oracomgroup.com"><Mail size={17}/><span><small>EMAIL US</small>info@oracomgroup.com</span></a>
              <a href="tel:+254709688000"><Phone size={17}/><span><small>CALL US</small>+254 709 688 000</span></a>
              <div><MapPin size={17}/><span><small>FIND US</small>Westlands Business Park, Nairobi</span></div>
            </div>
          </div>
        </section>
  </main>
  <footer className="footer"><div className="footer-main"><a href="#top" className="brand-lockup footer-brand"><span className="brand-symbol">O<span>.</span></span><span className="brand-name">ORACOM<small>GROUP</small></span></a><p>Technology, creativity and innovation<br/>working together for a better-connected future.</p><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Oracom Group. All rights reserved.</span><span>INDEPENDENT WEBSITE REDESIGN CONCEPT</span><div><a href="#services">Services</a><a href="#ecosystem">Brands</a><a href="#contact">Contact</a></div></div></footer>
 </>;
}
createRoot(document.getElementById('root')).render(<App/>);
