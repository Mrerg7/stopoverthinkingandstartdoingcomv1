export const SITE = {
  name: 'stopoverthinkingandstartdoing.com',
  title: 'stopoverthinkingandstartdoing.com | Premium Domain for Sale — Own the Call to Action',
  description:
    'stopoverthinkingandstartdoing.com — Premium exact-match domain for the self-improvement industry. The ultimate brand for coaches, creators, apps, and courses that turn overthinkers into unstoppable action-takers. Now available for acquisition.',
  url: 'https://stopoverthinkingandstartdoing.com',
  locale: 'en_US',
  acquisitionEmail: 'sales@desertrich.com',
  updated: '2026-06-01',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroId: 'edd59d02-c4aa-4db1-5554-e86e27715200',
  variant: 'public',
} as const;

export function cfImageUrl(
  imageId: string,
  variant: string = CF_IMAGES.variant,
): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const ACQUISITION_MAILTO = `mailto:${SITE.acquisitionEmail}?subject=${encodeURIComponent(
  `${SITE.name} — Domain Acquisition Inquiry`,
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring stopoverthinkingandstartdoing.com. Please share availability, terms, and next steps.\n\n— ',
)}`;
