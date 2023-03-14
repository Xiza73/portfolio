import { OptionsConstants } from "../models/Options";

export type Content = {
  language: string;
  navbar: {
    links: {
      skills: string;
      projects: string;
      contact: string;
    };
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    paragraph: string[];
    visitCv: string;
  };
  about: {
    title: string;
    cards: {
      studies: string;
      work: string;
      hobbies: string;
    };
  };
  skills: {
    title: string;
    main: {
      first: string;
      second: string;
    };
    more: string;
  };
  projects: {
    title: string;
    data: {
      name: string;
      visit?: string;
      repo?: string;
      description: string;
      img: string;
    }[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      control: {
        error: {
          required: string;
          send: string;
        };
        sending: string;
        sent: string;
      };
    };
  };
};

const enContent: Content = {
  language: OptionsConstants.EN,
  navbar: {
    links: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    greeting: "Hi! 🖐️",
    title: ", here's Manuel 😎",
    subtitle: "Full-Stack Developer | Software Engineer",
    paragraph: [
      "This is my web portfolio 🔖, here you will know a little about my skills and my work as a software developer.",
      "You can also see my CV to know more about my experience.",
      "👇👇👇",
    ],
    visitCv: "Visit CV",
  },
  about: {
    title: "About me",
    cards: {
      studies:
        "Software Engineering at the National University of San Marcos / 2017 - 2022",
      work: "2 years of experience as web developer, specialized in JavaScript/TypeScript frameworks and libraries.",
      hobbies:
        "Games, series, movies, music, programming, traveling and learning new things.",
    },
  },
  skills: {
    title: "My Skills",
    main: {
      first: "I love ",
      second: "Stack",
    },
    more: "And I've also worked with:",
  },
  projects: {
    title: "Projects",
    data: [
      {
        name: "Falling Letters",
        visit: "https://falling-letters-game.vercel.app/",
        repo: "https://github.com/Xiza73/fallingLettersGame",
        description: "Letters game with Nuxt.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1678748136/portfolio/fll_qlsgis.png",
      },
      {
        name: "Gourse",
        visit: "https://classy-biscuit-691dfe.netlify.app/",
        repo: "https://github.com/Xiza73/gourse-front",
        description: "Course search with Web Scraping",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/gourse.png",
      },
      {
        name: "Discord Bot",
        repo: "https://github.com/Xiza73/BotitoV2",
        description: "Discord bot for the university server with Node.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/discordbot.jpg",
      },
      {
        name: "Product Manager",
        visit: "https://product-manager-alpha.vercel.app/",
        repo: "https://github.com/Xiza73/product-manager",
        description: "Product manager app with React.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/product-manager.png",
      },
      {
        name: "Poke API Mobile",
        repo: "https://github.com/Xiza73/poke-api-mobile",
        description: "Pokedex with React Native",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/poke-api.png",
      },
      {
        name: "React Notes",
        visit: "https://ejemplo-react-js.vercel.app/poke-api",
        repo: "https://github.com/Xiza73/EjemploReactJS",
        description: "React.js course summary",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/react-notes.png",
      },
    ],
  },
  contact: {
    title: "Contact me!",
    form: {
      name: "What's your name?",
      email: "What's your email?",
      message: "Write your message",
      submit: "Send message",
      control: {
        error: {
          required: "Complete all fields",
          send: "Error sending message",
        },
        sending: "Sending...",
        sent: "Message sent!",
      },
    },
  },
};

const esContent: Content = {
  language: OptionsConstants.ES,
  navbar: {
    links: {
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
  hero: {
    greeting: "Buenas! 🖐️",
    title: ", aquí Manuel 😎",
    subtitle: "Desarrollador Full-Stack | Ingeniero de Software",
    paragraph: [
      "Este es mi portafolio web 🔖, aquí conocerás un poco sobre mis habilidades y mi trabajo como desarrollador de software.",
      "También puedes ver mi CV para saber más de mi experiencia.",
      "👇👇👇",
    ],
    visitCv: "Ver CV",
  },
  about: {
    title: "Sobre mí",
    cards: {
      studies:
        "Ingeniería de Software en la Universidad Nacional Mayor de San Marcos / 2017 - 2022",
      work: "2 años de experiencia en el desarrollo de software en empresas de tecnología, especializado en tecnologías basadas en JavaScript.",
      hobbies:
        "Juegos, series, películas, música, programación, viajes y aprender cosas nuevas.",
    },
  },
  skills: {
    title: "Habilidades",
    main: {
      first: "Mi especialidad, ",
      second: "Stack",
    },
    more: "Además, cuento con experiencia en:",
  },
  projects: {
    title: "Proyectos",
    data: [
      {
        name: "Falling Letters",
        visit: "https://falling-letters-game.vercel.app/",
        repo: "https://github.com/Xiza73/fallingLettersGame",
        description: "Juego de letras con Nuxt.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1678748136/portfolio/fll_qlsgis.png",
      },
      {
        name: "Gourse",
        visit: "https://classy-biscuit-691dfe.netlify.app/",
        repo: "https://github.com/Xiza73/gourse-front",
        description: "Buscador de cursos con Web Scraping",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/gourse.png",
      },
      {
        name: "Discord Bot",
        repo: "https://github.com/Xiza73/BotitoV2",
        description:
          "Bot de Discord para el servidor de la universidad con Node.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/discordbot.jpg",
      },
      {
        name: "Product Manager",
        visit: "https://product-manager-alpha.vercel.app/",
        repo: "https://github.com/Xiza73/product-manager",
        description: "App de administración de productos con React.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/product-manager.png",
      },
      {
        name: "Poke API Mobile",
        repo: "https://github.com/Xiza73/poke-api-mobile",
        description: "Pokedex con React Native",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/poke-api.png",
      },
      {
        name: "React Notes",
        visit: "https://ejemplo-react-js.vercel.app/poke-api",
        repo: "https://github.com/Xiza73/EjemploReactJS",
        description: "Resumen del curso de React.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/react-notes.png",
      },
    ],
  },
  contact: {
    title: "Escríbeme!",
    form: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      submit: "Enviar",
      control: {
        error: {
          required: "Complete todos los campos",
          send: "Error al enviar mensaje",
        },
        sending: "Enviando...",
        sent: "Mensaje enviado!",
      },
    },
  },
};

export type ContentMap = {
  // eslint-disable-next-line no-unused-vars
  [key in OptionsConstants.ES | OptionsConstants.EN]: Content;
};

export const content: ContentMap = {
  es: esContent,
  en: enContent,
};
