export default function Background() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#09090f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.35),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.3),transparent_50%)]" />
      <div className="absolute -left-32 top-20 h-72 w-72 animate-blob rounded-full bg-accent/25 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 animate-blob rounded-full bg-neon/25 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-64 w-64 animate-blob rounded-full bg-magenta/10 blur-3xl" style={{ animationDelay: '-4s' }} />
      <div className="absolute right-1/4 top-1/4 h-56 w-56 animate-blob rounded-full bg-brand-600/20 blur-3xl" style={{ animationDelay: '-8s' }} />
    </div>
  )
}
