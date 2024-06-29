import React, { useState } from 'react'
import "./App.css";
import Input from './components/input/Input';
import Output from './components/output/Output';

const App = () => {
  const blogs = useState([
    {
      title: "Kalki 2898 AD",
      description: "A modern avatar of the Hindu god Vishnu, is said to have descended on Earth to protect the world from evil forces.\n In 2898 AD, six thousand years into the Kali Yuga, the desertified city of Kasi is the last known city in a post-apocalypctic world ruled by the totalitarian god king, Supreme Yaskin, from a hovering inverted-pyramidal-megastructure above the city, known as the \"Complex\". \n Director Nag Ashwin confirmed that the story of 'Kalki 2898 AD' cannot be confined to a single film. The sequel, officially announced, will continue the saga of Ashwatthama (played by Amitabh Bachchan) and Bhairava (played by Prabhas) as they face the formidable Yaskin, portrayed by Kamal Haasan.",
      edit: false
    },
    {
      title: "Differentiation and Integration",
      description: "Differentiation and integration are the important branches of calculus and the differentiation and integration formula are complementary to each other.\nOn integrating the derivative of a function, we get back the original function as the result.\nIn simple words, integration is the reverse process of differentiation, and hence an integral is also called the antiderivative.\nDifferentiation is used to break down the function into parts, and integration is used to unite those parts to form the original function.\nGeometrically the differentiation and integration formula is used to find the slope of a curve, and the area under the curve respectively.",
      edit: false
    },
    {
      title: "Queen's Gambit",
      description: "1.d4 d5 2.c4\nThe Queen's Gambit is one of the oldest and most reputable 1.d4 openings for White. \nUnlike 1.e4 openings, the Queen's Gambit usually evolves into a strategic game rather than an all-out tactical battle. \nDespite being around for centuries, this opening is still one of the cornerstones of every elite players' repertoire. \nIt's also an excellent choice for beginners and intermediate players.",
      edit: false
    },
    {
      title: "Dijkstra’s Algorithm",
      description: "Dijkstra's algorithm (/ˈdaɪkstrəz/ DYKE-strəz) is an algorithm for finding the shortest paths between nodes in a weighted graph, which may represent, for example, road networks.",
      edit: false
    },
    {
      title: "The four chambers of the heart",
      description: "Your heart has a right and left side separated by a wall called the septum. On each side of the wall, there is a small collecting chamber called an ‘atrium’, which leads into a large pumping chamber called a ‘ventricle’. There are four chambers: the left atrium and right atrium (upper chambers), and the left ventricle and right ventricle (lower chambers).\nThe right side of your heart collects blood on its return from the rest of your body. The blood entering the right side of your heart is low in oxygen. Your heart pumps the blood from the right side of your heart to your lungs so it can receive more oxygen.\nOnce it has received oxygen, the blood returns directly to the left side of your heart, which then pumps it out again to all parts of your body through an artery called the aorta.\nBlood pressure refers to the amount of force the pumping blood exerts on arterial walls.",
      edit: false
    },
    {
      title: "First Amendment Act 1951",
      description: "The Constitution (First Amendment) Act, 1951 is the official name of the amendment. Jawaharlal Nehru, who was India’s prime minister at the time, made the motion on May 10 of that year, and Parliament passed it on June 18 of the same year.\nThis Amendment established a precedent for rewriting the Constitution to override judicial decisions that prevented the government from carrying out its alleged obligations to specific policies and programs.\nThe 1951 First Amendment Act amended the Fundamental Rights clauses of the Indian Constitution in several ways.",
      edit: false
    },
    {
      title: "What is fiber optics?",
      description: "Fiber optics, or optical fiber, refers to the technology that transmits information as light pulses along a glass or plastic fiber.\nA fiber optic cable can contain a varying number of glass fibers, from a few up to a couple hundred. Another glass layer called cladding surrounds the glass fiber core. The buffer tube layer protects the cladding, and a jacket layer acts as the final protective layer for the individual strand.\nFiber optic cables are commonly used because of their advantages over copper cables. Some of those benefits include higher bandwidth and transmit speeds.\nFiber optics is used for long-distance and high-performance data networking. It is also commonly used in telecommunication services, such as internet, television and telephones. For example, Verizon and Google use fiber optics in their Verizon Fios and Google Fiber services, respectively, providing Gigabit internet speeds to users.",
      edit: false
    },
    {
      title: "What is React?",
      description: "React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components. React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.",
      edit: false
    },
  ]);
  return (
    <div className="container">
      <div className="top">
        Navbar
      </div>
      <div className="bottom">
        <div className="left">
          <Input arr={blogs} />
        </div>
        <div className="right">
          <Output arr={blogs} />
        </div>
      </div>
    </div>
  )
}

export default App
