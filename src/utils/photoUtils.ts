// Utility for random photo selection from cucfs photos
const allPhotos = [
  "/gallery/IMG_0107.JPG", "/gallery/IMG_0110.JPG", "/gallery/IMG_0120.JPG", "/gallery/IMG_0123.JPG", "/gallery/IMG_0125.JPG",
  "/gallery/IMG_0131.JPG", "/gallery/IMG_0135.JPG", "/gallery/IMG_0138.JPG", "/gallery/IMG_0142.JPG", "/gallery/IMG_0145.JPG",
  "/gallery/IMG_0148.JPG", "/gallery/IMG_0151.JPG", "/gallery/IMG_0154.JPG", "/gallery/IMG_0157.JPG", "/gallery/IMG_0160.JPG",
  "/gallery/IMG_0163.JPG", "/gallery/IMG_0166.JPG", "/gallery/IMG_0169.JPG", "/gallery/IMG_0172.JPG", "/gallery/IMG_0175.JPG",
  "/gallery/IMG_0178.JPG", "/gallery/IMG_0181.JPG", "/gallery/IMG_0184.JPG", "/gallery/IMG_0187.JPG", "/gallery/IMG_0190.JPG",
  "/gallery/IMG_0193.JPG", "/gallery/IMG_0196.JPG", "/gallery/IMG_0199.JPG", "/gallery/IMG_0202.JPG", "/gallery/IMG_0205.JPG",
  "/gallery/IMG_0208.JPG", "/gallery/IMG_0211.JPG", "/gallery/IMG_0214.JPG", "/gallery/IMG_0217.JPG", "/gallery/IMG_0220.JPG",
  "/gallery/IMG_0223.JPG", "/gallery/IMG_0226.JPG", "/gallery/IMG_0229.JPG", "/gallery/IMG_0232.JPG", "/gallery/IMG_0235.JPG",
  "/gallery/IMG_0238.JPG", "/gallery/IMG_0241.JPG", "/gallery/IMG_0244.JPG", "/gallery/IMG_0247.JPG", "/gallery/IMG_0250.JPG"
]

export function getRandomPhoto(): string {
  return allPhotos[Math.floor(Math.random() * allPhotos.length)]
}

export function getRandomPhotos(count: number): string[] {
  const shuffled = [...allPhotos].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
