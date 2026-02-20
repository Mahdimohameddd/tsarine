import heroImage from "@/assets/hero-salon.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tsarine luxury salon interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="text-primary-foreground/80 tracking-[0.4em] uppercase text-xs font-body mb-6 animate-fade-in-up">
          Onglerie · Soins du visage · Pack Regard & Bridal
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-primary-foreground font-medium leading-tight animate-fade-in-up-delay-1">
          Tsarine
        </h1>
        <p className="font-display text-lg md:text-xl text-primary-foreground/90 mt-4 italic animate-fade-in-up-delay-2">
          L'empreinte de l'Excellence Russe à Alger
        </p>
        <a
          href="https://wa.me/213558231984"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 px-8 py-3 border border-primary-foreground/60 text-primary-foreground text-sm tracking-[0.2em] uppercase font-body hover:bg-primary-foreground hover:text-foreground transition-all duration-500 animate-fade-in-up-delay-3"
        >
          Réserver
        </a>
      </div>
    </section>
  );
};

export default Hero;
