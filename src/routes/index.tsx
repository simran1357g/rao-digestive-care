import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import doctorAsset from "@/assets/doctor.asset.json";
import interior1Asset from "@/assets/interior1.asset.json";
import interior2Asset from "@/assets/interior2.asset.json";
import exteriorAsset from "@/assets/exterior.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Phone, MessageCircle, MapPin, Clock, Star, Stethoscope, Activity,
  Microscope, ShieldCheck, HeartPulse, Sparkles, ArrowRight, CheckCircle2,
  Pill, FlaskConical, ScanLine,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Lakshmi Rao | Best Gastroenterologist in Dehradun" },
      { name: "description", content: "Dr. Lakshmi Rao, leading Gastrointestinal & Hepato-Biliary Specialist at Kosha Clinics, Race Course, Dehradun. Book endoscopy, colonoscopy & digestive care." },
      { name: "keywords", content: "Gastroenterologist Dehradun, Best Gastro Doctor Dehradun, Liver Specialist Dehradun, Endoscopy Dehradun, Colonoscopy Dehradun, Gallbladder Stone Treatment Dehradun" },
    ],
  }),
  component: Home,
});

const PHONE = "+917819024241";
const PHONE_DISPLAY = "+91 78190 24241";
const WHATSAPP = `https://wa.me/917819024241?text=Hello%20Dr.%20Lakshmi%20Rao%2C%20I%27d%20like%20to%20book%20a%20consultation.`;
const TEL = `tel:${PHONE}`;

const services = [
  { icon: Activity, title: "Gastrointestinal Disorders", desc: "GERD, gastritis, IBS, constipation & chronic digestive issues." },
  { icon: HeartPulse, title: "Liver Diseases", desc: "Fatty liver, hepatitis, cirrhosis — full hepatology workup & care." },
  { icon: Pill, title: "Gallbladder Stone Treatment", desc: "Modern surgical & non-surgical management of gallstone disease." },
  { icon: FlaskConical, title: "Pancreatic Disorders", desc: "Diagnosis & management of pancreatitis and pancreatic conditions." },
  { icon: ScanLine, title: "Endoscopy & Colonoscopy", desc: "Diagnostic and therapeutic scopes in a calm, modern setting." },
  { icon: Stethoscope, title: "Hepato-Biliary Consultation", desc: "Specialist care for liver, bile duct & gallbladder concerns." },
  { icon: Microscope, title: "Gastro Surgery Consultation", desc: "Surgical evaluation and second opinions for GI conditions." },
  { icon: ShieldCheck, title: "Preventive Health Checkups", desc: "Comprehensive digestive wellness screenings for early detection." },
];

const trustPoints = [
  "Experienced Gastro Specialist",
  "Personalized Patient Care",
  "Advanced Diagnosis",
  "Comprehensive Digestive Care",
  "Modern Clinical Environment",
  "Convenient Race Course Location",
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <WhyUs />
      <Clinic />
      <Contact />
      <Footer />
      <MobileCTA />
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3">
      <img
        src={logo}
        alt="Kosha Clinics"
        className={`h-12 w-auto md:h-14 ${light ? "brightness-0 invert" : ""}`}
      />
      <div className={`hidden h-10 w-px sm:block ${light ? "bg-white/20" : "bg-border"}`} aria-hidden />
      <div className="hidden leading-tight sm:block">
        <div className={`font-display text-base italic ${light ? "text-white" : "text-primary"}`}>Dr. Lakshmi Rao</div>
        <div className={`text-[9px] uppercase tracking-[0.32em] ${light ? "text-white/70" : "text-muted-foreground"}`} style={{ fontFamily: "var(--font-serif-caps)" }}>Gastro · Hepato-Biliary</div>
      </div>
    </a>
  );
}

