// Config starter code
import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import Link from "../components/link/link";

const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage(`Hello! What do you want learn?`, {
    widget: "options",
  }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,

    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <Link {...props} />,
    },

    {
         widgetName: "javascriptLinks",
         widgetFunc: (props) => <Link {...props} />,
         props: {
           options: [
             {
               text: "Introduction to JS",
               url:
                 "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
               id: 1,
             },
             {
               text: "Mozilla JS Guide",
               url:
                 "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
               id: 2,
             },
             {
               text: "Frontend Masters",
               url: "https://frontendmasters.com",
               id: 3,
             },
           ],
         },
},
  ],
};

export default config;
