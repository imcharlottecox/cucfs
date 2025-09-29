export function ArchivePage() {
  // Load 9 photos from public/ine
  const archiveImages = [
    { src: "/ine/DSC10007.jpg" },
    { src: "/ine/DSC09884.jpg" },
    { src: "/ine/DSC09752.jpg" },
    { src: "/ine/DSC02122.jpg" },
    { src: "/ine/DSC02117.jpg" },
    { src: "/ine/DSC01752.jpg" },
    { src: "/ine/Burnt Soul - Signefotar.JPG" },
    { src: "/ine/Hannah Inskip - Signefotar.JPG" },
    { src: "/ine/Janet Sartor - Signefotar.JPG" },
    { src: "/ine/LK Bennett - Signefotar.JPG" },
    { src: "/ine/LK Bennett and Ted Baker - Signefotar.JPG" },  
    { src: "/ine/IMG_2236.JPG" },
    { src: "/ine/IMG_2307.JPG" },
    { src: "/ine/IMG_2320.JPG" },
    { src: "/ine/IMG_2433.JPG" },
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
            A journey through our creative evolution.
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