
import { GameCardProps, Reward } from './types';

export const GAMES: GameCardProps[] = [
  { title: "GTA 5", imageUrl: "./images/GTA5.jpg" },
  { title: "CALL OF DUTY 3", imageUrl: "https://picsum.photos/seed/cod3/400/225" },
  { title: "WWE 2K24", imageUrl: "https://picsum.photos/seed/wwe24/400/225" },
  { title: "FIFA 23", imageUrl: "https://picsum.photos/seed/fifa23/400/225" },
  { title: "MORTAL KOMBAT ULTIMATE", imageUrl: "https://picsum.photos/seed/mk/400/225" },
  { title: "TEKKEN 8", imageUrl: "https://picsum.photos/seed/tekken8/400/225" },
  { title: "GHOST OF TSUSHIMA", imageUrl: "https://picsum.photos/seed/ghost/400/225" },
  { title: "RISE OF THE TOMB RAIDER", imageUrl: "https://picsum.photos/seed/tr_rise/400/225" },
  { title: "SPIDERMAN", imageUrl: "https://picsum.photos/seed/spider/400/225" },
  { title: "SHADOW OF THE TOMBRAIDER", imageUrl: "https://picsum.photos/seed/tr_shadow/400/225" },
  { title: "CYBERPUNK", imageUrl: "https://picsum.photos/seed/cyber/400/225" },
  { title: "CRICKET 24", imageUrl: "https://picsum.photos/seed/cricket/400/225" },
  { title: "ASTROBOT", imageUrl: "https://picsum.photos/seed/astro/400/225" },
  { title: "GOD OF WAR 3", imageUrl: "https://picsum.photos/seed/gow3/400/225" },
  { title: "RYSE SON OF ROME", imageUrl: "https://picsum.photos/seed/ryse/400/225" },
  { title: "NEED FOR SPEED HEAT", imageUrl: "https://picsum.photos/seed/nfs/400/225" },
  { title: "ASSASSIN’S CREED VALHALLA", imageUrl: "https://picsum.photos/seed/acv/400/225" },
  { title: "FORZA HORIZON 5", imageUrl: "https://picsum.photos/seed/fh5/400/225" },
  { title: "VR2", imageUrl: "https://picsum.photos/seed/vr2/400/225" },
  { title: "NARUTO", imageUrl: "https://picsum.photos/seed/naruto/400/225" },
  { title: "UFC", imageUrl: "https://picsum.photos/seed/ufc/400/225" },
  { title: "NBA NK26", imageUrl: "https://picsum.photos/seed/nba/400/225" },
  { title: "HIT MAN", imageUrl: "https://picsum.photos/seed/hitman/400/225" },
  { title: "HORIZON CALL OF THE MOUNTAIN", imageUrl: "https://picsum.photos/seed/horizon/400/225" },
  { title: "battle ground", imageUrl: "https://picsum.photos/seed/horizon/400/225" },
  { title: "HORIZON CALL OF THE MOUNTAIN", imageUrl: "https://picsum.photos/seed/horizon/400/225" },
];

// Added missing COMING_SOON export to fix import error in components/GamesGallery.tsx
export const COMING_SOON: GameCardProps[] = [
  { title: "GTA 6", imageUrl: "https://picsum.photos/seed/gta6/400/225", isComingSoon: true },
  { title: "MARVEL'S WOLVERINE", imageUrl: "https://picsum.photos/seed/wolverine/400/225", isComingSoon: true },
  { title: "DEATH STRANDING 2", imageUrl: "https://picsum.photos/seed/ds2/400/225", isComingSoon: true },
];

export const CASH_REWARDS: Reward[] = [
  { game: "Assassin's Creed", amount: 400 },
  { game: "GTA 5", amount: 300 },
  { game: "God of War Ragnarok", amount: 250 },
  { game: "God of War 4", amount: 200 },
  { game: "Ghost of Tsushima", amount: 200 },
  { game: "Cyberpunk", amount: 200 },
  { game: "Spider Man", amount: 200 },
  { game: "Rise of the T. Raider", amount: 150 },
  { game: "Shadow of the T. Raider", amount: 150 },
  { game: "Resident Evil Village", amount: 100 },
];

export const WHATSAPP_NUMBER = "919253005137";
