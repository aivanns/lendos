export interface ProjectCard {
  title: string;
  description: string;
  imageUrl: string;
  students: Student[];
  tags?: string[];
}

export interface Student {
  name: string;
  group: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  text: string;
}

export interface NavLink {
  title: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { title: "О колледже", href: "#about" },
  { title: "Специальности", href: "#specialties" },
  { title: "Проекты", href: "#projects" },
  { title: "Контакты", href: "#contacts" }
];

export const HERO_SECTION = {
  title: "День открытых дверей",
  subtitle: "Добро пожаловать в наш колледж",
  date: "15 февраля 2025",
  time: "11:00",
  backgroundImage: "/images/logo.png"
};

export const ABOUT_SECTION = {
  title: "О колледже",
  description: "Наш колледж - это современное образовательное учреждение с богатой историей и традициями. Мы готовим специалистов в области информационных технологий, дизайна и экономики уже более 20 лет.",
  stats: [
    { label: "Студентов", value: "1200+" },
    { label: "Компаний партнеров", value: "40+" },
    { label: "Лет опыта", value: "20+" },
    { label: "Выпускников", value: "5000+" }
  ],
  features: [
    {
      title: "Современное оборудование",
      description: "Компьютерные классы с новейшим программным обеспечением"
    },
    {
      title: "Практика в компаниях",
      description: "Партнерство с ведущими IT-компаниями региона"
    },
    {
      title: "Внеучебная деятельность",
      description: "Спортивные секции, творческие кружки и клубы по интересам"
    }
  ]
};

export const SPECIALTIES_SECTION = {
  title: "Наша специальность",
  specialties: [
    {
      title: "Информационные системы",
      code: "09.02.07",
      description: "Разработка программного обеспечения, веб-приложений, мобильных приложений, машинное обучение и большие данные."
    }
  ]
};

