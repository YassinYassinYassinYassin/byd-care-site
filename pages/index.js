import { useMemo, useState } from "react";

// tiny UI
const Button = ({ as: Tag = "button", className = "", children, ...props }) => (
  <Tag className={"inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm border border-black/10 hover:shadow transition " + className} {...props}>{children}</Tag>
);
const Card = ({ className = "", children }) => (<div className={"rounded-2xl border border-black/10 bg-white shadow-sm " + className}>{children}</div>);
const Section = ({ id, className = "", children }) => (<section id={id} className={"mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 " + className}>{children}</section>);
const EmojiIcon = ({ e, label = "icon", className = "" }) => (<span role="img" aria-label={label} className={"inline-block align-middle " + className}>{e}</span>);

// data
const CHANNELS = [
  { name: "Amazon FBA/FBM", emoji: "🛒", desc: "Brand Registry, A+ content, demand forecasting, Seller/Vendor Central ops." },
  { name: "Walmart Marketplace", emoji: "🏬", desc: "WFS/3P, spec compliance, search + in-grid ads, fast tags." },
  { name: "Target Plus & Retail", emoji: "🏢", desc: "Retail-readiness packs, ASN/EDI, chargeback prevention." },
  { name: "Shopify / DTC", emoji: "🌐", desc: "Storefront build, CRO, subscriptions, pixel/GA4, LTV loops." },
  { name: "B2B / EDI", emoji: "📄", desc: "Net terms, portal management, EDI (850/855/856/810), chargebacks." },
  { name: "Wholesale & 3P", emoji: "🏭", desc: "Distributor relationships, MOQs, MAP enforcement, replenishment." }
];
const SERVICES = [
  { title: "Sourcing & Compliance", points: ["RFQs & vendor audits", "ASTM/ISO docs", "COO & labeling"], emoji: "🛡️" },
  { title: "Ops & 3PL", points: ["FBA prep & routing", "WMS/ASN", "Returns/RMA"], emoji: "🚚" },
  { title: "Growth & Ads", points: ["SEO/PDP builds", "PPC/AMS", "Promos & bundles"], emoji: "📈" },
  { title: "Packaging & QA", points: ["Dielines & barcodes", "Drop tests", "QC checklists"], emoji: "📦" }
];
const METRICS = [
  { label: "Fill Rate", value: "98.6%" },
  { label: "On-Time Ship", value: "99.1%" },
  { label: "Retail Chargebacks", value: "<0.3%" },
  { label: "SKUs Managed", value: "1,200+" }
];
const CASES = [
  { brand: "HomeCare Brand", result: "+212% 90-day sales", detail: "Launched on Amazon + Walmart; chargebacks −87%." },
  { brand: "Beauty DTC", result: "CAC −28%", detail: "Rebuilt Shopify; AOV +19% via bundles/subscriptions." },
  { brand: "Hardware OEM", result: "EDI in 30 days", detail: "850/855/856/810 flows; ASN accuracy 99.7%." }
];
const CATEGORIES = [
  { name: "Personal Care", examples: ["Disposable Face Masks", "Hand Sanitizer", "Moisturizing Lotions"] },
  { name: "Household Essentials", examples: ["Cleaning Wipes", "Trash Bags", "Multi-surface Sprays"] },
  { name: "Medical Supply", examples: ["N95 Respirators", "Surgical Masks", "Digital Thermometers"] },
  { name: "Beauty & Wellness", examples: ["Hair Oils", "Conditioners", "Facial Serums"] }
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", volume: "" });
  const mailto = useMemo(() => {
    const params = new URLSearchParams({
      subject: `New Brand Inquiry — ${form.company || form.name || "Website"}`,
      body: `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nMonthly Volume: ${form.volume}\n\nMessage:\n${form.message}`
    });
    return `mailto:sales@bydcare.shop?${params.toString()}`;
  }, [form]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-black/10 backdrop-blur bg-white/70">
        <Section className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-extrabold tracking-tight text-lg">
            <EmojiIcon e="📦" /> BYD CARE Distribution
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#channels" className="hover:opacity-70">Channels</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#cases" className="hover:opacity-70">Results</a>
            <a href="#categories" className="hover:opacity-70">Products</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </Section>
      </header>

      {/* Hero */}
      <Section className="pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl">
          Multi-Channel Distribution that actually ships and scales.
        </h1>
        <p className="mt-4 text-zinc-700 text-lg max-w-2xl">
          We move your product from factory to cart across Amazon, Walmart, Target+, Shopify, and B2B/EDI — with compliance, packaging, ads, and 3PL handled end-to-end.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button as="a" href="#contact" className="bg-black text-white">Request Pricing</Button>
          <Button as="a" href="#channels" className="bg-white">See Channels</Button>
        </div>
      </Section>

      {/* Metrics */}
      <Section className="pb-6">
        <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
          {METRICS.map((m) => (
            <div key={m.label} className="flex items-center gap-2">
              <EmojiIcon e="✅" /> {m.label}: <span className="font-semibold text-zinc-900 ml-1">{m.value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Channels */}
      <Section id="channels" className="py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Channels we operate</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((c) => (
            <Card key={c.name} className="p-6">
              <div className="flex items-center gap-3">
                <EmojiIcon e={c.emoji} className="text-xl" />
                <h3 className="font-semibold">{c.name}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-700">{c.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">What we do</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Card key={s.title} className="p-6">
              <div className="flex items-center gap-3">
                <EmojiIcon e={s.emoji} className="text-xl" />
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2"><EmojiIcon e="✅" />{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Results */}
      <Section id="cases" className="py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Recent results</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {CASES.map((k, i) => (
            <Card key={i} className="p-6">
              <div className="text-sm uppercase tracking-wide text-zinc-600">{k.brand}</div>
              <div className="mt-2 text-xl font-bold">{k.result}</div>
              <p className="mt-2 text-sm text-zinc-700">{k.detail}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section id="categories" className="py-12">
        <h2 className="text-2 md:text-3xl font-extrabold mb-8">Categories we've sold in</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <Card key={cat.name} className="p-6">
              <div className="flex items-center gap-3">
                <EmojiIcon e="🗂️" className="text-xl" />
                <h3 className="font-semibold">{cat.name}</h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {cat.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2"><EmojiIcon e="✅" />{ex}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl font-extrabold">Contact</h2>
            <p className="mt-3 text-sm text-zinc-700 max-w-md">Tell us your SKUs, monthly volume, and target channels. We&rsquo;ll reply with a pilot plan and pricing.</p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2"><EmojiIcon e="📞" /> (626) 885-3145</div>
              <a className="flex items-center gap-2 hover:underline" href="mailto:sales@bydcare.shop"><EmojiIcon e="✉️" /> sales@bydcare.shop</a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Card className="p-6">
              <form onSubmit={(e) => { e.preventDefault(); alert("Submitted. Wire this to Formspree or backend."); }} className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Input label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                  <Input label="Monthly Volume (units)" value={form.volume} onChange={(v) => setForm({ ...form, volume: v })} />
                </div>
                <Textarea label="Message" rows={5} value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" className="bg-black text-white">Submit</Button>
                  <Button as="a" href={mailto}>Open Email Client</Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t border-black/10 bg-white">
        <Section className="py-10 grid gap-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-extrabold text-lg"><EmojiIcon e="📦" /> BYD CARE Distribution</div>
            <p className="mt-3 text-sm text-zinc-700 max-w-md">End-to-end multi-channel distribution. We source, prep, ship, list, and grow — with compliance dialed in.</p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Company</div>
            <ul className="text-sm space-y-2 text-zinc-700">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#channels" className="hover:underline">Channels</a></li>
              <li><a href="#cases" className="hover:underline">Results</a></li>
              <li><a href="#categories" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2">Legal</div>
            <ul className="text-sm space-y-2 text-zinc-700">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </div>
        </Section>
        <div className="border-t border-black/10 py-6">
          <Section className="text-xs text-zinc-600">© {new Date().getFullYear()} BYD CARE Distribution. All rights reserved.</Section>
        </div>
      </footer>
    </div>
  );
}

function Input({ label, onChange, className = "", ...props }) {
  return (
    <label className="grid gap-1 text-sm w-full">
      <span className="font-medium text-zinc-800">{label}</span>
      <input {...props} className={"w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 " + className} onChange={(e) => onChange?.(e.target.value)} />
    </label>
  );
}
function Textarea({ label, onChange, className = "", ...props }) {
  return (
    <label className="grid gap-1 text-sm w-full">
      <span className="font-medium text-zinc-800">{label}</span>
      <textarea {...props} className={"w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black/10 " + className} onChange={(e) => onChange?.(e.target.value)} />
    </label>
  );
}



