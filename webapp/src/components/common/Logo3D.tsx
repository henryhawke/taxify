import { motion } from 'framer-motion'

export default function Logo3D() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="relative w-48 h-48 flex items-center justify-center"
        initial={{ y: 0, rotate: 0 }}
        animate={{ 
          y: [-5, 5, -5],
          rotate: [-1, 1, -1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 blur-3xl" />
        
        {/* Glass card */}
        <div className="relative p-8 rounded-2xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 dark:from-gray-800/40 dark:to-gray-900/20 backdrop-blur-xl" />
          
          {/* Reflective border */}
          <div className="absolute inset-0 border border-white/50 dark:border-white/10 rounded-2xl" />
          
          {/* Logo */}
          <div className="relative">
            <img
              src="/images/logo/TaxfyLogoSquare.svg"
              alt="Taxfy Logo"
              className="w-32 h-32 object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Accent lights */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
      </motion.div>
    </div>
  )
} 