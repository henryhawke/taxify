import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Logo3D() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="relative flex h-48 w-48 items-center justify-center"
        initial={{ y: 0, rotate: 0 }}
        animate={{
          y: [-5, 5, -5],
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Ambient glow effects */}
        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-indigo-500/20 blur-3xl" />

        {/* Glass card */}
        <div className="relative overflow-hidden rounded-2xl p-8">
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl dark:from-gray-800/40 dark:to-gray-900/20" />

          {/* Reflective border */}
          <div className="absolute inset-0 rounded-2xl  dark:border-white/10" />

          {/* Logo */}
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Taxfy Logo"
              width={700}
              height={700}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>

        {/* Accent lights */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl" />
      </motion.div>
    </div>
  )
}
