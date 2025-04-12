import { motion } from 'framer-motion';
import { FaVk, FaTelegram, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { HERO_SECTION, PROJECTS_SECTION, SOCIAL_SECTION, THEME, NAV_LINKS, SPECIALTIES_SECTION } from './data/content';
import logo from './data/logo.png';
import Map from './components/Map';
import QRCode from 'react-qr-code';

const iconComponents = {
  FaVk,
  FaTelegram,
  FaGlobe
};

const App = () => {
  return (
    <div className="min-h-screen bg-white" id="about">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className={`${THEME.container.maxWidth} mx-auto ${THEME.container.padding} py-4`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={logo} alt="KS54" className="h-10" />
              <div className="flex flex-col">
                <span className="text-primary font-bold text-xl">Колледж связи №54</span>
                <span className="text-primary font-semibold text-lg">Отделение ИКТ</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary hover:text-secondary text-lg transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="flex space-x-4">
              {SOCIAL_SECTION.links.map((link, index) => {
                const Icon = iconComponents[link.icon as keyof typeof iconComponents];
                return (
                    <motion.a
                      key={index}
                      href={link.url}
                      whileHover={{ scale: 1.1 }}
                      className="text-primary hover:text-secondary text-3xl mr-2"
                    >
                      <Icon />
                    </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden mt-10" style={{
        backgroundImage: `url(${HERO_SECTION.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
        <div className="absolute top-20 left-0 right-0 text-center text-white z-10">
          <h2 className="text-3xl font-bold text-white mb-2">Отделение "Информационно-коммуникационные технологии"</h2>
          <p className="text-xl text-white/90">Специальность 09.02.07 Информационные системы и программирование</p>
          <div className="text-center text-white">
          <QRCode value="https://ks54.vercel.app/" className="p-4 bg-white rounded-lg mx-auto w-48 h-48 lg:w-64 lg:h-64 mt-4 lg:mt-8 hidden md:block" level="M" size={256} />
        </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white z-10 px-4"
        >
          <h1 className="text-3xl md:text-7xl font-bold mb-6 mt-96 lg:mt-80">{HERO_SECTION.title}</h1>
          <p className="text-xl md:text-3xl mb-8">{HERO_SECTION.subtitle}</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl">
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10">
              <span className="block font-bold">{HERO_SECTION.date}</span>
              <span className="text-white/80">Дата</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-lg border border-white/10">
              <span className="block font-bold">{HERO_SECTION.time}</span>
              <span className="text-white/80">Время</span>
            </div>
          </div>
          <div className="mt-20 hidden md:flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-white"
            >
              <svg
                className="w-12 h-12 p-2 bg-white/20 backdrop-blur-md rounded-xl text-white border border-white/10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </header>

     

      {/* Specialties Section */}
      <section id="specialties" className="bg-gray-50 py-10">
        <div className={`${THEME.container.maxWidth} mx-auto ${THEME.container.padding}`}>
          <h2 className="text-4xl font-bold text-center text-primary mb-12">{SPECIALTIES_SECTION.title}</h2>
          <div className="flex items-center justify-center">
            {SPECIALTIES_SECTION.specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-secondary font-mono mb-2">{specialty.code}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{specialty.title}</h3>
                <p className="text-gray-600 mb-4">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`${THEME.container.padding} py-20`}>
        <div className={`${THEME.container.maxWidth} mx-auto`}>
          <h2 className="text-4xl font-bold text-center text-primary mb-4">{PROJECTS_SECTION.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">{PROJECTS_SECTION.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
            {PROJECTS_SECTION.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col"
              >
                <div className="relative h-64">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 text-lg flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm px-3 py-1 rounded-full bg-secondary/10 text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="text-md text-gray-500">
                      Авторы:
                      {project.students.map((student, index) => (
                        <p key={index} className="mt-1">{student.name} - {student.group}</p>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-xl hover:bg-primary/90 transition-all group"
                      >
                        <FaArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className={`${THEME.container.maxWidth} mx-auto ${THEME.container.padding} mb-20`}>
          <h2 className="text-4xl font-bold text-center text-primary mb-12">{SOCIAL_SECTION.title}</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-lightPrimary text-white p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-2xl text-secondary w-12" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <span>{SOCIAL_SECTION.address}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <FaPhone className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href={`tel:${SOCIAL_SECTION.phone}`} className="hover:text-secondary transition-colors">
                      {SOCIAL_SECTION.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <FaEnvelope className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${SOCIAL_SECTION.email}`} className="hover:text-secondary transition-colors">
                      {SOCIAL_SECTION.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  {SOCIAL_SECTION.links.map((link, index) => {
                    const Icon = iconComponents[link.icon as keyof typeof iconComponents];
                    return (
                      <motion.a
                        key={index}
                        href={link.url}
                        whileHover={{ scale: 1.1 }}
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                      >
                        <Icon className="text-xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-lightPrimary text-white p-8 rounded-2xl">
              <h3 className="font-semibold mb-6 text-xl">Время работы</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div>
                    <p className="font-semibold">Понедельник - Пятница</p>
                    <p className="text-white/70 text-sm">Полный день</p>
                  </div>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div>
                    <p className="font-semibold">Суббота</p>
                    <p className="text-white/70 text-sm">Сокращенный день</p>
                  </div>
                  <span>10:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Воскресенье</p>
                    <p className="text-white/70 text-sm">Выходной день</p>
                  </div>
                  <span>Закрыто</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-1 h-[400px] rounded-2xl overflow-hidden relative">
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer text-black/80 py-8">
        <div className={`${THEME.container.maxWidth} mx-auto ${THEME.container.padding}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col">
              <span className="font-bold text-xl">Информационно-коммуникационные технологии</span>
              <span className="text-lg">Специальность 09.02.07 Информационные системы и программирование</span>
            </div>
            <p className="text-black/70 text-sm text-center md:text-right font-semibold">
              © 2025 Колледж связи №54. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
