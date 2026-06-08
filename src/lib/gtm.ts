let gtm:any;

export const getGTM = async () => {
  if (!gtm && typeof window !== "undefined") {
    const gtmModule = await import("react-gtm-module");
    gtm = gtmModule.default || gtmModule;
    gtm.initialize({
      gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    });
  }

  return gtm;
};