import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section id="video" className="py-20 bg-forest-dark text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            La déforestation en chiffres
            <br />
            <span className="text-primary/80">Un aperçu alarmant de la situation</span>
          </h2>
          <p className="text-lg text-white/80">
            En 30 secondes, découvrez l'impact de nos choix de consommation sur les forêts mondiales.
          </p>
        </div>

        <div className="max-w-[400px] mx-auto relative rounded-xl overflow-hidden shadow-2xl group">
          <div className="aspect-[9/16] relative">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              poster="/placeholder.svg"
              playsInline
            >
              <source src="/src/video/video.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
            
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 cursor-pointer group-[:not(.playing)]:opacity-100 group-[.playing]:opacity-0"
              onClick={() => {
                const video = document.querySelector('video');
                const container = document.querySelector('.group');
                if (video && container) {
                  if (video.paused) {
                    video.play();
                    container.classList.add('playing');
                  } else {
                    video.pause();
                    container.classList.remove('playing');
                  }
                }
              }}
            >
              <Play className="h-16 w-16 text-white transform transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}