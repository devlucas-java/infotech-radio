import { Headphones, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";


export const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg transition-all duration-300 ${isVisible ? 'w-64' : 'w-12'}`}>
        <div className="flex items-center p-3">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center justify-center w-6 h-6 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
          >
            <Headphones size={14} />
          </button>
          
          {isVisible && (
            <div className="flex items-center space-x-2 ml-3 animate-fade-in">
              <button
                onClick={togglePlay}
                className="flex items-center justify-center w-8 h-8 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              
              <button
                onClick={toggleMute}
                className="flex items-center justify-center w-8 h-8 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              
              <div className="flex-1 text-xs">
                <div className="font-semibold">Rádio Info-Tech</div>
                <div className="text-red-200">Online 24/7</div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <audio
        ref={audioRef}
        src="https://uk23freenew.listen2myradio.com/live.mp3?typeportmount=s1_10484_stream_373368510"
        preload="none"
      />
    </div>
  );
};
