import { Loader as LoadingSpinner } from "lucide-react";
import React from "react";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <LoadingSpinner className="animate-spin" />
    </div>
  );
}

export default Loader;
