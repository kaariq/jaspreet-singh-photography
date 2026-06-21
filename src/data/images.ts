import {
  camera,
  drone,
  editing,
  gimbal,
  lens,
  lights,
  lens50,
  tripod,
  battery,
} from "@/assets/gears";

import { a, b, c, d, e, f, g } from "@/assets/images";

import { hero, intro, logo } from "@/assets";

export const images: Record<string, string> = {
  logo,

  hero1: a,
  hero2: b,
  hero3: c,
  hero4: d,
  hero5: e,
  hero6: f,
  hero7: g,

  gearBattery: battery,
  gearCamera: camera,
  gearDrone: drone,
  gearEditing: editing,
  gearGimbal: gimbal,
  gearLens: lens,
  gearLens50: lens50,
  gearLights: lights,
  gearTripod: tripod,

  heroVideo: hero,
  introVideo: intro,
};

export function img(key: string, fallback = ""): string {
  return images[key] ?? fallback;
}