function Nav() {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container-x flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#why" className="hover:text-primary transition">Why Us</a>
          <a href="#clinic" className="hover:text-primary transition">Clinic</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a href={TEL} className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex">
          <Phone className="h-4 w-4" /> Book Appointment
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero text-primary-foreground">
      <img src={heroBg} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen" />
      <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[var(--gold)] opacity-20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[oklch(0.5_0.15_260)] opacity-30 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28 lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
            Kosha Clinics · Dehradun
          </div>

          <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Expert care for your <span className="italic text-gradient-gold">digestive</span> & liver health.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Meet <span className="text-white">Dr. Lakshmi Rao</span> — Gastrointestinal &
            Hepato-Biliary Specialist offering personalised, advanced gastro care in Dehradun.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={TEL} className="group inline-flex items-center gap-2 rounded-full bg-[var(--gold)] px-7 py-3.5 text-sm font-semibold text-primary shadow-luxe transition hover:brightness-110">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-7">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="text-sm font-medium text-white">4.6</span>
              <span className="text-sm text-white/60">Google Rating</span>
            </div>
            <div className="hidden h-8 w-px bg-white/15 sm:block" />
            <div className="hidden text-sm text-white/70 sm:block">Open daily from 10:00 AM</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[2rem] bg-[var(--gold)]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-luxe backdrop-blur">
            <img
              src={doctorAsset.url}
              alt="Dr. Lakshmi Rao, Gastroenterologist in Dehradun"
              className="h-[560px] w-full object-cover object-top"
              width={800}
              height={1000}
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-primary/85 px-5 py-4 backdrop-blur">
              <div className="font-display text-xl text-white">Dr. Lakshmi Rao</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">MBBS · MS · FIAGES</div>
              <div className="mt-1 text-sm text-white/75">Gastro Surgeon · Hepato-Biliary Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { k: "4.6★", v: "Google Rated" },
    { k: "10+", v: "Years Experience" },
    { k: "5000+", v: "Patients Treated" },
    { k: "100%", v: "Personalised Care" },
  ];
  return (
    <section className="border-y border-border bg-secondary/60">
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.v} className="text-center">
            <div className="font-display text-3xl text-primary md:text-4xl">{it.k}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[var(--gold)]">
      <span className="h-px w-8 bg-[var(--gold)]" /> {children}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid gap-14 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-luxe">
            <img src={interior1Asset.url} alt="Inside Kosha Clinics, Dehradun" className="h-[520px] w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-60 rounded-2xl border border-border bg-card p-5 shadow-luxe md:block">
            <div className="flex items-center gap-2 text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              "Compassionate, thorough and exceptionally knowledgeable."
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Google Review</p>
          </div>
        </div>

        <div>
          <SectionLabel>About the Doctor</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
            A trusted specialist in <span className="italic text-primary">gastro & liver</span> care.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Dr. Lakshmi Rao is an experienced Gastrointestinal and Hepato-Biliary Specialist
            dedicated to providing comprehensive digestive healthcare. The clinic focuses on
            accurate diagnosis, personalized treatment plans, and advanced gastrointestinal
            care for patients in Dehradun and surrounding regions.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustPoints.map((p) => (
              <li key={p} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90">
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-secondary/50 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Specialised Services</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">Comprehensive digestive & liver care</h2>
          <p className="mt-5 text-muted-foreground">
            From routine consultations to advanced endoscopic procedures — delivered with precision,
            empathy and modern technology.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-luxe">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-hero py-24 text-primary-foreground md:py-32">
      <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[var(--gold)] opacity-15 blur-3xl" />
      <div className="container-x grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="mt-5 font-display text-4xl text-white md:text-5xl">
            Healthcare that feels <span className="italic text-gradient-gold">personal</span>.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            We combine modern diagnostics with the unhurried attention every patient deserves —
            so you leave informed, reassured, and on a clear path to better health.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { t: "Advanced Diagnostics", d: "State-of-the-art endoscopy & imaging support." },
            { t: "Personalised Plans", d: "Treatment tailored to your history & lifestyle." },
            { t: "Transparent Care", d: "Clear explanations at every step of your journey." },
            { t: "Modern Environment", d: "A calm, hygienic, hospitality-grade clinic space." },
          ].map((it) => (
            <div key={it.t} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="font-display text-xl text-white">{it.t}</div>
              <p className="mt-2 text-sm text-white/70">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clinic() {
  return (
    <section id="clinic" className="py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>The Clinic</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">A space designed for healing</h2>
          <p className="mt-5 text-muted-foreground">
            Located in the heart of Race Course, Dehradun — Kosha Clinics offers a calm,
            hospitality-inspired environment for unhurried consultations and modern procedures.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl shadow-soft md:col-span-2 md:row-span-2">
            <img src={interior2Asset.url} alt="Kosha Clinics reception" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img src={exteriorAsset.url} alt="Kosha Clinics entrance, Dehradun" className="h-64 w-full object-cover" loading="lazy" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img src={interior1Asset.url} alt="Kosha Clinics waiting area" className="h-64 w-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary/60 py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel>Book an Appointment</SectionLabel>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            We're here when you <span className="italic text-primary">need us</span>.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Reach out by phone, WhatsApp, or send us a quick message — our team will confirm
            your consultation slot promptly.
          </p>

          <div className="mt-10 space-y-5">
            <InfoRow icon={MapPin} title="Visit Us" lines={["Kosha Clinics G4F4, Lord Krishna Crest,", "53 Subhash Road, Race Course,", "Dehradun, Uttarakhand 248001"]} />
            <InfoRow icon={Phone} title="Call" lines={[PHONE_DISPLAY]} href={TEL} />
            <InfoRow icon={MessageCircle} title="WhatsApp" lines={["Chat with us instantly"]} href={WHATSAPP} />
            <InfoRow icon={Clock} title="Working Hours" lines={["Open daily from 10:00 AM"]} />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const name = f.get("name");
            const phone = f.get("phone");
            const msg = f.get("message");
            const text = `Hello Dr. Lakshmi Rao,%0AName: ${name}%0APhone: ${phone}%0A${msg}`;
            window.open(`https://wa.me/917819024241?text=${text}`, "_blank");
          }}
          className="rounded-3xl border border-border bg-card p-8 shadow-luxe md:p-10"
        >
          <h3 className="font-display text-2xl text-primary">Request a Consultation</h3>
          <p className="mt-1 text-sm text-muted-foreground">We'll get back within working hours.</p>

          <div className="mt-7 grid gap-5">
            <Field label="Full Name" name="name" placeholder="Your name" required />
            <Field label="Phone Number" name="phone" type="tel" placeholder="+91 ..." required />
            <Field label="Concern / Symptoms" name="message" placeholder="Briefly describe your concern" textarea />
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90">
              Send via WhatsApp <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required, textarea }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean; textarea?: boolean;
}) {
  const base = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20";
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={base} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} required={required} className={base} />
      )}
    </label>
  );
}

