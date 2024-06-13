import { createClient } from "@sanity/client";
import  imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: 'tq0fu9nc',
  dataset: 'production',
  apiVersion: '2023-2024',
  useCdn:true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source);
}