export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-accent font-mono text-sm tracking-widest mb-4">ABOUT US</div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Trusted Partners in Financial Success
            </h2>
            <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
              Founded in 2007, Akande Olufemi & Co has established itself as one of the region's leading accounting firms. Our commitment to excellence and client success has made us the trusted advisor for successful businesses and high-net-worth individuals.
            </p>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              We combine traditional accounting excellence with modern financial strategy, delivering comprehensive solutions that drive growth and optimize outcomes.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Expert Team</div>
                  <p className="text-foreground/60 text-sm">CPAs with extensive industry experience</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Strategic Approach</div>
                  <p className="text-foreground/60 text-sm">Beyond compliance to proactive financial planning</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-foreground">Client First</div>
                  <p className="text-foreground/60 text-sm">Personalized attention and dedicated support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg transform rotate-3 scale-105" />
            <div className="relative bg-background/50 backdrop-blur p-8 md:p-12 rounded-lg border border-accent/20">
              <div className="font-mono text-xs text-accent mb-4 uppercase tracking-widest">Our Philosophy</div>
              <p className="text-foreground text-lg font-heading font-bold mb-6">
                &ldquo;True financial success is built on transparency, expertise, and genuine partnership.&rdquo;
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We believe in taking time to understand each client's unique situation, goals, and challenges. This allows us to provide tailored solutions that create real value and lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
