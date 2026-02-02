import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIkspi from "@/assets/logo-ikspi.png";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function MusicPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has already made a choice this session
    const musicChoice = sessionStorage.getItem("musicChoice");
    if (!musicChoice) {
      // Show prompt after a short delay for better UX
      const timer = setTimeout(() => setShowPrompt(true), 1000);
      return () => clearTimeout(timer);
    } else if (musicChoice === "play") {
      loadYouTubeAPI();
    }
  }, []);

  const loadYouTubeAPI = () => {
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };
  };

  const initializePlayer = () => {
    if (!containerRef.current) return;
    
    playerRef.current = new window.YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId: "bT9pQJCdX1w",
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: "bT9pQJCdX1w",
        controls: 0,
        showinfo: 0,
        modestbranding: 1,
        fs: 0,
        iv_load_policy: 3,
      },
      events: {
        onReady: (event: any) => {
          setPlayerReady(true);
          event.target.setVolume(30);
          event.target.playVideo();
          setIsPlaying(true);
        },
        onStateChange: (event: any) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.playVideo();
          }
        },
      },
    });
  };

  const handleAccept = () => {
    sessionStorage.setItem("musicChoice", "play");
    setShowPrompt(false);
    loadYouTubeAPI();
  };

  const handleDecline = () => {
    sessionStorage.setItem("musicChoice", "skip");
    setShowPrompt(false);
  };

  const toggleMusic = () => {
    if (!playerRef.current) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube Player Container */}
      <div ref={containerRef} className="hidden">
        <div id="youtube-player" />
      </div>

      {/* Initial Prompt Modal */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-card border border-gold/30 rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
            >
              {/* Logo */}
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <img 
                  src={logoIkspi} 
                  alt="Logo IKS PI Kera Sakti" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-2xl font-bold text-gold mb-2"
              >
                Selamat Datang
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-foreground font-semibold mb-1"
              >
                IKS PI Kera Sakti
              </motion.p>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-sm mb-6"
              >
                Pengurus Daerah Sumatera Selatan
              </motion.p>

              {/* Music Icon Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-crimson flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Music className="w-8 h-8 text-foreground" />
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-muted-foreground mb-8"
              >
                Apakah Anda ingin memutar musik latar saat menjelajahi website ini?
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4 justify-center"
              >
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  className="border-muted-foreground/30 hover:bg-muted/20 px-6"
                >
                  Tidak, Terima Kasih
                </Button>
                <Button
                  onClick={handleAccept}
                  className="bg-gradient-crimson hover:opacity-90 px-6 text-foreground font-semibold"
                >
                  <Volume2 className="w-4 h-4 mr-2" />
                  Ya, Putar Musik
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Music Control Button */}
      <AnimatePresence>
        {playerReady && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-crimson shadow-lg flex items-center justify-center border border-gold/30 hover:border-gold/60 transition-colors"
            aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
          >
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.div
                  key="playing"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  className="flex items-center justify-center"
                >
                  <Volume2 className="w-5 h-5 text-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="muted"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  className="flex items-center justify-center"
                >
                  <VolumeX className="w-5 h-5 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
