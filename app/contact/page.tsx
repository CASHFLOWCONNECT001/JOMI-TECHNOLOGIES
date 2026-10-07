import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { CtaSection } from "@/components/ui/cta-section";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact JOMI TECHNOLOGIES INSTITUTE for ICT training enrollment, software and systems inquiries, ERP, CRM, e-commerce, POS, school management, and custom web or mobile project consultations. Messages reach us directly on WhatsApp.",
  path: "/contact",
  keywords: [
    "contact JOMI TECHNOLOGIES INSTITUTE",
    "ICT training enrollment",
    "computer course registration",
    "software project inquiry",
    "ERP CRM consultation",
    "e-commerce website inquiry",
    "WhatsApp contact",
    "digital solutions support",
  ],
});

const WHATSAPP_NUMBER = "254788060447";
const WHATSAPP_DISPLAY = "254788060447";

export default function ContactPage() {
  return (
    <main className="section-y">
      <Container>
        <SectionWrapper elevated>
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Contact
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            Contact JOMI TECHNOLOGIES INSTITUTE
          </h1>
          <p className="mt-3 max-w-3xl text-foreground/82">
            Book a discovery session, enroll in a training program, or start a
            conversation about your technical project requirements. Every message
            submitted through this form is delivered straight to our WhatsApp.
          </p>

          {/* WhatsApp direct buttons */}
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello JOMI TECHNOLOGIES INSTITUTE, I would like to inquire about your services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-2 rounded-[var(--radius-cta)] px-4 py-2 text-sm font-semibold"
            >
              Chat on WhatsApp — {WHATSAPP_DISPLAY}
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius-cta)] border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            >
              Call {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div className="card-brand home-glass mt-5 p-4 md:p-5">
            <ContactForm whatsappNumber={WHATSAPP_NUMBER} />
          </div>

          <CtaSection
            title="Looking for service details?"
            description="Explore our training programs and software systems to understand our delivery models and technical capabilities."
            primaryAction={{ href: "/services", label: "View Services" }}
            secondaryAction={{
              href: "/services/other-digital-services",
              label: "Consult on Custom Scope",
            }}
          />
        </SectionWrapper>
      </Container>
    </main>
  );
}