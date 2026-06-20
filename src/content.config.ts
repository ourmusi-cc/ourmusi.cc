import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Mirrors workspace/artists/*/artist.json
const artists = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/artists' }),
  schema: z.object({
    schema_version: z.string(),
    id: z.string(),
    display_name: z.string(),
    legal_name: z.string().optional(),
    also_known_as: z.array(z.string()).optional(),
    bio: z.object({
      short: z.string(),
      medium: z.string().optional(),
      full: z.string().optional(),
    }),
    genre_tags: z.array(z.string()).optional(),
    contact: z.object({
      email: z.string().email().optional(),
      website: z.string().url().optional(),
    }).optional(),
    location: z.string().optional(),
    rights: z.object({
      pro: z.string().optional(),
      ipi_number: z.string().optional(),
      isni: z.string().optional(),
    }).optional(),
    distribution: z.object({
      distributor: z.string().optional(),
      artist_page_url: z.string().url().optional(),
    }).optional(),
    default_license: z.string().optional(),
    platforms: z.object({
      spotify_artist_id: z.string().optional(),
      apple_music_artist_id: z.string().optional(),
      youtube_channel_id: z.string().optional(),
      youtube_music_channel_id: z.string().optional(),
      bandcamp_url: z.string().url().optional(),
      soundcloud_url: z.string().url().optional(),
      instagram_handle: z.string().optional(),
      facebook_url: z.string().url().optional(),
      subvert_fm_url: z.string().url().optional(),
      fma_url: z.string().url().optional(),
    }).optional(),
    members: z.array(z.string()).optional(),
    created_date: z.string(),
  }),
});

// Mirrors workspace/artists/*/releases/*/release.json
// Status values must match the OVL release schema exactly — OVL is canonical.
const releases = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/releases' }),
  schema: z.object({
    schema_version: z.string(),
    id: z.string(),
    title: z.string(),
    artist_id: z.string(),
    release_type: z.enum(['album', 'ep', 'single', 'compilation']),
    status: z.enum(['in-production', 'mastering', 'qc', 'ready', 'submitted', 'live', 'archived']),
    license: z.string(),
    description: z.object({
      short: z.string().optional(),
      full: z.string().optional(),
    }).optional(),
    genre_tags: z.array(z.string()).optional(),
    tracks: z.array(z.string()).optional(),
    dates: z.object({
      target_release: z.string().optional(),
      distributor_submission_deadline: z.string().optional(),
      submitted: z.string().optional(),
      released: z.string().optional(),
    }).optional(),
    distribution: z.object({
      distributor: z.string().optional(),
      upc: z.string().optional(),
      catalog_number: z.string().optional(),
    }).optional(),
    store_links: z.object({
      bandcamp: z.string().url().optional(),
      soundcloud: z.string().url().optional(),
      apple_music: z.string().url().optional(),
      spotify: z.string().url().optional(),
      youtube_music: z.string().url().optional(),
      tidal: z.string().url().optional(),
      amazon_music: z.string().url().optional(),
      fma: z.string().url().optional(),
      subvert_fm: z.string().url().optional(),
    }).optional(),
    created_date: z.string(),
  }),
});

export const collections = { artists, releases };
