"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "../ui/dialog";

function DetailsModal() {
  const router = useRouter();

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={() => router.back()}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Breaking Bad</DialogTitle>
      </DialogContent>
    </Dialog>
  );
}

export default DetailsModal;
