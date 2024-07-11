/**
 * Convert youtube video url to embed url
 * @param url - The youtube video url
 * @returns The youtube embed url
 */
const youtubeEmbedUrl = (url: string): string => {
  const videoId = url.split('v=')[1];
  return `https://www.youtube.com/embed/${videoId}`;
};

/**
 * Convert youtube embed url to video url
 * @param embedUrl - The youtube embed url
 * @returns The youtube video url
 */
const youtubeVideoUrl = (embedUrl: string): string => {
  const videoId = embedUrl.split('embed/')[1];
  return `https://www.youtube.com/watch?v=${videoId}`;
};

export { youtubeEmbedUrl, youtubeVideoUrl };
