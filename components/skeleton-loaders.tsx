"use client"

import type React from "react"

import { motion } from "framer-motion"

export function SkeletonCard({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-white/10 backdrop-blur-md border-white/20 rounded-lg p-6 ${className}`}
    >
      <div className="animate-pulse">
        <div className="h-4 bg-white/20 rounded w-3/4 mb-4"></div>
        <div className="h-3 bg-white/15 rounded w-full mb-2"></div>
        <div className="h-3 bg-white/15 rounded w-2/3 mb-4"></div>
        <div className="flex space-x-2">
          <div className="h-6 bg-white/20 rounded-full w-16"></div>
          <div className="h-6 bg-white/20 rounded-full w-20"></div>
          <div className="h-6 bg-white/20 rounded-full w-14"></div>
        </div>
      </div>
    </motion.div>
  )
}

export function SkeletonSkill() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg p-6"
    >
      <div className="animate-pulse text-center">
        <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-4"></div>
        <div className="h-4 bg-white/20 rounded w-16 mx-auto"></div>
      </div>
    </motion.div>
  )
}

export function SkeletonAchievement() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg p-8"
    >
      <div className="animate-pulse flex items-start space-x-6">
        <div className="w-16 h-16 bg-white/20 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="h-5 bg-white/20 rounded w-48"></div>
            <div className="h-4 bg-white/15 rounded w-12"></div>
          </div>
          <div className="h-4 bg-white/15 rounded w-full"></div>
        </div>
      </div>
    </motion.div>
  )
}

export function SkeletonHero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20"></div>
            <div className="h-16 bg-white/20 rounded w-96 mx-auto mb-6"></div>
            <div className="h-6 bg-white/15 rounded w-80 mx-auto mb-2"></div>
            <div className="h-6 bg-white/15 rounded w-64 mx-auto mb-8"></div>
            <div className="flex justify-center space-x-4 mb-12">
              <div className="h-12 bg-white/20 rounded-full w-32"></div>
              <div className="h-12 bg-white/20 rounded-full w-40"></div>
            </div>
            <div className="flex justify-center space-x-6">
              <div className="w-6 h-6 bg-white/20 rounded"></div>
              <div className="w-6 h-6 bg-white/20 rounded"></div>
              <div className="w-6 h-6 bg-white/20 rounded"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
      />
    </div>
  )
}

export function SectionLoader({ title }: { title: string }) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-white/20 rounded w-64 mx-auto mb-16"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-white/10 rounded-lg"></div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
