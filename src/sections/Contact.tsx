import { ContactForm } from "@/components/Contact/ContactForm";
import { Contacts } from "@/components/Contact/Contacts";
import { ContactTitle } from "@/components/Contact/ContactTitle";

export const ContactSection = () => {
  return (
    <footer id="contact" className="pt-8 pb-0">
      <div className="relative overflow-x-clip">
        <div className="absolute h-[400px] w-[1600px] bottom-0 bg-emerald-300/30 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="bg-black/15 lg:rounded-[20px]">
          <div className="container">
            <div className="flex flex-col gap-12 lg:flex lg:flex-row lg:justify-between">
              <div className="lg:w-[400px]">
                <ContactTitle />
                <Contacts />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
