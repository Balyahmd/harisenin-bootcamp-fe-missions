const AVATAR_COUNT = 8;
const AVATAR_BASE_URL = import.meta.env.VITE_AVATAR_BASE_URL;

export function getRandomAvatar() {
  const index = Math.floor(Math.random() * AVATAR_COUNT) + 1;
  return `${AVATAR_BASE_URL}Avatar${index}.png`;
}