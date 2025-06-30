import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import React from "react";

interface GridCardProps {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const GridCard = ({
  title = "Card Title",
  description = "Card Description",
  footer,
  children,
}: GridCardProps) => {
  return (
    <div className="p-4 h-full">
      <Card className="shadow-lg rounded-xl border border-neutral-800 bg-gradient-to-br from-black via-neutral-900 to-indigo-950 transition-transform hover:scale-105 duration-300 text-white h-full ">
        <CardHeader>
          <CardTitle className="text-lg text-indigo-300">{title}</CardTitle>
          <CardDescription className="text-neutral-400">{description}</CardDescription>
        </CardHeader>
        <CardContent className="py-4">{children}</CardContent>
        {footer && <CardFooter className="border-t border-neutral-800 mt-2 pt-2">{footer}</CardFooter>}
      </Card>
    </div>
  );
};

export default GridCard;