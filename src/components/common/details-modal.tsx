"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ShowDetails from "../shows/ShowDetails";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";

function DetailsModal() {
  const router = useRouter();

  return (
    <Dialog
      modal={true}
      defaultOpen={true}
      open={true}
      onOpenChange={() => router.back()}
    >
      <DialogContent className="max-h-[50%] w-full max-w-[60rem] border-transparent bg-slate-900 p-0 text-white">
        <DialogTitle className="sr-only">Show Details</DialogTitle>
        <ShowDetails />
      </DialogContent>
    </Dialog>
  );
}

export default DetailsModal;
