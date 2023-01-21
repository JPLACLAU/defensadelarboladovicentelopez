const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "Kt7Q66q_ys4", width: 1080, height: 780 },
  { id: "D23_STd5Ifc", width: 1080, height: 1620 },
  { id: "a-SKMLfNu7o", width: 1080, height: 720 },
  { id: "s86fbVz_vQc", width: 1080, height: 721 },
  { id: "uK1bMVsU5Ck", width: 1080, height: 1620 },
  { id: "-q_CpEOYHxE", width: 1080, height: 607 },
  { id: "-heLWtuAN3c", width: 1080, height: 608 },
  { id: "UaU93_GK5Z8", width: 1080, height: 720 },
  { id: "9dee96USC7A", width: 1080, height: 1549 },
  { id: "9NDISMINnCQ", width: 1080, height: 720 },
  { id: "m1K76vezRIk", width: 1080, height: 694 },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  { id: "sEXGgun3ZiE", width: 1080, height: 720 },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
  { id: "q-motCAvPBM", width: 1080, height: 1620 },
  { id: "Xn4L310ztMU", width: 1080, height: 810 },
  { id: "ls94iFAQerE", width: 1080, height: 1620 },
  { id: "X48pUOPKf7A", width: 1080, height: 160 },
  { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
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
