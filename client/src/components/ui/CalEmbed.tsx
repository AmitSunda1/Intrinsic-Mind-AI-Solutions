"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

type CalEmbedProps = {
  id?: string;
  height?: string;
};

export default function CalEmbed({ id = "cal-embed", height = "580px" }: CalEmbedProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "contact" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          branding: {
            brandColor: "#626ee3",
          },
        },
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          console.log("[CalEmbed] Booking confirmed!");
        },
      });
    })();
  }, []);

  const calLink = process.env.NEXT_PUBLIC_CAL_NAMESPACE || "";

  if (!calLink) {
    console.warn("[CalEmbed] NEXT_PUBLIC_CAL_NAMESPACE is not set. Please update your .env.local file.");
  }

  return (
    <div
      className="w-full rounded-[18px] overflow-hidden bg-white"
      style={{ height, overflowY: "auto" }}
      id={id}
    >
      {calLink && (
        <Cal
          namespace="contact"
          calLink={calLink}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "light" }}
        />
      )}
    </div>
  );
}
