import imageUrlBuilder from '@sanity/image-url';
import { client } from "@/sanity/client";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource | undefined) {
  if (!source) throw new Error("Invalid image source");
  return builder.image(source);
}