function InfoRow({ icon: Icon, title, lines, href }: { icon: React.ElementType; title: string; lines: string[]; href?: string }) {
  const body = (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm text-foreground">
          {lines.map((l) => <div key={l}>{l}</div>)}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition hover:translate-x-1">{body}</a> : body;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-sm text-white/65">
            Comprehensive gastrointestinal & hepato-biliary care at Kosha Clinics, Race Course, Dehradun.
          </p>
        </div>
        <div className="text-sm text-white/75">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Visit</div>
          <p className="mt-3 leading-relaxed">Kosha Clinics G4F4, Lord Krishna Crest,<br/>53 Subhash Road, Race Course,<br/>Dehradun, Uttarakhand 248001</p>
        </div>
        <div className="text-sm text-white/75">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">Contact</div>
          <p className="mt-3"><a href={TEL} className="hover:text-white">{PHONE_DISPLAY}</a></p>
          <p className="mt-1">Open daily · 10:00 AM onwards</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/55 md:flex-row">
          <span>© {new Date().getFullYear()} Dr. Lakshmi Rao · Kosha Clinics. All rights reserved.</span>
          <span>Gastroenterologist · Hepato-Biliary Specialist · Dehradun</span>
        </div>
      </div>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a href={TEL} className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-medium text-primary-foreground">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[var(--gold)] py-3.5 text-sm font-semibold text-primary">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
