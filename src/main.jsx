import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X, Globe2, Code2, Cloud, MessageSquareText, Megaphone, Camera, GraduationCap, Cpu, Sparkles, Play, CheckCircle2, MapPin, Mail, Phone, Palette, Headset, BriefcaseBusiness } from 'lucide-react';
import './styles.css';

const services = [
  {icon:Code2,n:'01',title:'Web & software development',text:'Digital experiences, custom platforms and mobile applications built around your goals.'},
  {icon:Cloud,n:'02',title:'Domains, hosting & cloud',text:'The dependable infrastructure, security and business tools that keep you moving.'},
  {icon:MessageSquareText,n:'03',title:'Messaging & communication',text:'Bulk SMS, WhatsApp, USSD and smarter ways to reach the people who matter.'},
  {icon:Megaphone,n:'04',title:'Digital marketing & growth',text:'Build visibility, connect with customers and turn attention into measurable growth.'},
  {icon:Camera,n:'05',title:'Photography & production',text:'Creative storytelling through photography, video, livestreaming and media.'},
  {icon:GraduationCap,n:'06',title:'Training & digital skills',text:'Practical learning experiences that help people and teams thrive in a digital world.'}
];
const detailedServices = [
  {n:'01',eyebrow:'Digital foundations',title:'Web design, software & mobile apps',text:'From professional websites to tailored software and mobile applications, Oracom’s digital development offering helps organisations build useful, engaging experiences for their customers and teams.',items:['Business websites & e-commerce','Custom software and systems','Mobile application development','Website redesign and user experience'],icon:Code2,image:'https://images.pexels.com/photos/19805876/pexels-photo-19805876.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'An African software developer working at a computer in a Nairobi office'},
  {n:'02',eyebrow:'Reliable infrastructure',title:'Domains, hosting & online infrastructure',text:'Get the essentials for a dependable online presence, including domain registration, website hosting, business email and related digital infrastructure services.',items:['Domain registration','Website hosting and business email','SSL and website security','Cloud and productivity tools'],icon:Cloud,image:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',alt:'Modern server infrastructure'},
  {n:'03',eyebrow:'Reach more people',title:'Bulk SMS, WhatsApp & messaging',text:'Connect with customers and communities through messaging solutions designed for announcements, engagement, service updates and business communication.',items:['Bulk SMS and SMS surveys','WhatsApp business messaging','USSD and shortcode solutions','Chatbots and messaging automation'],icon:MessageSquareText,image:'https://images.pexels.com/photos/5999780/pexels-photo-5999780.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'An African business professional using a smartphone'},
  {n:'04',eyebrow:'Visibility & growth',title:'Digital marketing, SEO & social media',text:'Build a stronger digital presence through marketing support that helps brands reach audiences, communicate consistently and improve how they are discovered online.',items:['Search engine optimisation','Social media management','Digital advertising campaigns','Email marketing and content'],icon:Megaphone,image:'https://images.pexels.com/photos/7971168/pexels-photo-7971168.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'Colleagues discussing a marketing strategy in a modern office'},
  {n:'05',eyebrow:'Creative identity',title:'Graphic design, branding & printing',text:'Create a consistent brand identity and communicate clearly across digital and print channels, from visual design to branded business materials.',items:['Logo and brand identity design','Marketing graphics and publications','UI/UX and digital design','Print and promotional materials'],icon:Palette,image:'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85',alt:'Creative design workspace with colour and layout materials'},
  {n:'06',eyebrow:'Stories that connect',title:'Photography, video & media production',text:'Bring stories, people and ideas to life through visual production for organisations, campaigns, events and digital platforms.',items:['Corporate and event photography','Video production and editing','Livestreaming and documentaries','Podcast and studio production'],icon:Camera,image:'https://images.pexels.com/photos/11706455/pexels-photo-11706455.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'An African videographer filming outdoors with a professional camera'},
  {n:'07',eyebrow:'Skills for a digital world',title:'Digital training & professional development',text:'Practical learning and training opportunities help individuals and teams strengthen their digital capabilities and build confidence with creative and technology tools.',items:['Digital marketing training','Graphic and web design skills','Web development learning','Photography and video skills'],icon:GraduationCap,image:'https://images.pexels.com/photos/39523813/pexels-photo-39523813.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'African students participating in a classroom learning session'},
  {n:'08',eyebrow:'Business operations',title:'ERP, CRM & business management',text:'Business systems can bring key workflows and information into a more connected environment, supporting visibility across teams and day-to-day operations.',items:['Business process management','Customer relationship workflows','Reporting and dashboards','Project and task coordination'],icon:BriefcaseBusiness,image:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',alt:'Business analytics displayed on a computer'},
  {n:'09',eyebrow:'Customer experience',title:'Call centre & customer communication',text:'Support customer interactions across communication channels with solutions that can help teams organise enquiries, follow up consistently and manage service conversations.',items:['Inbound and outbound support','Multi-channel communication','CRM and ticketing integration','Customer service workflows'],icon:Headset,image:'https://images.pexels.com/photos/7709184/pexels-photo-7709184.jpeg?auto=compress&cs=tinysrgb&w=1400',alt:'An African customer support agent working with a headset'}
];
const brands = [
 ['Oracom','Web & app development','OW'],['Orawebhost','Domains & hosting','OH'],['Oramobile','Mobile communication','OM'],['OraDMT','Digital skills & training','DT'],['OraDMA','Digital marketing','DM'],['OraMedia','Photography & video','MD'],['Mybigorder','E-commerce marketplace','MB'],['Palscity','Social networking & gigs','PC'],['DFTNews','News, podcast & radio','DF'],['KEOnline','Search & business directory','KE'],['ODS Chap Chap','On-demand services','ODS'],['Palscity Sacco','Digital community finance','PS'],['Palscity Foundation','Community impact','PF'],['My Leader Kenya','Civic information','ML'],['Digitally Fit Awards','Recognition & excellence','DFA'],['CEOs Networking Tours','Business networking','CEO'],['ODSAI Tech','AI-powered innovation','AI'],['ODSERP','Business management','ERP'],['ODSALMA','Alumni & group platforms','AL'],['ODSVIRAL','Social media automation','VR'],['Wellnia','Wellness technology','WE']
];
const footprintCountries = [
  { name: 'Kenya', x: 76.2, y: 49.3 },
  { name: 'Uganda', x: 69.0, y: 46.5 },
  { name: 'Tanzania', x: 73.5, y: 59.0 },
  { name: 'Rwanda', x: 64.0, y: 50.5 },
  { name: 'Burundi', x: 68.0, y: 55.5 },
  { name: 'Somalia', x: 87.0, y: 42.0 },
  { name: 'DR Congo', x: 56.5, y: 55.0 },
  { name: 'South Sudan', x: 65.5, y: 40.5 },
];
const reveal={hidden:{opacity:0,y:22},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}};
function InView({children,delay=0,className=''}){return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true,amount:.12}} transition={{delay}}>{children}</motion.div>}
function ServicesPage(){
 const [open,setOpen]=useState(false);
 const close=()=>setOpen(false);
 const home=`${import.meta.env.BASE_URL}`;
 const nav=[['Home',home],['Our ecosystem',`${home}#ecosystem`],['About us',`${home}#about`],['Our reach',`${home}#reach`]];
 return <>
  <div className="announcement"><i/>Building the next generation of African digital solutions<a href={`${home}#about`}>Discover Oracom <ArrowUpRight size={13}/></a></div>
  <header className="header"><a href={home} className="brand-lockup brand-logo" aria-label="Oracom Group home"><img src={`${import.meta.env.BASE_URL}images/logo-light.png`} alt="Oracom Group" /></a><nav className={open?'nav nav-open':'nav'}>{nav.slice(0,1).map(([t,h])=><a href={h} key={t} onClick={close}>{t}</a>)}<a className="nav-current" href={`${import.meta.env.BASE_URL}services.html`} onClick={close}>Services</a>{nav.slice(1).map(([t,h])=><a href={h} key={t} onClick={close}>{t}</a>)}<a href={`${home}#contact`} className="nav-cta" onClick={close}>Let's talk <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>
  <main id="top" className="services-page">
   <section className="services-page-hero">
    <div className="hero-grid"/><div className="orb orb-one"/><div className="orb orb-two"/>
    <div className="services-page-hero-content">
     <InView><div className="eyebrow light"><b/>What we do</div></InView>
     <InView delay={.08}><h1>Capabilities<br/>that move us <em>forward.</em></h1></InView>
     <InView delay={.16}><p className="hero-copy">Technology, communication and creativity working together to help businesses and communities take their next step.</p></InView>
     <InView delay={.24}><div className="hero-actions"><a className="button button-primary" href="#service-offerings">Explore our services <ArrowUpRight size={17}/></a><a className="text-link" href={`${home}#about`}>Discover Oracom <ArrowUpRight size={15}/></a></div></InView>
     <div className="hero-footnote"><span>CONNECTED CAPABILITIES</span><span>KENYA · EAST AFRICA · BEYOND</span></div>
    </div>
    <div className="services-hero-visual" aria-hidden="true"><div className="services-visual-ring ring-a"/><div className="services-visual-ring ring-b"/><div className="services-visual-ring ring-c"/><div className="services-visual-core"><Globe2 size={34}/><small>ORACOM<br/>CAPABILITIES</small></div><span className="services-orbit-tag tag-one"><Code2 size={15}/> Digital</span><span className="services-orbit-tag tag-two"><MessageSquareText size={15}/> Connect</span><span className="services-orbit-tag tag-three"><Sparkles size={15}/> Create</span></div>
    <div className="hero-bottom"><span>EXPLORE OUR CAPABILITIES</span><div/><span>02 / 05</span></div>
   </section>
   <section className="services-intro section">
    <div className="section-heading"><InView><div className="eyebrow"><b/>How we help</div><h2>Different strengths.<br/><em>One connected group.</em></h2></InView><InView delay={.12}><p>Explore the capabilities presented across the Oracom Group concept. Each area brings together technology, communication and creative thinking.</p></InView></div>
   </section>
   <section className="services-detail-section" id="service-offerings">
    <div className="services-catalogue-heading"><div className="eyebrow"><b/>Explore our capabilities</div><p>A closer look at the services and solutions represented across the Oracom Group. Select an area to start a conversation with the team.</p></div>
    <div className="services-feature-list">{detailedServices.map((s,i)=><InView key={s.n}><article className={`service-feature${i%2?' service-feature-reverse':''}`}>
      <div className="service-feature-image"><img src={s.image} alt={s.alt} loading="lazy"/><span className="service-image-number">{s.n} / 09</span></div>
      <div className="service-feature-copy"><div className="service-feature-meta"><span className="service-feature-icon"><s.icon size={19}/></span><span>{s.eyebrow}</span></div><h3>{s.title}</h3><p>{s.text}</p><ul>{s.items.map(item=><li key={item}><span/> {item}</li>)}</ul><a className="service-feature-link" href={`mailto:info@oracomgroup.com?subject=${encodeURIComponent('Enquiry: '+s.title)}`}>Discuss this service <ArrowUpRight size={17}/></a></div>
     </article></InView>)}</div>
   </section>
   <section className="services-approach">
    <div className="services-approach-mark"><span>O</span><small>ONE GROUP<br/>MANY POSSIBILITIES</small></div>
    <div className="services-approach-copy"><div className="eyebrow light"><b/>The Oracom approach</div><h2>Big ideas work<br/>better <em>together.</em></h2><p>Our connected capabilities are designed to bring the right mix of technology, communication and creativity around the goals people and organisations want to achieve.</p><a className="text-link" href={`${home}#ecosystem`}>Explore the ecosystem <ArrowUpRight size={16}/></a></div>
   </section>
   <section className="services-contact-band"><div><div className="eyebrow"><b/>Start a conversation</div><h2>Have a project in mind?<br/><em>Let's talk.</em></h2><p>Share what you're working towards and start a conversation with the Oracom team.</p></div><a className="button button-dark" href="mailto:info@oracomgroup.com?subject=Oracom%20services%20enquiry">Talk to our team <ArrowUpRight size={17}/></a></section>
  </main>
  <footer className="footer"><div className="footer-main"><a href={home} className="brand-lockup footer-brand brand-logo" aria-label="Oracom Group home"><img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Oracom Group" /></a><p>Technology, creativity and innovation<br/>working together for a better-connected future.</p><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Oracom Group. All rights reserved.</span><span>INDEPENDENT WEBSITE REDESIGN CONCEPT</span><div><a href={home}>Home</a><a href={`${home}#ecosystem`}>Brands</a><a href={`${home}#contact`}>Contact</a></div></div></footer>
 </>;
}

function App(){
 const [open,setOpen]=useState(false); const [activeCountry,setActiveCountry]=useState(''); const close=()=>setOpen(false);
 const nav=[['Home','#top'],['Services',`${import.meta.env.BASE_URL}services.html`],['Our ecosystem','#ecosystem'],['About us','#about'],['Our reach','#reach']];
 return <>
  <div className="announcement"><i/>Building the next generation of African digital solutions<a href="#about">Discover Oracom <ArrowUpRight size={13}/></a></div>
  <header className="header"><a href="#top" className="brand-lockup brand-logo" aria-label="Oracom Group home"><img src={`${import.meta.env.BASE_URL}images/logo-light.png`} alt="Oracom Group" /></a><nav className={open?'nav nav-open':'nav'}>{nav.map(([t,h])=><a href={h} key={t} onClick={close}>{t}</a>)}<a href="#contact" className="nav-cta" onClick={close}>Let's talk <ArrowUpRight size={16}/></a></nav><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>
  <main id="top">
   <section className="hero"><div className="hero-grid"/><div className="orb orb-one"/><div className="orb orb-two"/><div className="hero-content"><InView><div className="eyebrow light"><b/>A connected world starts here</div></InView><InView delay={.08}><h1>Building what's<br/><em>next.</em> Together.</h1></InView><InView delay={.16}><p className="hero-copy">We bring technology, creativity and bold ideas together to help businesses and communities move forward in a digital-first world.</p></InView><InView delay={.24}><div className="hero-actions"><a className="button button-primary" href="#services">Explore what we do <ArrowUpRight size={17}/></a><a className="text-link" href="#about"><span className="play-icon"><Play size={12} fill="currentColor"/></span> Get to know us</a></div></InView><div className="hero-footnote"><span>INNOVATION WITH PURPOSE</span><span>KENYA · EAST AFRICA · BEYOND</span></div></div>
    <div className="hero-visual"><div className="visual-ring ring-a"/><div className="visual-ring ring-b"/><div className="visual-ring ring-c"/><div className="visual-core"><span>O</span><small>ORACOM<br/>ECOSYSTEM</small></div><div className="orbit-label label-a"><i><Code2 size={16}/></i>Digital experiences</div><div className="orbit-label label-b"><i><Cpu size={16}/></i>Emerging technology</div><div className="orbit-label label-c"><i><Globe2 size={16}/></i>Connected communities</div><div className="spark spark-a"/><div className="spark spark-b"/><div className="spark spark-c"/></div><div className="hero-bottom"><span>SCROLL TO EXPLORE</span><div/><span>01 / 05</span></div></section>
   <section className="trust-strip"><div className="trust-intro">ONE GROUP.<br/><strong>MANY POSSIBILITIES.</strong></div><div className="trust-stat"><strong>21<span>+</span></strong><small>CONNECTED BRANDS</small></div><div className="trust-stat"><strong>8</strong><small>EAST AFRICAN MARKETS</small></div><div className="trust-stat"><strong>2010</strong><small>OUR JOURNEY BEGAN</small></div><div className="trust-note">A diverse ecosystem.<br/>One shared ambition.</div></section>
   <section className="section" id="services"><div className="section-heading"><InView><div className="eyebrow"><b/>What we do</div><h2>Everything you need<br/>to <em>move forward.</em></h2></InView><InView delay={.12}><p>From your first digital step to your next big leap, our connected capabilities bring the right expertise together under one roof.</p><a className="arrow-link" href={`${import.meta.env.BASE_URL}services.html`}>Explore all services <ArrowUpRight size={16}/></a></InView></div><div className="service-grid">{services.map((s,i)=><InView key={s.n} delay={i*.04}><article className="service-card"><div className="service-top"><span className="service-icon"><s.icon size={21}/></span><span className="service-number">{s.n}</span></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={'Enquire about '+s.title}><ArrowUpRight size={18}/></a></article></InView>)}</div></section>
   <section className="about-section" id="about"><div className="about-image"><div className="image-backdrop"/><img src="https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Business professionals collaborating during a meeting in Lagos, Nigeria" loading="lazy"/><div className="image-caption"><i/>PEOPLE. IDEAS. PROGRESS.</div><div className="floating-note"><Sparkles size={18}/><span>One ecosystem.<br/><strong>Infinite potential.</strong></span></div></div><div className="about-copy"><InView><div className="eyebrow"><b/>Who we are</div><h2>Big ideas work<br/>better <em>together.</em></h2><p className="lead">Oracom Group is a technology-driven ecosystem built to make digital opportunity more accessible.</p><p>Founded in Nairobi in 2010, we have grown from humble beginnings into a group of specialised brands working across technology, communication, commerce, media, learning and community impact.</p><p>Our strength is in how our capabilities connect — giving people and organisations room to imagine, build and grow.</p><a className="button button-dark" href="https://oracomgroup.com/who-are-we/" target="_blank" rel="noreferrer">Discover our story <ArrowUpRight size={16}/></a></InView></div></section>
   <section className="ecosystem-section" id="ecosystem"><div className="ecosystem-head"><InView><div className="eyebrow light"><b/>The Oracom ecosystem</div><h2>21 brands.<br/><em>One bigger picture.</em></h2></InView><InView delay={.12}><p>Different specialities. Shared ambition. Explore the brands creating solutions across our ecosystem.</p></InView></div><div className="brand-grid">{brands.map(([name,desc,mono],i)=><InView key={name} delay={(i%5)*.025}><a className="brand-card" href="https://oracomgroup.com/" target="_blank" rel="noreferrer"><span className="brand-monogram">{mono}</span><span className="brand-card-copy"><strong>{name}</strong><small>{desc}</small></span><ArrowUpRight className="brand-arrow" size={17}/></a></InView>)}</div><div className="ecosystem-footer"><span>ONE ROOF. MANY WAYS TO MAKE AN IMPACT.</span><a href="https://oracomgroup.com/our-services/" target="_blank" rel="noreferrer">Explore the ecosystem <ArrowUpRight size={16}/></a></div></section>
   <section className="reach-section" id="reach" style={{'--world-map-url': `url("${import.meta.env.BASE_URL}images/world-watermark.svg")`}}>
    <div className="reach-copy"><InView>
      <div className="eyebrow"><b/>Our footprint</div>
      <h2>Rooted in East Africa.<br/><em>Ready for the world.</em></h2>
      <p>Our network spans eight East African countries, bringing digital services and opportunities closer to the people and businesses we serve.</p>
      <div className="country-list" aria-label="Countries in our regional footprint">
       {footprintCountries.map((country,index)=><button type="button" key={country.name} className={activeCountry===country.name?'country-item is-active':'country-item'} onMouseEnter={()=>setActiveCountry(country.name)} onMouseLeave={()=>setActiveCountry('')} onFocus={()=>setActiveCountry(country.name)} onBlur={()=>setActiveCountry('')} onClick={()=>setActiveCountry(activeCountry===country.name?'':country.name)} aria-pressed={activeCountry===country.name}>
        <span className="country-index">0{index+1}</span><span className="country-name">{country.name}</span><CheckCircle2 size={15}/>
       </button>)}
      </div>
      <div className="reach-legend"><span/><small>ORACOM'S EAST AFRICAN FOOTPRINT</small></div>
    </InView></div>
    <div className="reach-map-wrap" aria-label="Map of Africa showing the eight listed countries">
     <div className="map-kicker"><span>REGIONAL PRESENCE</span><span>01 — 08</span></div>
     <div className="africa-map">
      <img src={`${import.meta.env.BASE_URL}images/africa-map.svg`} alt="Map of Africa with national boundaries" loading="lazy" />
      {footprintCountries.map((country,index)=><button type="button" key={country.name} className={`map-marker${activeCountry===country.name?' is-active':''}`} style={{left:`${country.x}%`,top:`${country.y}%`}} onMouseEnter={()=>setActiveCountry(country.name)} onMouseLeave={()=>setActiveCountry('')} onFocus={()=>setActiveCountry(country.name)} onBlur={()=>setActiveCountry('')} onClick={()=>setActiveCountry(activeCountry===country.name?'':country.name)} aria-label={country.name} title={country.name}><span>{String(index+1).padStart(2,'0')}</span></button>)}
     </div>
     <div className="map-caption"><span className="map-caption-dot"/>EAST AFRICA <span className="map-caption-line"/> <span>AFRICA</span></div>
    </div>
   </section>
   <section className="quote-band"><div className="quote-mark">“</div><p>We believe the future belongs to those who <em>build it together.</em></p><span>THE ORACOM GROUP MINDSET</span></section>
   <section className="contact-section" id="contact">
          <div className="contact-glow"/>
          <div className="contact-photo">
            <img src="https://images.pexels.com/photos/3869649/pexels-photo-3869649.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="African women collaborating during an office meeting" loading="lazy" />
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
  <footer className="footer"><div className="footer-main"><a href="#top" className="brand-lockup footer-brand brand-logo" aria-label="Oracom Group home"><img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Oracom Group" /></a><p>Technology, creativity and innovation<br/>working together for a better-connected future.</p><a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Oracom Group. All rights reserved.</span><span>INDEPENDENT WEBSITE REDESIGN CONCEPT</span><div><a href="#services">Services</a><a href="#ecosystem">Brands</a><a href="#contact">Contact</a></div></div></footer>
 </>;
}
const isServicesPage = window.location.pathname.endsWith('/services.html');
createRoot(document.getElementById('root')).render(isServicesPage ? <ServicesPage/> : <App/>);
