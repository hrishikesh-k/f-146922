import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function Contact () {
  const t = useTranslations();
  return (
    <div className="w-full-container text-textContrastColor with-texture relative border-b-4 border-borderColor">
      <div className="flex justify-center">
        <div className="md:w-[80%] w-full">
          <div className='font-secondary text-2xl md:text-4xl text-textColor pb-2 md:px-5'>
            {t('contact')}
          </div>
          <div className="md:px-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}