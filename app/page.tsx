"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ExternalLink,
  Code,
  Database,
  Brain,
  Cpu,
  Award,
  GraduationCap,
  Briefcase,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingProvider, useLoading } from "../hooks/use-loading"
import {
  SkeletonCard,
  SkeletonSkill,
  SkeletonAchievement,
  SkeletonHero,
  PageTransition,
  SectionLoader,
} from "../components/skeleton-loaders"
import {
  PageLoader,
  SectionTransition,
  StaggerContainer,
  StaggerItem,
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  ScaleIn,
} from "../components/page-transitions"
import { AnimatePresence } from "framer-motion"
// Add import
import { ScrollProgress } from "../components/progress-indicator"
import { ContactForm } from "../components/contact-form"

function PortfolioContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    about: false,
    skills: false,
    projects: false,
    achievements: false,
    certifications: false,
    contact: false,
  })
  const { scrollYProgress } = useScroll()
  const { isLoading } = useLoading()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "achievements", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: "Python", icon: Code, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: Code, color: "from-yellow-500 to-yellow-600" },
    { name: "React", icon: Code, color: "from-cyan-500 to-cyan-600" },
    { name: "Java", icon: Code, color: "from-red-500 to-red-600" },
    { name: "SQL", icon: Database, color: "from-green-500 to-green-600" },
    { name: "Machine Learning", icon: Brain, color: "from-purple-500 to-purple-600" },
    { name: "FastAPI", icon: Cpu, color: "from-teal-500 to-teal-600" },
    { name: "Node.js", icon: Cpu, color: "from-green-600 to-green-700" },
    { name: "C/C++", icon: Code, color: "from-gray-600 to-gray-700" },
    { name: "R", icon: Code, color: "from-blue-600 to-blue-700" },
    { name: "HTML/CSS", icon: Code, color: "from-orange-500 to-orange-600" },
    { name: "Git & GitHub", icon: Github, color: "from-gray-700 to-gray-800" },
  ]

  const projects = [
    {
      title: "AI-Powered Document Validation System",
      description: "End-to-end document compliance validation system for GST and Trademark services using AI and LLMs.",
      tech: ["Python", "FastAPI", "Streamlit", "OpenAI API", "Elasticsearch"],
      link: "#",
      github: "https://github.com/Hemesh11/ai-doc-validation",
      deploy: "https://ai-doc-validation.example.com",
      type: "Professional",
    },
    {
      title: "Diabetes Mellitus Prediction",
      description:
        "Machine learning model to predict diabetes with 99% accuracy using various algorithms and data preprocessing.",
      tech: ["Python", "NumPy", "Kaggle", "Machine Learning"],
      link: "#",
      github: "https://github.com/Hemesh11/diabetes-prediction",
      deploy: "https://diabetes-prediction.example.com",
      type: "Academic",
    },
    {
      title: "IoT Accident Prevention System",
      description:
        "Smart system using ESP32 with sensors to detect vehicles and manage traffic lights at blind curves.",
      tech: ["ESP32", "Firebase", "Blynk", "IoT Sensors"],
      link: "#",
      github: "https://github.com/Hemesh11/iot-accident-prevention",
      deploy: "https://iot-accident-prevention.example.com",
      type: "Innovation",
    },
    {
      title: "Plagiarism Detection Web App",
      description:
        "Web application that detects text similarity between PDF files using cosine similarity with visualization.",
      tech: ["Python", "Flask", "HTML/CSS", "Matplotlib"],
      link: "#",
      github: "https://github.com/Hemesh11/plagiarism-detector",
      deploy: "https://plagiarism-detector.example.com",
      type: "Web Development",
    },
    {
      title: "AI Powered Document Validation System",
      description: "Designed and developed an end-to-end document compliance validation system for GST/TM services using Python, FastAPI, and Streamlit. Built AI-powered extraction modules with OpenAI LLMs, implemented rule-based compliance checks, clarity scoring, signature/notary verification, Aadhar-PAN linkage, and dynamic config with Elasticsearch. Developed a user-friendly web interface for document upload and real-time validation feedback.",
      tech: ["Python", "FastAPI", "Streamlit", "OpenAI API", "Elasticsearch"],
      link: "#",
      github: "https://github.com/Hemesh11/internship-doc-validation",
      deploy: "https://internship-doc-validation.example.com",
      type: "Internship",
    },
  ]

  const achievements = [
    {
      title: "1st Rank Merit Scholarship - 3rd Year",
      description: "Achieved top position in B.Tech. CSE-IoT at VIT University",
      year: "2025",
      icon: Award,
    },
    {
      title: "1st Rank Merit Scholarship - 2nd Year",
      description: "Secured top position in B.Tech. CSE-IoT at VIT University",
      year: "2024",
      icon: Award,
    },
    {
      title: "10th Rank Merit Scholarship - 1st Year",
      description: "Academic excellence in B.Tech. CSE-IoT at VIT University",
      year: "2023",
      icon: Award,
    },
    // {
    //   title: "AWS Certified Cloud Practitioner",
    //   description: "Professional certification in cloud computing",
    //   year: "2024",
    //   icon: GraduationCap,
    // },
  ]

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      // year: "2024",
      icon: Award,
      link: "https://www.credly.com/badges/db2ef725-1ccd-44db-8a95-4ce91eec592e/public_url",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      // year: "2024",
      icon: Brain,
      link: "https://coursera.org/share/acd719beaf83901b9a7f9e458efea505",
      description: "Comprehensive course covering supervised learning, advanced algorithms, and unsupervised learning",
    },
    {
      title: "Supervised Machine Learning",
      issuer: "Stanford University & DeepLearning.AI",
      // year: "2024",
      icon: Code,
      link: "https://coursera.org/share/d90c7925430bd9b0119d185e6243aff3",
      description: "Regression and Classification techniques with practical implementations",
    },
    {
      title: "Advanced Learning Algorithms",
      issuer: "Stanford University & DeepLearning.AI",
      // year: "2024",
      icon: Cpu,
      link: "https://coursera.org/share/2a746e52bd569b53ea0eeb5065fe95c0",
      description: "Neural networks, decision trees, and ensemble methods",
    },
    {
      title: "Unsupervised Learning & Recommenders",
      issuer: "Stanford University & DeepLearning.AI",
      // year: "2024",
      icon: Database,
      link: "https://coursera.org/share/40ef12ff40813c7f92995566539a0560",
      description: "Clustering, dimensionality reduction, and reinforcement learning",
    },
    {
      title: "Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
      // year: "2024",
      icon: Brain,
      link: "https://learn.deeplearning.ai/accomplishments/165b77d1-4c93-4358-8ad3-43fb05cd3f87?usp=sharing",
      description: "Best practices for designing and optimizing prompts for LLMs",
    },
  ]

  useEffect(() => {
    // Simulate section loading
    const loadSections = async () => {
      const sections = ["hero", "about", "skills", "projects", "achievements", "certifications", "contact"]
      for (let i = 0; i < sections.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 300))
        setSectionsLoaded((prev) => ({ ...prev, [sections[i]]: true }))
      }
    }

    if (!isLoading) {
      loadSections()
    }
  }, [isLoading])

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <AnimatePresence mode="wait">
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Add component right after the opening div of the main container */}
          <ScrollProgress />
          {/* Animated Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <motion.div
              style={{ y }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
            />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5" />
          </div>

          {/* Header */}
          <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                >
                  Hemesh R
                </motion.h1>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {["about", "skills", "projects", "achievements", "certifications", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize transition-all duration-300 ${
                        activeSection === item ? "text-blue-400 font-semibold" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile Navigation */}
              {isMenuOpen && (
                <motion.nav
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:hidden mt-4 pb-4 space-y-2"
                >
                  {["about", "skills", "projects", "achievements", "certifications", "contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left capitalize text-white/80 hover:text-white py-2"
                    >
                      {item}
                    </button>
                  ))}
                </motion.nav>
              )}
            </div>
          </header>

          {/* Enhanced Hero Section with loading */}
          <section className="min-h-screen flex items-center justify-center relative pt-20">
            {!sectionsLoaded.hero ? (
              <SkeletonHero />
            ) : (
              <SectionTransition>
                <div className="container mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="mb-8">
                      <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                        <img
                          src="/images/hemesh-profile.jpg"
                          alt="Hemesh R - Professional Photo"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                        Hemesh R
                      </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                      Final Year Computer Science Student specializing in IoT
                      <br />
                      <span className="text-blue-400">Data Science & AI Enthusiast</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                      <Button
                        onClick={() => scrollToSection("projects")}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        View My Work
                      </Button>
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold bg-transparent"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = "/resume/Hemesh_R_Resume.pdf"
                          link.download = "Hemesh_R_Resume.pdf"
                          link.click()
                        }}
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                      </Button>
                    </div>

                    <div className="flex justify-center space-x-6">
                      <a
                        href="https://github.com/Hemesh11"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href="https://linkedin.com/in/hemesh-r"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href="mailto:hemesh2005r@gmail.com"
                        className="text-white/60 hover:text-white transition-colors"
                      >
                        <Mail size={24} />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </SectionTransition>
            )}
          </section>

          {/* Enhanced About Section */}
          <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
              {!sectionsLoaded.about ? (
                <SectionLoader title="About Me" />
              ) : (
                <SectionTransition>
                  <FadeInUp className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <SlideInLeft>
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
                          <CardContent className="p-0">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                              <GraduationCap className="mr-3 text-blue-400" />
                              Education
                            </h3>
                            <div className="space-y-4 text-white/80">
                              <div>
                                <h4 className="font-semibold text-white">Vellore Institute of Technology</h4>
                                <p>B.Tech Computer Science - IoT Specialization</p>
                                <p className="text-blue-400">CGPA: 9.63 | 2022 - 2026</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">Sri Chaitanya Jr. College</h4>
                                <p>Higher Secondary Education</p>
                                <p className="text-blue-400">Aggregate: 97.8% | 2020 - 2022</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">Sri Chaitanya Techno School</h4>
                                <p>Senior Secondary Education, Chittoor, Andhra Pradesh</p>
                                <p className="text-blue-400">Aggregate: 96.67% | 2020</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </SlideInLeft>

                      <SlideInRight>
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8">
                          <CardContent className="p-0">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                              <Briefcase className="mr-3 text-purple-400" />
                              Experience
                            </h3>
                            <div className="text-white/80">
                              <h4 className="font-semibold text-white">Data Science & AI Intern</h4>
                              <p className="text-purple-400 mb-2">ZOLVIT (formerly VAKILSEARCH)</p>
                              <p className="text-sm mb-3">May 2025 - July 2025</p>
                              <p className="text-sm leading-relaxed">
                                Designed and developed an end-to-end document compliance validation system for GST/TM services using Python, FastAPI, and Streamlit.
                                Built AI-powered extraction modules with OpenAI LLMs for unstructured documents.
                                Implemented rule-based compliance checks, clarity scoring, signature/notary verification, Aadhar-PAN linkage, and dynamic config with Elasticsearch.<br />
                                Developed a user-friendly web interface for document upload and real-time validation feedback.
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </SlideInRight>
                    </div>

                    <ScaleIn>
                      <Card className="bg-white/10 backdrop-blur-md border-white/20 p-8 mt-8">
                        <CardContent className="p-0 text-center">
                          <p className="text-lg text-white/90 leading-relaxed">
                            I'm a passionate final-year Computer Science student with a specialization in IoT, currently
                            maintaining a stellar 9.63 CGPA at VIT. My journey in technology spans from machine learning
                            and AI development to IoT systems and web applications. I thrive on solving complex problems
                            and building innovative solutions that make a real impact.
                          </p>
                        </CardContent>
                      </Card>
                    </ScaleIn>
                  </FadeInUp>
                </SectionTransition>
              )}
            </div>
          </section>

          {/* Enhanced Skills Section */}
          <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4">
              {!sectionsLoaded.skills ? (
                <div className="py-20">
                  <div className="animate-pulse text-center mb-16">
                    <div className="h-12 bg-white/20 rounded w-64 mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[...Array(12)].map((_, i) => (
                      <SkeletonSkill key={i} />
                    ))}
                  </div>
                </div>
              ) : (
                <SectionTransition>
                  <FadeInUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Technical Skills
                    </h2>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                      {skills.map((skill, index) => (
                        <StaggerItem key={skill.name}>
                          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} className="group">
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                              <CardContent className="p-6 text-center">
                                <div
                                  className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                >
                                  <skill.icon className="text-white" size={24} />
                                </div>
                                <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                                  {skill.name}
                                </h3>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </FadeInUp>
                </SectionTransition>
              )}
            </div>
          </section>

          {/* Enhanced Projects Section */}
          <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
              {!sectionsLoaded.projects ? (
                <div className="py-20">
                  <div className="animate-pulse text-center mb-16">
                    <div className="h-12 bg-white/20 rounded w-64 mx-auto"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[...Array(4)].map((_, i) => (
                      <SkeletonCard key={i} className="h-80" />
                    ))}
                  </div>
                </div>
              ) : (
                <SectionTransition>
                  <FadeInUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Featured Projects
                    </h2>

                    <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {projects.map((project, index) => (
                        <StaggerItem key={project.title}>
                          <motion.div
                            whileHover={{ y: -10, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group h-full"
                          >
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                              <CardContent className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30">
                                    {project.type}
                                  </span>
                                  <div className="flex gap-2">
                                    <a
                                      href={project.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-2 py-1 bg-white/20 rounded text-xs text-white/80 border border-white/30 hover:bg-blue-500/30 transition-colors flex items-center gap-1"
                                    >
                                      <Github size={14} /> GitHub
                                    </a>
                                    <a
                                      href={project.deploy}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-2 py-1 bg-white/20 rounded text-xs text-white/80 border border-white/30 hover:bg-purple-500/30 transition-colors flex items-center gap-1"
                                    >
                                      <ExternalLink size={14} /> Live
                                    </a>
                                  </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                  {project.title}
                                </h3>

                                <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                  {project.tech.map((tech) => (
                                    <span
                                      key={tech}
                                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90 border border-white/20"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </FadeInUp>
                </SectionTransition>
              )}
            </div>
          </section>

          {/* Enhanced Achievements Section */}
          <section id="achievements" className="py-20 relative">
            <div className="container mx-auto px-4">
              {!sectionsLoaded.achievements ? (
                <div className="py-20">
                  <div className="animate-pulse text-center mb-16">
                    <div className="h-12 bg-white/20 rounded w-64 mx-auto"></div>
                  </div>
                  <div className="max-w-4xl mx-auto space-y-8">
                    {[...Array(4)].map((_, i) => (
                      <SkeletonAchievement key={i} />
                    ))}
                  </div>
                </div>
              ) : (
                <SectionTransition>
                  <FadeInUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Achievements
                    </h2>

                    <StaggerContainer className="max-w-4xl mx-auto space-y-8">
                      {achievements.map((achievement, index) => (
                        <StaggerItem key={achievement.title}>
                          <motion.div whileHover={{ scale: 1.02, x: 10 }} className="relative">
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                              <CardContent className="p-8">
                                <div className="flex items-start space-x-6">
                                  <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                                      <achievement.icon className="text-white" size={28} />
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                                      <span className="text-blue-400 font-semibold">{achievement.year}</span>
                                    </div>
                                    <p className="text-white/80">{achievement.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </FadeInUp>
                </SectionTransition>
              )}
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-4">
              {!sectionsLoaded.certifications ? (
                <div className="py-20">
                  <div className="animate-pulse text-center mb-16">
                    <div className="h-12 bg-white/20 rounded w-64 mx-auto"></div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[...Array(6)].map((_, i) => (
                      <SkeletonCard key={i} className="h-64" />
                    ))}
                  </div>
                </div>
              ) : (
                <SectionTransition>
                  <FadeInUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Certifications
                    </h2>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                      {certifications.map((cert, index) => (
                        <StaggerItem key={cert.title}>
                          <motion.div
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group h-full"
                          >
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                              <CardContent className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                    <cert.icon className="text-white" size={24} />
                                  </div>
                                  {/* <span className="text-green-400 font-semibold text-sm">{cert.year}</span> */}
                                </div>

                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                                  {cert.title}
                                </h3>

                                <p className="text-green-400 text-sm font-medium mb-3">{cert.issuer}</p>

                                <p className="text-white/80 text-sm leading-relaxed mb-4">{cert.description}</p>

                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full border-green-500/30 text-green-300 hover:bg-green-500/10 bg-transparent"
                                  onClick={() => window.open(cert.link, "_blank")}
                                >
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  View Certificate
                                </Button>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </FadeInUp>
                </SectionTransition>
              )}
            </div>
          </section>

          {/* Enhanced Contact Section */}
          <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4">
              {!sectionsLoaded.contact ? (
                <SectionLoader title="Contact Me" />
              ) : (
                <SectionTransition>
                  <FadeInUp>
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      Get In Touch
                    </h2>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                      <SlideInLeft>
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-white/80 mb-8 leading-relaxed">
                          I'm always open to discussing new opportunities, innovative projects, or just having a chat
                          about technology. Feel free to reach out!
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <Mail className="text-white" size={20} />
                            </div>
                            <div>
                              <p className="text-white font-semibold">Email</p>
                              <p className="text-white/80">hemesh2005r@gmail.com</p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                              <Phone className="text-white" size={20} />
                            </div>
                            <div>
                              <p className="text-white font-semibold">Phone</p>
                              <p className="text-white/80">+91 91107 89962</p>
                            </div>
                          </div>
                        </div>
                      </SlideInLeft>

                      <SlideInRight>
                        <ContactForm />
                      </SlideInRight>
                    </div>
                  </FadeInUp>
                </SectionTransition>
              )}
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-white/20 backdrop-blur-md">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-white/80">© 2025 Hemesh R. All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                  <a
                    href="https://github.com/Hemesh11"
                    className="text-white/60 hover:text-white transition-colors transform hover:scale-110"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/hemesh-r"
                    className="text-white/60 hover:text-white transition-colors transform hover:scale-110"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:hemesh2005r@gmail.com"
                    className="text-white/60 hover:text-white transition-colors transform hover:scale-110"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </PageTransition>
    </AnimatePresence>
  )
}

export default function Portfolio() {
  return (
    <LoadingProvider>
      <PortfolioContent />
    </LoadingProvider>
  )
}
