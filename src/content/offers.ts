export interface Offer {
  id: string;
  packageId: string;
  startsAt: string; // ISO date string
  endsAt: string;
  text: { en: string; ar: string };
  offerPrice: string;
  originalPrice: string;
}

// Empty until Noura adds a real offer.
export const offers: Offer[] = [];

export function getActiveOffer(): Offer | null {
  const now = Date.now();
  return (
    offers.find((o) => {
      const start = new Date(o.startsAt).getTime();
      const end = new Date(o.endsAt).getTime();
      return start <= now && now < end;
    }) ?? null
  );
}
