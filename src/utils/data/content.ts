import { OptionsConstants } from "../models/Options";

export type Content = {
  language: string;
  navbar: {
    title: string;
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
    paragraph: string;
    download: string;
  };
  about: {
    title: string;
    studies: string;
    work: string;
    hobbies: string;
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
      link: string;
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

const esContent: Content = {
  language: OptionsConstants.ES,
  navbar: {
    title: "Hola, soy",
    links: {
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
  },
  hero: {
    greeting: "Hola!",
    title: ", Soy Manuel",
    subtitle: "Desarrollador Full Stack",
    paragraph:
      "Este es mi portafolio web, aquí conocerás sobre mis habilidades, proyectos y mis últimas experiencias laborales.",
    download: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    studies:
      "Ingeniería de Software en la Universidad Nacional Mayor de San Marcos / 2017 - 2022",
    work: "2 años de experiencia en el desarrollo de software en empresas de tecnología, especializado en tecnologías basadas en JavaScript.",
    hobbies:
      "Juegos, series, películas, música, programación, viajes y aprender cosas nuevas.",
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
        name: "Gourse",
        link: "https://classy-biscuit-691dfe.netlify.app/",
        description: "Búsqueda de cursos con Web Scraping",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/gourse.png",
      },
      {
        name: "Discord Bot",
        link: "https://github.com/Xiza73/BotitoV2",
        description:
          "Bot de Discord para el servidor de la universidad con Node.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/discordbot.jpg",
      },
      {
        name: "Gestor de Productos",
        link: "https://product-manager-alpha.vercel.app/",
        description: "Gestor de productos con React.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/product-manager.png",
      },
      {
        name: "Poke API Mobile",
        link: "https://github.com/Xiza73/poke-api-mobile",
        description: "Pokedex con React Native",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/poke-api.png",
      },
      {
        name: "Horario RGO",
        link: "https://horariorgo.xiza73.repl.co/",
        description: "Horario para radio con reportes",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/rgo.png",
      },
      {
        name: "React Notes",
        link: "https://ejemplo-react-js.vercel.app/poke-api",
        description: "Resumen curso React.js",
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

const enContent: Content = {
  language: OptionsConstants.EN,
  navbar: {
    title: "Hi, I'm",
    links: {
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    greeting: "Hi!",
    title: ", I'm Manuel",
    subtitle: "Junior Full Stack Developer",
    paragraph:
      "Here is my portfolio website, you'll know about my main skills, some of my projects and latest jobs.",
    download: "Download CV",
  },
  about: {
    title: "About me",
    studies:
      "Software Engineering at the National University of San Marcos / 2017 - 2022",
    work: "2 years of experience as web developer, specialized in JavaScript/TypeScript frameworks and libraries.",
    hobbies:
      "Games, series, movies, music, programming, traveling and learning new things.",
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
        name: "Gourse",
        link: "https://classy-biscuit-691dfe.netlify.app/",
        description: "Course search with Web Scraping",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/gourse.png",
      },
      {
        name: "Discord Bot",
        link: "https://github.com/Xiza73/BotitoV2",
        description: "Discord bot for the university server with Node.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/discordbot.jpg",
      },
      {
        name: "Product Manager",
        link: "https://product-manager-alpha.vercel.app/",
        description: "Product manager app with React.js",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/product-manager.png",
      },
      {
        name: "Poke API Mobile",
        link: "https://github.com/Xiza73/poke-api-mobile",
        description: "Pokedex with React Native",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/poke-api.png",
      },
      {
        name: "RGO Schedule",
        link: "https://horariorgo.xiza73.repl.co/",
        description: "Schedule for radio with reports",
        img: "https://res.cloudinary.com/xizascloud/image/upload/v1663047542/portfolio/rgo.png",
      },
      {
        name: "React Notes",
        link: "https://ejemplo-react-js.vercel.app/poke-api",
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

export type ContentMap = {
  // eslint-disable-next-line no-unused-vars
  [key in OptionsConstants.ES | OptionsConstants.EN]: Content;
};

export const content: ContentMap = {
  es: esContent,
  en: enContent,
};
