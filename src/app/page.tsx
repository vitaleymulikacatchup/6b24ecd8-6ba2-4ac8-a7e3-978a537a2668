use client

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "modern tech workspace - Photo by Pew Nguyen" },
  { "id": "feature-image-1", "url": "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed image of a server rack with glowing lights in a modern data center." },
  { "id": "feature-image-2", "url": "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed charts and graphs on a document next to a laptop, representing data analysis." },
  { "id": "team-member-1", "url": "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young professional leading a diverse team in a contemporary office setting." },
  { "id": "team-member-2", "url": "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up shot of a person coding on a laptop, focusing on the hands and screen." },
  { "id": "testimonial-image", "url": "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A man in a suit presenting a blank business card for corporate usage." },
  { "id": "partner-logo-1", "url": "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium." },
  { "id": "partner-logo-2", "url": "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing." },
  { "id": "partner-logo-3", "url": "https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design." },
  { "id": "partner-logo-4", "url": "https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of the Amazon shopping app icon on a smartphone screen. Ideal for online shopping and technology themes." },
  { "id": "partner-logo-5", "url": "https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "IBM logo - Photo by Tom Fisk" },
  { "id": "partner-logo-6", "url": "https://images.pexels.com/photos/343239/pexels-photo-343239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Detailed close-up of a laptop keyboard featuring Intel Core i7 and NVIDIA GeForce stickers, highlighting technology components." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/brand/logo.svg"
          brandName="IT Corp"
          buttonText="Contact Us"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to IT Corp"
            description="Delivering cutting-edge IT solutions."
            imageSrc={"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={["We are a leading IT service provider.", "Our mission is to leverage technology to solve challenges."]}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            title="Our Features"
            description="Explore our unique IT solutions."
            features={[
              {
                id: "01",
                title: "Cloud Solutions",
                description: "Robust cloud infrastructure.",
                imageSrc: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                id: "02",
                title: "Data Analytics",
                description: "Enhanced data-driven insights.",
                imageSrc: "https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
          />
        </div>
      </div>

      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            title="Meet Our Team"
            description="The experts driving our success."
            members={[
              {
                id: "1",
                name: "John Doe",
                role: "CEO",
                imageSrc: "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                id: "2",
                name: "Jane Smith",
                role: "CTO",
                imageSrc: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Feedback from our satisfied clients."
            testimonials={[
              {
                id: "1",
                name: "Emily R.",
                role: "CTO",
                company: "Tech Innovators",
                rating: 5,
                imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
          />
        </div>
      </div>

      <div id="socialProof" data-section="socialProof" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SocialProofOne
            title="Trusted by Industry Leaders"
            description="Join companies that trust us."
            logos={[
              "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/34290260/pexels-photo-34290260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              "https://images.pexels.com/photos/343239/pexels-photo-343239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Stay Connected"
            title="Get in Touch"
            description="We'd love to hear from you. Contact us for more information."
            imageSrc="https://images.pexels.com/photos/326576/pexels-photo-326576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Solutions",
                items: [
                  { label: "Services", href: "services" },
                  { label: "Contact", href: "contact" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About", href: "about" },
                  { label: "Careers", href: "careers" }
                ]
              }
            ]}
            copyrightText="© 2025 IT Corp"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
