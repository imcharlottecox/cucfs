export function ArchivePage() {
  // Original 9 photos from CUCFS 2017 Image Archive
  const archiveImages = [  
    { src: "/archive/IMG_2236.JPG" },
    { src: "/archive/IMG_2307.JPG" },
    { src: "/archive/IMG_2347.JPG" },
    { src: "/archive/IMG_2427.JPG" },
    { src: "/archive/IMG_2433.JPG" },
    { src: "/archive/Janet Sartor - Signefotar.JPG" },
    { src: "/archive/Johanne Dindler - Signefotar.JPG" },
    { src: "/archive/LK Bennett - Signefotar.JPG" },
    { src: "/archive/LK Bennett and Ted Baker - Signefotar.JPG" },
  ]

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl tracking-[-0.02em] font-light mb-8">
            ARCHIVE
          </h1>
          <div className="w-24 h-px bg-foreground mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A journey through our creative evolution—each show a milestone in our mission 
            to merge fashion with social consciousness and artistic innovation.
          </p>
        </div>
      </section>

      {/* Archive Grid - 3x3 */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {archiveImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-sm">
                <img
                  src={image.src}
                  alt={`Archive photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}