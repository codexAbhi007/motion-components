"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className={cn(
              "w-72 min-h-[26rem] h-[26rem] rounded-xl bg-white text-gray-800",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-6 flex flex-col"
            )}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          >
            <h2 className="font-bold text-[10px]">Lorem ipsum dolor sit.</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              dicta.
            </p>
            <div className="flex items-center justify-center">
              <motion.button
                className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1 cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Button
                <X size={10} />
              </motion.button>
            </div>
            <div className="flex-1 mt-4 rounded-lg bg-gray-100 border border-neutral-200 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                // transition={{duration: 0.3, ease: "easeInOut"}}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  mass: 1,
                }}
                className="absolute inset-0 h-full w-full rounded-lg divide-y bg-white divide-neutral-200 border border-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                </div>
                <div className="flex gap-2 p-4">
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                </div>
                <div className="flex gap-2 p-4">
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                </div>
                <div className="flex gap-2 p-4">
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                  <div>ABC</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Card;
