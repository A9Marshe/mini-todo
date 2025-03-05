import { Separator } from "@radix-ui/react-separator";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardContainer({
  header,
  description,
  children,
  footer,
  controls,
}: {
  header: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  controls?: React.ReactNode;
}) {
  return (
    <Card className=" w-full min-h-full flex flex-col max-h-[50dvh]  justify-between">
      <CardHeader className="p-2 px-4 flex items-center flex-row gap-4 ">
        <CardTitle className="text-xl">{header}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
        {controls && controls}
      </CardHeader>
      <CardContent className=" overflow-y-auto flex-1">{children}</CardContent>
      {footer && (
        <CardFooter className="flex gap-y-2 items-start  p-2 flex-col">
          <Separator />
          <small className="text-sm px-2 font-medium leading-none">
            {footer}
          </small>
        </CardFooter>
      )}
    </Card>
  );
}
