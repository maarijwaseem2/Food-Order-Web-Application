"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { title } from "process";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function modal({
  title,
  description,
  isOpen,
  onClose,
  children,
}: ModalProps) {
    const onChange = (open: boolean)=>{
        if(!isOpen){
            onClose();
        }
    };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
