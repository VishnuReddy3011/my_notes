import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";
import Input from './components/input/Input';
import Output from './components/output/Output';

const ParentComponent = ({ flag, setter }) => {
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
                <div className="logo">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className="mid">
                    <h1>Your Blogs</h1>
                </div>
                {
                    flag ?
                        <div className="right">
                            <h1>
                                Welcome Vishnu!!
                            </h1>
                            <Link to="/"><button onClick={() => setter((prev) => !prev)}>Logout</button></Link>
                        </div>
                        :
                        <div className="right">
                            <Link to="./login"><button className="loginBtn">Login</button></Link>
                            <Link to="./register"><button className="registerBtn">Sign up</button></Link>
                        </div>
                }
            </div>
            <div className="bottom">
                <div className="left">
                    <Input arr={blogs} />
                </div>
                <div className="right">
                    <Output arr={blogs} />
                </div>
            </div>
        </div >
    )
}

export default ParentComponent;
