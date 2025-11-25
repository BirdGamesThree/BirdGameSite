import { Bird, Users, Play, Zap, Coins, Rocket, Gamepad2, Lock, Crown, Cloud, Sun, Plus, Swords, Shield, Copy, Check } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [copied, setCopied] = useState(false);
  const ca = "COMING_SOON..."; // Replace with actual CA when ready

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500 selection:text-white overflow-x-hidden bg-[#4ade80]">
      {/* Dynamic Sky-to-Ground Gradient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-sky-300 via-sky-200 to-emerald-300"></div>
      
      {/* Decorative Clouds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%] left-[40%] text-white/30 animate-float-slow delay-500">
           <Bird className="w-16 h-16 fill-current" />
        </div>
        <div className="absolute top-[15%] left-[10%] text-white/20 animate-float delay-1000">
           <Bird className="w-12 h-12 fill-current" />
        </div>
        <div className="absolute top-[25%] right-[20%] text-white/25 animate-float-slow delay-200">
           <Bird className="w-20 h-20 fill-current" />
        </div>
        <div className="absolute -top-10 right-0 text-yellow-300/80 animate-pulse-slow">
           <Sun className="w-64 h-64 fill-current" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/40 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="bg-black p-2 rounded-full border-2 border-sky-500 group-hover:scale-110 transition-transform">
                  <img src="/logo.png" alt="BirdGame Logo" className="h-8 w-8 object-contain" />
                </div>
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-800">
                BirdGame
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 hover:text-sky-600 hover:scale-105 transition-all text-sm font-bold uppercase tracking-wider">About</a>
              <a href="#birds" className="text-slate-600 hover:text-sky-600 hover:scale-105 transition-all text-sm font-bold uppercase tracking-wider">Birds</a>
              <a href="#modes" className="text-slate-600 hover:text-sky-600 hover:scale-105 transition-all text-sm font-bold uppercase tracking-wider">Modes</a>
              <a href="#tokenomics" className="text-slate-600 hover:text-sky-600 hover:scale-105 transition-all text-sm font-bold uppercase tracking-wider">Tokenomics</a>
              <a href="#roadmap" className="text-slate-600 hover:text-sky-600 hover:scale-105 transition-all text-sm font-bold uppercase tracking-wider">Roadmap</a>
              <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white px-8 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/30 border border-emerald-400/50">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 border border-sky-200 shadow-sm animate-fade-in-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-emerald-700 font-bold tracking-wide text-sm">LIVE DEVELOPMENT ON PUMPFUN</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight drop-shadow-sm">
            <span className="block text-slate-900">THE BIRD GAME</span>
            <span className="text-white text-transparent text-stroke-sm drop-shadow-[0_4px_0_rgba(0,0,0,0.2)]">IS REAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            A browser-based multiplayer battle royale built with Unity & Photon. 
            No downloads. Just open the link, join a lobby, and start pecking.
            <br/>
            <span className="text-emerald-700 font-black mt-2 block">Players fight in a 7-10 player lobby and the last one alive wins $5-10.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://pump.fun/board" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-emerald-500 rounded-full font-bold text-xl text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_10px_40px_rgba(16,185,129,0.4)] border-b-4 border-emerald-700 hover:border-emerald-600 active:border-b-0 active:translate-y-1 flex items-center gap-3">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
              <Play className="h-6 w-6 fill-current" /> 
              WATCH ME BUILD LIVE
            </a>
            
            <button className="px-8 py-4 rounded-full font-bold text-xl text-slate-700 bg-white border-b-4 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-3 shadow-lg active:border-b-0 active:translate-y-1">
              <Coins className="h-5 w-5 text-yellow-500" />
              Buy $BIRD
            </button>
          </div>

          <div className="mt-12 flex justify-center animate-fade-in-up delay-200">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-emerald-200 shadow-lg flex items-center gap-3 group hover:scale-105 transition-transform cursor-pointer" onClick={copyToClipboard}>
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <Lock className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Contract Address (CA)</p>
                <p className="text-slate-700 font-mono font-bold text-lg">{ca}</p>
              </div>
              <div className="ml-2 text-slate-400 group-hover:text-emerald-500 transition-colors text-sm font-bold flex items-center gap-1">
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                {copied ? "COPIED!" : "COPY"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Bird Game */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 drop-shadow-sm">What is Bird Game?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Born from the memes, built for reality. We're making the game everyone wanted but didn't exist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Multiplayer Chaos</h3>
              <p className="text-slate-600">
                7-15 player lobbies. Free-for-all deathmatches. Fly, peck, and survive in 5-7 minute intense rounds.
              </p>
            </div>

            <div className="bg-white/80 p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                <Gamepad2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Web Based</h3>
              <p className="text-slate-600">
                Powered by Unity WebGL & Photon. Play instantly in your browser. No downloads, no friction, pure gameplay.
              </p>
            </div>

            <div className="bg-white/80 p-8 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
                <Coins className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Play to Earn</h3>
              <p className="text-slate-600">
                Win lobbies to earn $5-10 rewards. Funded by token fees. Your skill literally pays off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bird Species Section */}
      <section id="birds" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 drop-shadow-sm">Meet the Flock</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
              Choose your fighter. Each species brings its own style to the battlefield.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bald Eagle */}
            <div className="bg-white/80 p-6 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                <img src="/assets/birds/bald-eagle.png" alt="Bald Eagle" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Bald Eagle</h3>
              <p className="text-slate-600">The apex predator of the skies. Known for devastating dive attacks and superior vision.</p>
            </div>

            {/* Barn Owl */}
            <div className="bg-white/80 p-6 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                 <img src="/assets/birds/barn-owl.png" alt="Barn Owl" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Barn Owl</h3>
              <p className="text-slate-600">Silent but deadly. Masters of stealth with enhanced hearing to track prey in the dark.</p>
            </div>

            {/* Bower Bird */}
            <div className="bg-white/80 p-6 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                 <img src="/assets/birds/bower_bird.png" alt="Bower Bird" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Bower Bird</h3>
              <p className="text-slate-600">The architect. Expert at gathering resources and building complex structures quickly.</p>
            </div>

            {/* Swan */}
            <div className="bg-white/80 p-6 rounded-3xl border border-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group backdrop-blur-md">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-slate-200 relative">
                 <img src="/assets/birds/swan.png" alt="Swan" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Swan</h3>
              <p className="text-slate-600">Graceful but aggressive. Don't let the beauty fool you; they defend their territory fiercely.</p>
            </div>

            {/* More to Come */}
            <div className="bg-white/40 p-6 rounded-3xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center hover:bg-white/60 transition-all group min-h-[400px]">
              <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plus className="h-10 w-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-500">More Species Soon</h3>
              <p className="text-slate-500 max-w-xs">We're constantly adding new birds with unique abilities to the flock.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section id="modes" className="py-24 relative bg-white/40">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Game Modes</h2>
            <p className="text-xl text-slate-600 font-medium">
              Current and future ways to play BirdGame.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free For All (Confirmed) */}
            <div className="bg-gradient-to-b from-sky-500 to-sky-600 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white border border-white/30">
                LIVE SOON
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                <Swords className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-white">Free For All</h3>
              <p className="text-sky-100 font-medium mb-6">
                The main event. 15 birds enter, one bird leaves.
              </p>
              <ul className="space-y-2 text-sky-50 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Fast 5-7 min matches
                </li>
                <li className="flex items-center gap-2">
                  <Crown className="h-4 w-4" /> Winner takes reward
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4" /> 7-15 Player Lobbies
                </li>
              </ul>
            </div>

            {/* Protect The Nest (Planned) */}
            <div className="bg-white/60 p-8 rounded-3xl border-2 border-dashed border-slate-300 relative group">
              <div className="absolute top-4 right-4 bg-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-500">
                PLANNED
              </div>
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mb-6 text-slate-400">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-500">Protect The Nest</h3>
              <p className="text-slate-500 mb-6">
                Team-based strategy. Defend your eggs from waves of enemies while gathering resources to upgrade defenses.
              </p>
            </div>

            {/* Open World (Planned) */}
            <div className="bg-white/60 p-8 rounded-3xl border-2 border-dashed border-slate-300 relative group">
              <div className="absolute top-4 right-4 bg-slate-200 px-3 py-1 rounded-full text-xs font-bold text-slate-500">
                PLANNED
              </div>
              <div className="w-16 h-16 bg-slate-200 rounded-2xl flex items-center justify-center mb-6 text-slate-400">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-500">Open World</h3>
              <p className="text-slate-500 mb-6">
                No rules, just vibes. Explore a massive map, use items like guns/knives, and interact with other players freely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/5 skew-y-3 transform origin-top-left scale-110"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">Tokenomics & Economy</h2>
            <p className="text-xl text-slate-600 font-medium">A sustainable ecosystem powered by $BIRD</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Marketing & Dev */}
            <div className="bg-white p-8 rounded-3xl border-2 border-emerald-100 shadow-xl hover:border-emerald-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Rocket className="text-emerald-500" /> Marketing & Growth
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-slate-400 mt-1 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Dev Wallet Locked:</strong> 45M tokens locked for 2 weeks to build trust and guarantee launch.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-emerald-500 mt-1 shrink-0" />
                  <span>
                    <strong className="text-slate-900">TikTok Marketing:</strong> We will pay creators per 1,000 views on game-related posts using the 45M tokens unlocking in 1.5 weeks.
                  </span>
                </li>
              </ul>
            </div>

            {/* Rewards & Flywheel */}
            <div className="bg-white p-8 rounded-3xl border-2 border-amber-100 shadow-xl hover:border-amber-300 transition-colors">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <Coins className="text-amber-500" /> The Flywheel Effect
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">
                  <Crown className="h-5 w-5 text-amber-500 mt-1 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Winner Rewards:</strong> Lobby winners earn $5-10 in crypto rewards, funded by transaction fees.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-purple-500 mt-1 shrink-0" />
                  <span>
                    <strong className="text-slate-900">Buybacks & Burns:</strong> Players can buy bird species, accessories, and items (guns/knives) using $BIRD or SOL. All $BIRD spent is burned, and all SOL revenue is used to buy back and burn $BIRD.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-center text-slate-800 mb-16">Game Plan</h2>
          
          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">1</div>
                <div className="w-1 h-full bg-emerald-200 my-2 rounded-full group-hover:bg-emerald-300 transition-colors"></div>
              </div>
              <div className="pb-12 bg-white/60 p-6 rounded-2xl flex-1 border border-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">Phase 1: The Launch (Current)</h3>
                <p className="text-slate-700 mb-4 font-medium">Core gameplay loop and initial release.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Basic Bird PvP (Free For All)</li>
                  <li>7-15 Player Lobbies</li>
                  <li>Peck Mechanics & Basic Movement</li>
                  <li>Winner Rewards Integration</li>
                </ul>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white font-bold shadow-lg shadow-sky-200">2</div>
                <div className="w-1 h-full bg-sky-200 my-2 rounded-full group-hover:bg-sky-300 transition-colors"></div>
              </div>
              <div className="pb-12 bg-white/60 p-6 rounded-2xl flex-1 border border-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-sky-600 mb-2">Phase 2: Expansion</h3>
                <p className="text-slate-700 mb-4 font-medium">New modes and deeper mechanics.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>"Protect Your Nest" Team Mode</li>
                  <li>Resource Collection (Sticks/Eggs)</li>
                  <li>Different Bird Species & Stats</li>
                  <li>Web3 Wallet Integration</li>
                </ul>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-200">3</div>
              </div>
              <div className="bg-white/60 p-6 rounded-2xl flex-1 border border-white shadow-sm hover:shadow-md transition-all">
                <h3 className="text-2xl font-bold text-amber-600 mb-2">Phase 3: Open World</h3>
                <p className="text-slate-700 mb-4 font-medium">The ultimate bird sandbox.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                  <li>Open World PvP Zone (GTA Style)</li>
                  <li>Item Shop (Guns, Knives, Skins)</li>
                  <li>Full Economic Flywheel (Buybacks)</li>
                  <li>Persistent User Stats & Inventory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-black p-2 rounded-full">
                <img src="/logo.png" alt="BirdGame Logo" className="h-6 w-6 object-contain" />
              </div>
              <span className="font-bold text-xl text-white">BirdGame</span>
            </div>
            <div className="text-emerald-400/60 text-sm font-medium">
              © 2025 BirdGame. built live on stream.
            </div>
            <div className="flex gap-6">
              <a href="https://x.com/BirdGameSOL" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition-colors font-semibold">Twitter</a>
              <a href="https://x.com/BirdGameSOL" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition-colors font-semibold">Community</a>
              <a href="https://github.com/BirdGamesThree" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-white transition-colors font-semibold">Github</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;