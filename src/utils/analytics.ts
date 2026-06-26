// utils/analytics.ts

type DataLayerEvent = {
  event: string;
  [key: string]: any;
};

export const pushToDataLayer = (payload: DataLayerEvent) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
};