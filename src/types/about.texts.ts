import { Language, LanguageText } from "./global";

export const ABOUT_TEXTS: Record<Language, LanguageText> = {
  en: {
    title: "Hi, I'm a frontend developer",
    paragraphs: [
      "The project is still in its initial stage, it will expand and scale over time. Here you will find the latest news about space exploration and scientific discoveries. Made by a frontend developer using TypeScript, JavaScript, React, Vue, and SCSS, with the use of React Router and Redux libraries.",
    ],
  },

  ru: {
    title: "Привет, я frontend-разработчик",
    paragraphs: [
      "Проект находится на начальном этапе, он будет расширяться и масштабироваться. Здесь будут последние новости о открытиях научного мира. Проект сделан frontend-разработчиком с использованием TypeScript, JavaScript, React, Vue и SCSS, с применением React Router и Redux.",
    ],
  },

  fr: {
    title: "Salut, je suis développeur frontend",
    paragraphs: [
      "Le projet a été développé par un développeur Frontend en utilisant JavaScript, TypeScript, CSS, SCSS et React (y compris React Router et Redux). Le projet est encore à ses débuts, il s'étendra et évoluera au fil du temps.",
    ],
  },

  it: {
    title: "Ciao, sono uno sviluppatore frontend",
    paragraphs: [
      "Il progetto è stato sviluppato da uno sviluppatore Frontend utilizzando JavaScript, TypeScript, CSS, SCSS e React (inclusi React Router e Redux). Il progetto è ancora nelle prime fasi e crescerà nel tempo.",
    ],
  },

  am: {
    title: "Բարև, ես frontend ծրագրավորող եմ",
    paragraphs: [
      "Նախագիծը մշակվել է Frontend ծրագրավորողի կողմից՝ JavaScript, TypeScript, CSS, SCSS և React գործիքների կիրառմամբ (օգտագործվել են նաև React Router և Redux): Նախագիծը դեռ սկզբնական փուլում է և ժամանակի ընթացքում կընդլայնվի",
    ],
  },

  de: {
    title: "Hallo, ich bin Frontend-Entwickler",
    paragraphs: [
      "Das Projekt wurde von einem Frontend-Entwickler unter Verwendung von JavaScript, TypeScript, CSS, SCSS und React (einschließlich React Router und Redux) entwickelt. Das Projekt befindet sich derzeit in der Initiierungsphase",
    ],
  },
};
