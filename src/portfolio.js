const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Carlos",
  logo_name: "{ L.carlos }",
  nickname: "Lemonpie",
  full_name: "Carlos Lemos",
  subTitle:
    "Web developer and cybersecurity enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/1vyqttLkxmqnmUtJs8EIlf6iMqt-Cwr4A/view?usp=sharing",
  mail: "mailto:lemosc96@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Lemosc",
  linkedin: "https://linkedin.com/in/carlos-lemos-a38583191",
  gmail: "lemosc96@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
  devto:"https://dev.to/lemosc",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "I am self-taught and currently focusing more on MERN stack, but I also do not stop learning about other technologies that interest me, such as Python or Flutter, for example. 🔎I am currently looking for a job opportunity to continue developing and learning new skills. I am motivated by new challenges and I love looking for the most efficient way of doing things.",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Experience of working with Computer",
    //   ]
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#6E6E6E",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Netlify",
    //       fontAwesomeClassname: "simple-icons:netlify",
    //       style: {
    //         color: "#38AFBB",
    //       },
    //     },
    //     {
    //       skillName: "Heroku",
    //       fontAwesomeClassname: "simple-icons:heroku",
    //       style: {
    //         color: "#6863A6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Technician",
      subtitle: "High School",
      logo_path: "sal.png",
      alt_name: "SETI",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and courses",
  description:
    "I have experience working with React.js, Node.js and I also did some things with Wordpress. I am constantly learning and developing personal projects. I took some courses and studied in a technical high school, where I learned Java and C #.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Web developer",
          company: "Digital Joker",
          company_url: "",
          logo_path: "digital.jpg",
          duration: "Mar 2020 - Jan 2021",
          location: "Work From Home",
          description:
            "Helping to create and maintain websites(React and Wordpress). Also integrating clients to Mercado Libre.",
          color: "#ee3c26",
        },
        {
          title: "Developer and help desk",
          company: "Aselleraction",
          company_url: " ",
          logo_path: "seller.jpeg",
          duration: "Apr 2019 - Dec 2019",
          location: "Buenos Aires, Argentina",
          description:
            "I worked maintaining and helping in the creation of web pages(PHP and Wordpress) as well as giving technical support. I was in contact with the clients helping them to insert themselves into Mercado Libre and guiding them in their cataloging. ",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Courses",
      experiences: [
        {
          title: "React expert(50hrs)",
          company: "Udemy",
          company_url: "https://www.udemy.com/course/react-cero-experto/",
          logo_path: "udemy.png",
          duration: "2020",
          location: " ",
          description:
            "Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, deployment, CRUD, Logs, SASS, Multiple Routers...",
          color: "#4285F4",
        },
        {
          title: "Full-stack developer with Python(105hrs)",
          company: "EducacionIT",
          company_url: "https://www.educacionit.com/",
          logo_path: "eit.jpg",
          duration: "2020",
          location: " ",
          description:
            "Python, Django, OOP, MySQL, Javascript",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of latest technology tools. My best experience is to create websites projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Commerce",
      url: "https://github.com/Lemosc/react-ecommerce",
      description: "E-commerce made with react.js and commerce.js.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Gif App",
      url: "https://github.com/Lemosc/react-gifapp",
      description:
        "App to find gifs, made with react and the giphy api.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
