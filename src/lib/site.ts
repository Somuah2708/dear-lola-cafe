// Single source of truth for Dear Lola's business details.
// Confirm anything marked UNVERIFIED with the client before launch.

export const site = {
  name: "Dear Lola Bakehouse",

  // Verified: instagram.com/dearlolabakehouse (official account)
  instagram: {
    handle: "@dearlolabakehouse",
    url: "https://www.instagram.com/dearlolabakehouse/",
  },

  // Verified: Instagram bio — "Daily: 8am - 6pm"
  hours: {
    days: "Monday – Sunday",
    time: "8:00 AM – 6:00 PM",
    short: "Open Daily 8AM – 6PM",
  },

  // "3 Osu Link" comes from a third-party listing; "Nyaniba Estates" from several listings
  address: {
    line1: "3 Osu Link, Nyaniba Estates",
    line2: "Osu, Accra, Ghana",
    mapsQuery: "Dear Lola Bakehouse, 3 Osu Link, Osu, Accra",
  },

  // UNVERIFIED: only found on a third-party directory listing, not on Dear Lola's own channels.
  // Set to null to hide every call link on the site.
  phone: { display: "+233 55 371 4884", tel: "+233553714884" } as { display: string; tel: string } | null,

  // Set to a number (digits only, e.g. "233553714884") once the client confirms a WhatsApp line
  whatsapp: null as string | null,
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&t=m&z=16&output=embed`;
export const whatsappLink = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Dear Lola!")}`
  : null;
