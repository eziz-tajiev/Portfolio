import ArrowUp from "@/assets/icons/arrow-up-right.svg"
const footerLinks = [
{
  title: 'Telegram',
  href: '#',
},
{
  title: 'WhatsApp',
  href: '#',
},
{
  title: 'Github',
  href: '#',
},
]



export const Footer = () => {
  return(
    <footer>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8">
          <div className="text-white/40 ">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8">
            {footerLinks.map(link=>(
              <a href="" className="inline-flex items-center gap-1.5">
                <span>{link.title}</span>
                <ArrowUp className="size-4" />
              </a>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  );
};
