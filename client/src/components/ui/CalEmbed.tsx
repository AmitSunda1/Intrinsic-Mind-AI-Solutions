"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal: any;
  }
}

function loadCalScript() {
  // Set up the Cal queue/loader if it hasn't been set up yet
  if (window.Cal) return;

  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    const d = C.document;

    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        const ar = arguments;

        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement("script");
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }

        if (ar[0] === L) {
          const api: any = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];

          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }

          return;
        }

        p(cal, ar);
      };
  })(window, "https://app.cal.com/embed/embed.js", "init");
}

type CalEmbedProps = {
  id?: string;
  height?: string;
};

export default function CalEmbed({ id = "cal-embed", height = "580px" }: CalEmbedProps) {
  useEffect(() => {
    const namespace = process.env.NEXT_PUBLIC_CAL_NAMESPACE || "";

    if (!namespace) {
      console.warn(
        "[CalEmbed] NEXT_PUBLIC_CAL_NAMESPACE is not set. Please update your .env.local file."
      );
      return;
    }

    // Load script once — safe to call every time, internally guarded
    loadCalScript();

    // Init namespace (always — needed on hot reloads and strict mode)
    window.Cal("init", namespace, {
      origin: "https://cal.com",
    });

    // Render inline booking UI — calLink is REQUIRED
    window.Cal.ns[namespace]("inline", {
      elementOrSelector: `#${id}`,
      calLink: namespace,
      config: {
        layout: "month_view",
      },
    });

    // UI theme & branding to match site colors
    window.Cal.ns[namespace]("ui", {
      theme: "light",
      styles: {
        branding: {
          brandColor: "#626ee3",
        },
      },
    });

    // Optional: redirect on successful booking
    window.Cal("on", {
      action: "bookingSuccessful",
      callback: () => {
        console.log("[CalEmbed] Booking confirmed!");
        // window.location.href = "/thank-you";
      },
    });
  }, [id]);

  return (
    <div
      className="w-full rounded-[18px] overflow-hidden bg-white"
      style={{ height, overflowY: "auto" }}
    >
      <div id={id} style={{ minHeight: height, width: "100%" }} />
    </div>
  );
}
