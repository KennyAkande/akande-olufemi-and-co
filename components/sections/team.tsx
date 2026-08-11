import Image from 'next/image'

const team = [
  {
    name: 'Akande Olufemi',
    title: 'Founder & Chief Accounting Officer',
    credentials: 'FCA AAT BSC',
    specialty: 'Corporate Tax Strategy',
    image: '/akande.png',
  },
  {
    name: 'Ogedengbe Blessing',
    title: 'Managing Partner',
    credentials: 'FCA ACA AAT BSC',
    specialty: 'Financial Planning & Advisory',
    image: '/blessing.png',
  },
  {
    name: 'Ogunyooye Dupe',
    title: 'Partner, Tax Services',
    credentials: 'FCA ACT MBA HND',
    specialty: 'Complex Tax Planning',
    image: '/funke2.png',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-accent font-mono text-sm tracking-widest mb-4 inline-block">OUR TEAM</div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Partners
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Experienced professionals dedicated to your financial success with decades of combined expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="relative mb-6 overflow-hidden rounded-lg aspect-square bg-card border border-accent/10 group-hover:border-accent/30 transition-colors">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="border-b border-accent/20 pb-4 mb-4">
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-mono text-sm font-semibold">{member.credentials}</p>
              </div>

              <p className="text-foreground/70 text-sm mb-3">{member.title}</p>

              <div className="space-y-2">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Specialty</div>
                <p className="text-foreground/80">{member.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border border-accent/20 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-foreground/60">Years Combined Experience</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-secondary mb-2">100%</div>
              <p className="text-sm text-foreground/60">FCAs & Credentialed</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-accent mb-2">30+</div>
              <p className="text-sm text-foreground/60">Professional Designations</p>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm text-foreground/60">Client Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
