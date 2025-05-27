import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

import Faq from "@/public/assets/svg/faqs.svg";
import { faqData } from "@/config/constants/faq";

function FAQ() {
  return (
    <div className="pt-16 pb-52 h-full">
      <div className="flex flex-col gap-[24px]">
        <div className="flex justify-start items-center gap-3">
          <Faq />
          <h2 className=" text-2xl sm:text-xl font-medium">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq,idx)=>(
            <AccordionItem value={`${faq.id}`} key={faq.id} className="mt-3  bg-[#21201F] rounded-lg !px-[21px] text-[#b4b4b4] hover:text-[#dbdbdb]">
            <AccordionTrigger className=" text-base !py-[14px] !border-b-0">
              <h2>{faq.title}</h2>
            </AccordionTrigger>
            <AccordionContent className="text-base font-normal text-[#b4b4b4]">
              {faq.content}
            </AccordionContent>
          </AccordionItem>
          ))}
          
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
