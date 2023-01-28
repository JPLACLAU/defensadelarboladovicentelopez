const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "Kt7Q66q_ys4", width: 1080, height: 810 },
  { id: "D23_STd5Ifc", width: 1080, height: 1440 },
  { id: "a-SKMLfNu7o", width: 1080, height: 1440 },
  { id: "s86fbVz_vQc", width: 1080, height: 1440 },
  { id: "-q_CpEOYHxE", width: 1080, height: 1440 },
  { id: "UaU93_GK5Z8", width: 1080, height: 1440 },
  { id: "9dee96USC7A", width: 1080, height: 1440 },
  { id: "9NDISMINnCQ", width: 1080, height: 1440 },
  { id: "m1K76vezRIk", width: 1080, height: 1440 },
  { id: "H70nzH-0vJ8", width: 1080, height: 810 },
  { id: "lFHe1WUUJ8c", width: 1080, height: 810 },
  { id: "U7V8bqlLKkE", width: 1080, height: 810 },
  { id: "wmv-KMjVzC4", width: 1080, height: 1440 },
  { id: "l05w9DoYy_g", width: 1080, height: 1440 },
  { id: "PSmRlq8lD2Q", width: 1080, height: 1440 },
  { id: "07RA9kV-wdc", width: 1080, height: 810 },
  { id: "nI1M1M5jhn0", width: 1080, height: 810 },
  { id: "DP0BCXgvXmo", width: 1080, height: 1440 },
  { id: "dAf1kbli7aI", width: 1080, height: 810 },
];

const photos = unsplashPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: unsplashLink(photo.id, breakpoint, height),
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
