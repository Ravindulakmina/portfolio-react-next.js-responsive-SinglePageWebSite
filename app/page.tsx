//hooks
"use client";
import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

// images
import profileImage from "../public/p2.png";
import graphicDesign from "../public/design.png";
import code from "../public/code.png";
import image1 from "../public/web1.png";
import image2 from "../public/web2.png";
import image3 from "../public/web3.png";
import image4 from "../public/web4.png";
import image5 from "../public/web5.png";

//framer
import { motion } from "framer-motion";

// icon

import { BsMoonStarsFill } from "react-icons/bs";
import { BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

export default function Home() {
  // functions
  const [darkmode, setdarkmode] = useState(false);
  return (
    <div className={darkmode ? "dark" : ""}>
      <Head>
        <title>Ravindu</title>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        </style>
      </Head>

      <main className="flex flex-col justify-between  font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40 dark:bg-black">
        <section>
          {/* nav */}
          <nav className="py-10 flex justify-between">
            <h1 className=" text-sm md:text-xl dark:text-white">
              Developed by Ravindu
            </h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill
                  onClick={() => setdarkmode(!darkmode)}
                  className="cursor-pointer text-xl mx-5 dark:text-white"
                />
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ravindulakmina.me/"
                  className=" bg-yellow-400 text-black px-4 py-2 border-none rounded-md"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* hero */}
          <div className="text-center p-10">
            <h1 className="text-4xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">
              Ravindu Lakmina
            </h1>
            <h3 className="text-2xl md:text-3xl py-3 dark:text-white">
              Mobile and website developer
            </h3>
            <p className="text-sm  text-gray-400 leading-6 max-w-xl md:text-md mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              consectetur rem recusandae. Fugit doloremque eius quasi hic ab
              soluta totam dolore recusandae labore, amet, alias fugiat
              molestiae consectetur similique et.
            </p>
          </div>

          {/* socials media icon */}

          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a href="https://github.com/Ravindulakmina">
              <BsGithub />
            </a>

            <a href="https://www.facebook.com/ravindulakmina.me/">
              <BsFacebook />
            </a>

            <a href="https://www.instagram.com/ravindu.lakmina/">
              <BsInstagram />
            </a>
          </div>

          {/* image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5 mt-20 rounded-full">
              <Image
                src={profileImage}
                alt="Profile Image"
                layout="fill"
                objectFit="cursor"
              />
            </div>
          </motion.div>
        </section>
        {/* services */}
        <section>
          <div>
            <h2 className="text-5xl py-5 font-bold opacity-50 dark:text-white">
              Services I Offer
            </h2>
            <p className="text-sm py-2 text-gray-400 leading-6 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              consectetur rem recusandae. Fugit doloremque eius quasi hic ab
              soluta totam dolore recusandae labore, amet, alias fugiat
              molestiae consectetur similique et.
            </p>
          </div>
          {/* services */}
          <div className="md:flex lg:flex gap-10 mx-auto">
            {/* cart */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={graphicDesign}
                  alt="Graphic Design"
                  width={100}
                  height={100}
                  className=" inline"
                />
                <h2 className="text-2xl font-bold">Graphic Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                  maxime ad! Atque similique quod iure necessitatibus dicta
                  error tenetur quis eos officiis possimus repellendus
                  perferendis saepe quo, laborum fuga. Rem!
                </p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={graphicDesign}
                  alt="Graphic Design"
                  width={100}
                  height={100}
                  className=" inline"
                />
                <h2 className="text-2xl font-bold">Graphic Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                  maxime ad! Atque similique quod iure necessitatibus dicta
                  error tenetur quis eos officiis possimus repellendus
                  perferendis saepe quo, laborum fuga. Rem!
                </p>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image
                  src={code}
                  alt="Graphic Design"
                  width={100}
                  height={100}
                  className=" inline"
                />
                <h2 className="text-2xl font-bold">Graphic Designing</h2>
                <p className="text-sm py-2 text-gray-800 leading-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
                  maxime ad! Atque similique quod iure necessitatibus dicta
                  error tenetur quis eos officiis possimus repellendus
                  perferendis saepe quo, laborum fuga. Rem!
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* my wark */}

        <section>
          <div>
            <h2 className="text-5xl py-5 font-bold opacity-50 dark:text-white">
              Protfalio
            </h2>
            <p className="text-sm py-2 text-gray-800 leading-6 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
              maxime ad! Atque similique quod iure necessitatibus dicta error
              tenetur quis eos officiis possimus repellendus perferendis saepe
              quo, laborum fuga. Rem!
            </p>
          </div>
          {/* images */}
          <div className="flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                  src={image1}
                  alt="images"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>

            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                  src={image2}
                  alt="images"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>

            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                  src={image3}
                  alt="images"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>

            <div className=" basis-1/3 flex-1">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                  src={image4}
                  alt="images"
                  layout="responsive"
                  className="rounded-lg object-cover"
                />
              </motion.div>
            </div>

            <div className=" basis-1/3 flex-1">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
              <Image
                src={image5}
                alt="images"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>
            </div>

            <div className=" basis-1/3 flex-1">
            <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
              <Image
                src={image1}
                alt="images"
                layout="responsive"
                className="rounded-lg object-cover"
              />
              </motion.div>
            </div>
          </div>
        </section>

        {/* footer */}

        <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center dark:border-white">
          <div>
            <h3 className="text-base mb-2 dark:text-white">
              Contact me for more details
            </h3>
            <p className="opacity-40 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga aut
              nihil deleniti asperiores, adipisci eaque eligendi tenetur id
              distinctio, incidunt officia pariatur aliquid dolorum dolores odio
              tempora aspernatur? Vero, minima?
            </p>
          </div>
          <div>
            <div className="text-5xl flex justify-center gap-16 text-gray-600">
              <a href="https://github.com/Ravindulakmina">
                <BsGithub />
              </a>

              <a href="https://www.facebook.com/ravindulakmina.me/">
                <BsFacebook />
              </a>

              <a href="https://www.instagram.com/ravindu.lakmina/">
                <BsInstagram />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
