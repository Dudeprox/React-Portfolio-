import { parse } from "postcss";
import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";

export const HERO_CONTENT = `I am a recent Computer Science and Mathematics graduate from the University of Toronto. I worked as a Teaching Assistant at the University of Toronto, currently seeking Software development and Machine Learning positions.`;

export const ABOUT_TEXT = `Hi, I'm Haris, a passionate software engineer with a strong background in computer science, AI/Machine Learning, and Data analytics. I've worked on various projects, including Image classification, American Sign Language recognition, Word embeddings, building an Xmodem server and a Custom file system. I have hands-on experience in Python, Java, C, SQL, and cloud technologies like Azure. I've developed scalable solutions and improved systems for large-scale products. I'm also proficient in front-end development, building my portfolio using React. Through my work as a Teaching Assistant for mathematical proofs and integral calculus courses, I've strengthened my communication and collaboration skills, guiding over 1500 students in understanding complex concepts. I'm always eager to dive into innovative technologies like AI, Blockchain, and Machine learning while continuously learning about new technologies. I also have a passion for studying financial markets. Let’s connect and collaborate on groundbreaking solutions!`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Teaching Assistant",
    company: "UofT Department of Mathematical and Computational Sciences",
    description: `As a Teaching Assistant for Introduction to Mathematical Proofs and Integral Calculus, I led tutorials and office hours for 1500 students, effectively explaining complex concepts and fostering engagement. I collaborated with TAs and professors to grade assignments and provide lecture support, enhancing teamwork and communication skills. Additionally, I invigilated and scanned exams, demonstrating strong organizational abilities and attention to detail.`,
    technologies: ["Calculus", "Mathematical Proofs", "Teamwork", "Leadership", "Communication "],
  },
  {
    year: "2023 - 2024",
    role: "SRHacks",
    company: "Education Mentor and Judge",
    description: `As a Mentor for SRHacks, I led office hours to help students with their coding & engineering competition and hosted interactive workshops to help students learn fundamental coding principles and engineering skills. As a finalist judge, I collaborated with a team of judges to grade student’s submitted final projects.`,
    technologies: ["Microsoft: microbit", "Makecode", "Scratch MIT"],
  },
];

export const PROJECTS = [
  {
    title: "Spongebob Script Generation",
    image: project1,
    link: "https://github.com/Dudeprox/CSC413",
    description:
      "In this project, we developed a model to generate scripts mimicking the style and humor of Spongebob Squarepants using a Long Short-Term Memory (LSTM) network. LSTMs, a type of recurrent neural network, capture long-term dependencies in sequential data, allowing for the generation of coherent text that follows natural language grammar. Given a starting word and desired script length, the model produces a sequence of words that reflects the structure and tone of the show.",
    technologies: ["Python", "RNN", "NumPy", "PyTorch", "TensorFlow"],
  },
  {
    title: "American Sign Language",
    link: "https://github.com/Dudeprox/American-Sign-Language",
    image: project2,
    description:
      "This project focuses on classifying hand gestures representing the letters A-I in American Sign Language (ASL) using Convolutional Neural Networks (CNNs). The dataset consists of images of hand gestures taken by students, and the task involves building and training CNN models to predict the correct letter from a given image.",
    technologies: ["Machine Vision", "Python", "Jupyter Notebook", "CNN", "PyTorch"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "This project involves building a personal portfolio website using React, HTML, CSS, TypeScript, and Tailwind CSS to showcase projects, skills, and contact information. Tailwind CSS is used for efficient, utility-first styling, enabling a responsive and visually appealing layout. The site includes an introduction, project highlights with links, a skillset overview, and a contact form, all presented in a clean and user-friendly interface.",
    technologies: ["HTML", "Tailwind CSS", "React", "Typescript", "Vite", "JavaScript"],
  },
  {
    title: "Video Game Digital Distribution System",
    link: "https://github.com/Dudeprox/Video-Game-Digital-Distribution-System",
    image: project4,
    description:
      "This project involves creating the back-end of a digital video game distribution system, similar to Steam, where users can buy or sell access to games. The system processes daily transaction files, supporting four types of users: buyers, sellers, full-standard users (who can both buy and sell), and system staff (admins). Each user has a username, account balance, and a game inventory.",
    technologies: ["Java", "OOP", "Agile Methodology"],
  },
  {
    title: "Image Classification",
    link: "https://github.com/Dudeprox/Image-Classification",
    image: project5,
    description:
      "This project involved building a model to predict images based on student survey data describing three AI generated images. Using Pandas and NumPy for pre-processing, various models were explored, including Naive Bayes, kNN, clustering, and decision trees. A Naive Bayes model was developed and fine-tuned to predict images based on attributes from written descriptions, achieving a 92% validation accuracy through hyperparameter tuning.",
    technologies: ["Python", "Machine Learning", "NumPy", "Pandas", "Naive Bayes"],
  },
  {
    title: "Word Embeddings",
    link: "https://github.com/Dudeprox/Word-Embeddings",
    image: project6,
    description:
      "This project involves building and analyzing neural networks to predict the next word in a sentence based on the previous three words. Implemented using both NumPy and PyTorch, the networks are trained with backpropagation. The project also explores word embeddings and their vector space representations, enhancing the model's ability to capture relationships between words.",
    technologies: ["Python", "Machine Learning", "NumPy", "PyTorch"],
  },
  {
    title: "Simulated File System",
    link: "https://github.com/Dudeprox/File-System",
    image: project7,
    description:
      "This project implements a simulated file system, simfs, stored within a single Unix file. It simulates basic file storage and management with limitations on the number of files (MAXFILES) and disk space (MAXBLOCKS). The system provides core functionality, allowing users to create, delete, write, and read files, offering a simplified environment for interacting with a file system.",
    technologies: ["C", " ASCII file I/O", "Binary"],
  },
  {
    title: "Xmodem Server",
    link: "https://github.com/Dudeprox/xmodem-Server",
    image: project8,
    description:
      "This project implements an xmodem server that receives and stores files sent by an xmodem client. The server and client communicate over an unreliable connection, where the server ensures reliable file transfer using the CRC16 algorithm to detect data corruption and request retransmission if necessary.",
    technologies: ["C", " CRC16", "Socket Programming"],
  },
  {
    title: "Airline System",
    link: "https://github.com/Dudeprox/Airline-System",
    image: project9,
    description:
      "This project involved developing the back end of an application that loads trips from a CSV dataset containing flight segments, trip details, and customer information. Filters were implemented to search flights by Customer ID, duration, airport location, specific trips, or flight dates, with flight paths displayed based on these criteria. The system utilized object-oriented programming to create abstract data types (ADTs) , ensuring efficient functionality. Large CSV datasets were parsed to build these ADTs, and data encapsulation was applied to protect customer and user data.",
    technologies: ["Python", " OOP"],
  },
];

export const CONTACT = {
  address: "Toronto, Ontario",
  phoneNo: "+1 437-994-6761",
  email: "muhammad.idrees@mail.utoronto.ca",
};
