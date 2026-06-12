"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export function HomeTracker() {
  useEffect(() => {
    sendGAEvent("event", "demo-event", { value: "demo" });
  }, []);

  return null;
}
