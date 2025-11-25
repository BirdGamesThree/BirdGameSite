import { Bird, Swords, Shield, Crown, Users, Play, Zap, Skull, Target } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity rounded-full"></div>
                <div className="relative bg-slate-900 border border-sky-500/50 p-2 rounded-full group-hover:border-sky-400 transition-colors">
                  <Bird className="h-6 w-6 text-sky-400" />
                </div>
              </div>
              <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
                BirdGame
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#gameplay" className="text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all text-sm font-semibold uppercase tracking-wider">Gameplay</a>
              <a href="#features" className="text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all text-sm font-semibold uppercase tracking-wider">Features</a>
              <a href="#community" className="text-slate-300 hover:text-white hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all text-sm font-semibold uppercase tracking-wider">Community</a>
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white px-8 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] border border-white/10">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
            <span className="text-sky-400 font-semibold tracking-wide text-sm">PRE-ALPHA LIVE NOW</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
            <span className="block text-white drop-shadow-2xl">PECK OR BE</span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">PECKED</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dive into the most chaotic avian battle royale ever created. 
            <span className="text-white font-semibold"> 15 Birds</span> enter, 
            only <span className="text-sky-400 font-bold">ONE</span> leaves the nest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-sky-500 rounded-full font-bold text-xl text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <span className="relative flex items-center gap-3">
                <Play className="h-6 w-6 fill-current" /> 
                PLAY FREE
              </span>
            </button>
            
            <button className="px-8 py-4 rounded-full font-bold text-xl text-white border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all flex items-center gap-3 backdrop-blur-sm">
              <Users className="h-5 w-5" />
              Join Discord
            </button>
          </div>
        </div>

        {/* Floating Cards Effect */}
        <div className="absolute top-1/2 left-10 hidden lg:block animate-float-slow opacity-20 pointer-events-none">
          <Swords className="w-32 h-32 rotate-[-15deg]" />
        </div>
        <div className="absolute top-1/3 right-10 hidden lg:block animate-float opacity-20 pointer-events-none">
          <Crown className="w-24 h-24 rotate-[15deg] text-yellow-400" />
        </div>
      </section>

      {/* Gameplay Stats Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast-Paced Action", desc: "Matches last 5 minutes. Constant chaos. No camping allowed.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
              { icon: Skull, title: "Brutal Finishers", desc: "Use environmental hazards and items to eliminate rivals.", color: "text-red-400", bg: "bg-red-400/10" },
              { icon: Target, title: "Skill-Based", desc: "No pay-to-win. Just pure pecking skill and movement mastery.", color: "text-emerald-400", bg: "bg-emerald-400/10" }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 backdrop-blur-sm">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-slate-900/80 border border-white/10 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 text-purple-400 font-bold tracking-wider text-sm uppercase">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                  In Development
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Nest</span>
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  A strategic team mode is coming soon. Defend your eggs from waves of enemies while coordinating attacks on rival nests. 
                  Requires teamwork, strategy, and sharp beaks.
                </p>
                <ul className="space-y-4">
                  {[
                    "Team-based 5v5 combat",
                    "Base building mechanics",
                    "Exclusive cosmetic rewards"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <Shield className="h-5 w-5 text-purple-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 relative">
                <div className="aspect-video rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-purple-500/30 transition-colors">
                   {/* Placeholder for game preview */}
                   <div className="text-center p-8">
                     <Swords className="h-16 w-16 mx-auto text-slate-700 mb-4 group-hover:text-purple-500 transition-colors duration-500" />
                     <p className="text-slate-600 font-mono text-sm">GAMEPLAY_PREVIEW_ALPHA.MP4</p>
                   </div>
                   
                   {/* Glow effect behind */}
                   <div className="absolute -inset-4 bg-purple-500/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Bird className="h-6 w-6 text-sky-500" />
              <span className="font-bold text-xl text-white">BirdGame</span>
            </div>
            <div className="text-slate-500 text-sm">
              © 2025 BirdGame. built live on stream.
            </div>
            <div className="flex gap-6">
              <a href="https://x.com/BirdGameSOL" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">Twitter</a>
              <a href="https://x.com/BirdGameSOL" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 transition-colors">Community</a>
              <a href="https://github.com/BirdGamesThree" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">Github</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;