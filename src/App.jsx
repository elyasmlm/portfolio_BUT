import React from "react";
import Navbar from "./components/Navbar";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-purple-200 min-h-screen">
      {/* Section Accueil */}
      <section
        id="home"
        className="h-screen w-full flex items-center justify-center bg-transparent px-4"
      >
        <div className="text-center">
          <div className="relative text-center group">
            {/* Texte principal - Responsive */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 animate-fade-in">
              Bienvenue sur le portfolio de Elyas Maloum
            </h1>

            {/* Mots qui apparaissent au hover - Réduits sur mobile */}
            <div className="hidden sm:block absolute inset-0 flex justify-center items-center">
              <span className="absolute text-sm sm:text-lg bg-purple-400 text-white shadow-lg rounded-lg p-1 sm:p-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" style={{ top: "-3rem", left: "0" }}>
                Étudiant
              </span>
              <span className="absolute text-sm sm:text-lg bg-indigo-500 text-white shadow-lg rounded-lg p-1 sm:p-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" style={{ right: "-5rem", top: "0" }}>
                Apprenti
              </span>
              <span className="absolute text-sm sm:text-lg text-white bg-violet-400 shadow-lg rounded-lg p-1 sm:p-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" style={{ bottom: "-3rem", right: "0" }}>
                Informaticien
              </span>
              <span className="absolute text-sm sm:text-lg bg-sky-300 text-white shadow-lg rounded-lg p-1 sm:p-2 opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out" style={{ left: "-4rem", top: "4rem" }}>
                Développeur
              </span>
            </div>
          </div>
          <p className="mt-4 text-base sm:text-xl md:text-2xl text-gray-600">
            Découvrez mes projets et compétences
          </p>
        </div>
      </section>

      {/* Section À propos */}
      <section
        id="orders"
        className="h-screen w-full flex flex-col lg:flex-row items-center justify-center px-4 py-8"
      >
        {/* Partie gauche : Informations personnelles - Stack sur mobile */}
        <div className="w-full lg:w-1/3 h-auto lg:h-2/3 flex flex-col items-center justify-center p-4 lg:p-8 m-2 lg:m-12 bg-purple-200/25 rounded-lg shadow-lg">
          {/* Photo de profil */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 sm:mb-8 md:mb-12 shadow-lg">
            <img
              src="IMG_3837-removebg.png"
              alt="Photo de profil"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Nom et prénom */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Elyas Maloum</h2>
          {/* Biographie */}
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 text-center">
            Étudiant et apprenti développeur, je suis curieux et motivé par tout ce qui touche à la technologie et à l'innovation.
          </p>
          {/* Informations */}
          <div className="mt-4 sm:mt-6 w-full py-2 px-2 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <i className="fas fa-cake-candles"></i>
                <p className="text-sm sm:text-base">20 ans</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-house-chimney"></i>
                <p className="text-sm sm:text-base">Rosny-sous-bois</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-id-card"></i>
                <p className="text-sm sm:text-base">Permis B</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite : Timeline - Pleine largeur sur mobile */}
        <div className="w-full lg:w-2/3 h-full overflow-y-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8 lg:py-20">
          {/* Timeline Container */}
          <div className="relative w-full h-full">
            {/* Ligne centrale - Centrée sur mobile */}
            <div className="absolute left-4 sm:left-1/2 top-0 h-700 w-1 bg-gradient-to-b from-transparent via-blue-500 to-transparent transform sm:-translate-x-1/2 hidden sm:block"></div>

            {/* Item 1 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Assistant développeur - Fnac Darty <br className="hidden sm:block"/> Participations et Services</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Ivry-sur-Seine</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2024 - présent</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    Je suis actuellement assistant développeur chez Fnac Darty, au sein de l'équipe Outillages, où j'ai l'opportunité de créer et d'améliorer des outils internes qui facilitent le travail des équipes au quotidien. Passionné par le développement et l'optimisation des processus, j'aime relever des défis techniques et trouver des solutions efficaces pour automatiser et simplifier les tâches.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-2"></div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row-reverse items-center w-full">
                <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Développeur Fullstack - eBrigade</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Aubervilliers</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2023 - 2024</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    Ma première expérience en alternance dans le développement m'a plongé au cœur d'une start-up dynamique, où j'ai contribué au développement et à la maintenance d'une application web conçue pour simplifier la gestion des équipes. Ce projet m'a permis d'acquérir des compétences solides en développement web.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-1"></div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Vendeur - IKEA</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Villiers-sur-Marne</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2023 - 2024</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    Vendeur au rayon décorations, j'ai eu l'occasion de conseiller les clients sur les produits, de les aider à trouver des solutions adaptées à leurs besoins et de les accompagner dans leurs achats. J'ai également participé à la mise en rayon et à la gestion des stocks.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-2"></div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row-reverse items-center w-full">
                <div className="w-full sm:w-1/2 sm:pl-8 text-left mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">BUT Informatique - IUT de Marne-La-Vallée <br className="hidden sm:block"/> Université Gustave Eiffel</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Champs-sur-Marne</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2022 - présent</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    Je suis actuellement en apprentissage dans le cadre d'un BUT Informatique, parcours Réalisation d'applications : conception, développement, validation. Cette formation allie théorie et pratique à travers des cours en informatique, mathématiques, gestion de projet, communication et anglais.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-1"></div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Assistant Social media manager - Sotrime</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Aulnay-sous-Bois</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2021</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    Lors de mon second stage chez Sotrime, une entreprise de logistique, j'ai intégré l'équipe Digital Marketing en tant qu'assistant. Mon rôle consistait à travailler sur l'image de l'entreprise en ligne, notamment à travers la gestion des réseaux sociaux et l'optimisation du site web.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-2"></div>
              </div>
            </div>

            {/* Item 6 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row-reverse items-center w-full">
                <div className="w-full sm:w-1/2 sm:pl-8 text-left mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Assistant Informaticien - Sotrime</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Aulnay-sous-Bois</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2020</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    En tant qu'assistant de l'informaticien chez Sotrime, une entreprise de logistique, j'ai eu l'opportunité de me familiariser avec les problématiques de gestion de bases de données et d'explorer les bases de l'algorithmie. Ce stage m'a également permis de découvrir le langage VBA.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-1"></div>
              </div>
            </div>

            {/* Item 7 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center w-full">
                <div className="w-full sm:w-1/2 sm:pr-8 text-left sm:text-right mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Baccalauréat Scientifique - Lycée Henri Matisse</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Montreuil</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2019-2022</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    J'ai obtenu un baccalauréat général, avec les spécialités Mathématiques et Physique-Chimie, ainsi que l'option Maths Expertes. Grâce à mon engagement et mon travail, j'ai obtenu la mention Très Bien.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-2"></div>
              </div>
            </div>

            {/* Item 8 */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row-reverse items-center w-full">
                <div className="w-full sm:w-1/2 sm:pl-8 text-left mb-4 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-700">Brevet des collèges - Collège Saint André</h3>
                  <p className="text-gray-700 text-base sm:text-xl">Nogent-sur-Marne</p>
                  <p className="text-gray-400 italic text-sm sm:text-base">2015-2019</p>
                  <p className="mt-2 text-sm sm:text-base text-justify">
                    J'ai obtenu mon Brevet des collèges mention Très Bien au Collège Saint-André de Nogent, une étape qui m'a permis de développer ma rigueur et mon autonomie dans le travail.
                  </p>
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 z-50 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 sm:order-1 hidden sm:block"></div>
                <div className="hidden sm:block w-1/2 order-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section
        id="favourite"
        className="min-h-screen w-full flex items-center justify-center px-4 py-8"
      >
        <ProjectsGrid />
      </section>
      
      {/* Section Contact */}
      <section
        id="contact"
        className="min-h-screen w-full flex items-center justify-center px-4 py-8"
      >
        <Contact />
      </section>

      <Navbar />
    </div>
  );
}

export default App;