export const PROJECTS_SECTION = {
  title: "Проекты наших студентов",
  description: "Лучшие проекты, разработанные нашими студентами в рамках курсовых и дипломных работ",
  projects: [
    {
      title: "Социальная сеть для студентов KSMess",
      description: "Социальная сеть для студентов и преподавателей Колледжа связи №54. Приложение позволяет просматривать расписание с учетом замен в удобном формате, общаться в чатах, просматривать вакансии и новости Колледжа.",
      imageUrl: "/images/ksmess/preview.png",
      students: [
        { name: "Хасанов Альберт", group: "3ИСП9-13" },
        { name: "Хасанов Георгий", group: "3ИСП9-13" }
      ],
      tags: ["Flutter", "Dart", "FireBase"]
    },
    {
      title: "Веб-сервис по созданию ведомостей для отделения ИКТ",
      description: "Необходимо разработать сервис, который поможет в создании зачетных и экзаменационных ведомостей.",
      imageUrl: "/images/ikt54/preview.png",
      students: [
        { name: "Шалагинов Даниил", group: "4ИСП9-8" },
        { name: "Коротков Павел", group: "4ИСП9-8" },
        { name: "Алеев Егор", group: "4ИСП9-8" },
        { name: "Сафонов Иван", group: "4ИСП9-8" }
      ],
      tags: ["TypeScript", "React", "Sass", "Redux", "ExpressJS", "MySQL"]
    },
    {
      title: "Веб-сайт для городского Хакатона \"PRO Поколение IT\"",
      description: "Хакатон \"Поколение IT\" - это мероприятие для веб-разработчиков из всех регионов, которое проводится несколько раз в год. Организовано Департаментом образования Москвы и московскими колледжами.",
      imageUrl: "/images/hackpro/preview.png",
      students: [
        { name: "Шалагинов Даниил", group: "4ИСП9-8" },
        { name: "Коротков Павел", group: "4ИСП9-8" },
        { name: "Алеев Егор", group: "4ИСП9-8" },
        { name: "Сафонов Иван", group: "4ИСП9-8" }
      ],
      tags: ["JavaScript", "React", "Sass", "Redux", "ExpressJS", "MySQL"]
    },
    {
      title: "Чат-бот MosObrBot",
      description: "MosObrBot - телеграм бот, разработанный в рамках участия в Хакатоне \"Поколение IT 2022\". Основной функционал: помощь абитуриентам в поиске образовательных организаций города Москвы и полезной информации о них.",
      imageUrl: "/images/MosObrBot/preview.png",
      students: [
        { name: "Максимов Кирилл", group: "2ИСП9-20" },
        { name: "Щиголев Сергей", group: "3ИСП11-15" },
        { name: "Заварзина Татьяна", group: "3ИСП11-15" },
        { name: "Бирюков Даниил", group: "3ИСП11-15" }
      ],
      tags: ["Python", "PostgreSQL", "PHP", "Selenium", "Bash", "Docker"]
    },
    {
      title: "Мобильное приложение для планирования - Обратный отсчет",
      description: "Приложение \"Осталось до\" - очень простой в использовании таймер обратного отсчета, который напоминает о важных событиях и датах в вашей жизни.",
      imageUrl: "/images/CountTo/preview.png",
      students: [
        { name: "Хасанов Альберт", group: "3ИСП9-13" },
        { name: "Хасанов Георгий", group: "3ИСП9-13" }
      ],
      tags: ["Flutter", "Dart", "FireBase"]
    },
    {
      title: "Сервис волонтеров \"Volunvice\"",
      description: "Volunvice - сервис по размещению и поиску задач для волонтеров. По задумке, проект будет облегчать доступность к участию в важных общественных мероприятиях в городском сообществе. Активные граждане смогут оказывать благотворительные услуги, направленные на улучшение жизни людей, города.",
      imageUrl: "/images/Volunvice/preview.png",
      students: [
        { name: "Алеев Егор", group: "4ИСП9-8" }
      ],
      tags: ["Figma"]
    },
    {
      title: "Сервис для путешествий \"Loctravel\"",
      description: "\"Loctravel\" - портал для путешественников и жителей Москвы, для помощи в развитии регионального туризма.",
      imageUrl: "/images/Loctravel/preview.png",
      students: [
        { name: "Алеев Егор", group: "4ИСП9-8" }
      ],
      tags: ["Figma"]
    },
    {
      title: "Приложение «Новостная лента»",
      description: "Приложение работает как интерфейс для автоматизированного создания новостной ленты по предпочтениям пользователя. В рамках проекта реализованы как настольная версия приложения, так и мобильная.",
      imageUrl: "/images/NewsList/preview.png",
      students: [
        { name: "Лазарев Никита", group: "4ИСП9-3" }
      ],
      tags: ["С#", "Entity Framework", "MS SQL", "Jetpack Compose"]
    },
    {
      title: "Приложение для компании, осуществляющей услуги по проведению авиа-прогулок",
      description: "Автоматизированная система предназначена для оптимизации работы сотрудников компании и поддерживает такой функционал как: просмотр списка услуг, учет клиентов, создание заказа, просмотр расписания тренера.",
      imageUrl: "/images/AirWalks/preview.png",
      students: [
        { name: "Аралбаева Камилла", group: "4ИСП9-3" }
      ],
      tags: ["С#", "MS SQL", "Entity Framework"]
    },
    {
      title: "Информационная база для ведения хозяйственной деятельности медицинского учреждения",
      description: "В данной информационной базе в полном объеме реализован пример ведения хозяйственной деятельности клиники.",
      imageUrl: "/images/1C-2/preview.png",
      students: [
        { name: "Ганюшкин Дмитрий", group: "3ИСП11-15" }
      ],
      tags: ["1C:Предприятие"]
    },
    {
      title: "Информационная система для малых торговых предприятий",
      description: "Информационная база для небольших организаций, занимающихся продажей товаров. В данной конфигурации предусмотрена возможность регистрировать заказ товаров. В системе хранятся данные обо всех покупателях и поставщиках, а именно: полное наименование организации, ИНН, расчетный счет.",
      imageUrl: "/images/1C-1/preview.png",
      students: [
        { name: "Семенова Екатерина", group: "4ИСП9-8" }
      ],
      tags: ["1C:Предприятие"]
    },
    {
      title: "Мобильная игра Callidus",
      description: "Мобильная игра, обучающая детей финансовой грамотности.",
      imageUrl: "/images/Callidus/preview.png",
      students: [
        { name: "Абакумова Анастасия", group: "2ИСП11-20" },
        { name: "Дмитрий Демьяновский", group: "4ИСП9-8" }
      ],
      tags: ["Figma", "Unity"]
    },
    {
      title: "Сайт для студентов колледжа и преподавателей StudentDiary",
      description: "Удобное, стильное и минималистичное веб-приложение для повышения продуктивности, предназначенное для управления временем и задачами. Вы можете легко создавать, удалять и редактировать задачи, устанавливать приоритеты и сроки выполнения, а также добавлять подзадачи для более детального описания.",
      imageUrl: "/images/StudentDiary/preview.png",
      students: [
        { name: "Сахневич Иван", group: "2ИСП9-27" }
      ],
      tags: ["JavaScript", "React JS", "Python", "Django REST"]
    },
    {
      title: "Сайт по ресейлу одежды с POIZON",
      description: "Сайт автоматизирует процесс оформления заказов.\nБлагодаря сайту, вы можете узнавать местонахождение своего заказа, не писав посреднику, а просто набрав в поиск свой трек-номер, где будет выведен статус заказа.\nНа сайте вы можете узнать актуальный курс юаня, в стоимость которого включена комиссия посредника",
      imageUrl: "/images/Poizon/preview.png",
      students: [
        { name: "Мартиросян Галуст", group: "3ИСП9-16" }
      ],
      tags: ["React JS", "Java", "Spring", "MySQL"]
    },
    {
      title: "Игра \"The Great Knights\"",
      description: "Ролевая игра, которая создается на подобии Final fantasy 4. В ней будет открытый мир с сюжетом и побочными заданиями которые будут выдаваться различными NPC.",
      imageUrl: "/images/TheGreatKnights/preview.png",
      students: [
        { name: "Алпатов Сергей", group: "3ИСП9-17" },
        { name: "Горгадзе Василий", group: "3ИСП9-17" },
        { name: "Вяльченков Степан", group: "3ИСП9-17" }
      ],
      tags: ["C++", "RPGmMZ"]
    },
    {
      title: "Мобильное приложение \"Кулинарный форум\"",
      description: "Приложение, в котором пользователи могут обмениваться рецептами, оставлять комментарии, сохранять их в избранном.",
      imageUrl: "/images/EatForum/preview.png",
      students: [
        { name: "Лексиков Марк", group: "4ИСП9-7" }
      ],
      tags: ["Java", "Firebase"]
    },
    {
      title: "Мобильное приложение для изучения периодической системы химических элементов",
      description: "Мобильное приложение чтобы облегчить изучение химических элементов, сделать его максимально наглядным и интерактивным.",
      imageUrl: "/images/SysChemEls/preview.png",
      students: [
        { name: "Волынаев Даниил", group: "4ИСП9-6" }
      ],
      tags: []
    },
    {
      title: "Телебот Bot Meeting",
      description: "Робот телеприсутствия, позволяющий перемещаться и вести видеоконференцию в онлайн режиме через компьютер или телефон.",
      imageUrl: "/images/BotMeeting/preview.png",
      students: [
        { name: "Кравченко Иван", group: "1ИСП9-30" },
        { name: "Бирюков Даниил", group: "3ИСП11-15" },
        { name: "Максимов Кирилл", group: "2ИСП9-20" },
        { name: "Алпатов Сергей", group: "3ИСП9-17" }
      ],
      tags: ["C++", "Bluetooth CH05", "Java", "REST API", "peer-to-peer", "FireStore"]
    }
  ] as ProjectCard[]
};

export const SOCIAL_SECTION = {
  title: "Присоединяйтесь к нам",
  description: "Следите за новостями колледжа в социальных сетях",
  address: "г. Москва, Рязанский проспект, д. 8, стр. 1 (м. Стахановская)",
  phone: "+7 (495) 134-12-34, доб. 1",
  email: "pk@ks54.ru",
  links: [
    {
      name: "VK",
      url: "https://vk.com/ks54_ikt",
      icon: "FaVk",
      text: "@ks54_ikt"
    },
    {
      name: "Telegram",
      url: "https://t.me/ks54_ikt",
      icon: "FaTelegram",
      text: "@ks54_ikt"
    },
    {
      name: "Website",
      url: "https://ks54.ru",
      icon: "FaGlobe",
      text: "ks54.ru"
    }
  ] as SocialLink[]
};

export const THEME = {
  colors: {
    primary: '#0052CC',
    secondary: '#FF5722',
    accent: '#FF7043',
    background: {
      gradient: {
        from: '#EBF5FF',
        to: '#FFFFFF'
      }
    }
  },
  container: {
    padding: "p-2 md:p-4",
    maxWidth: "max-w-screen-xl"
  }
}; 