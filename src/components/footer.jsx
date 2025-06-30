import bartLogo from '../assets/bartCoin.PNG';
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
const FooterSection = () => {
    return (
          <Footer container className="bg-[#ffe649] montserrat">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            src={bartLogo}
            alt="bartLogo"

          />
          <FooterLinkGroup>
            <FooterLink href="#">Community</FooterLink>
            <FooterLink href="https://x.com/basedbartcoin">X</FooterLink>
            <FooterLink href="https://t.me/izzzyeth">Collaborate with Us</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider className="" />
        <FooterCopyright href="#" by="Bart.inc™" year={2025} />
      </div>
    </Footer>
    );
};

export default FooterSection;
