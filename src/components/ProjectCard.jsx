import Swal from 'sweetalert2';

const ProjectCard = ({ project }) => {

    const iconMap = {
        "java": { name: "Java", iconType: "brands", icon: "java" },
        "react": { name: "React", iconType: "brands", icon: "react" },
        "node-js": { name: "Node.js", iconType: "brands", icon: "node-js" },
        "js": { name: "JavaScript", iconType: "brands", icon: "js" },
        "html5": { name: "HTML5", iconType: "brands", icon: "html5" },
        "css3-alt": { name: "CSS3", iconType: "brands", icon: "css3-alt" },
        "python": { name: "Python", iconType: "brands", icon: "python" },
        "php": { name: "PHP", iconType: "brands", icon: "php" },
        "figma": { name: "Figma", iconType: "brands", icon: "figma" },
        "database": { name: "Base de données", iconType: "solid", icon: "database" },
        "c": { name: "Langage C", iconType: "solid", icon: "code" },
        "palette": { name: "IHM et UX/UI", iconType: "solid", icon: "palette" }
    };
    

    const handleSkillClick = ( skill ) => {
        Swal.fire({
            title: skill,
            html: `${skill === "Réaliser" ? `
                        <div class="text-justify text-gray-700">
                            <p class="font-semibold mb-2">Développer - c'est-à-dire concevoir, coder, tester et intégrer - une solution informatique pour un client.</p>
                            <ul class="list-inside space-y-1">
                                <li>📌 Respecter les besoins décrits par le client</li>
                                <li>📌 Appliquer les principes algorithmiques</li>
                                <li>📌 Veiller à la qualité du code et à sa documentation</li>
                                <li>📌 Choisir les ressources techniques appropriées</li>
                            </ul>
                        </div>
                    `
                    : skill === "Optimiser" ? `
                        <div class="text-justify text-gray-700">
                            <p class="font-semibold mb-2">Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'éxecution, précision, consommation de ressources...</p>
                            <ul class="list-inside space-y-1">
                                <li>📌 Formaliser et modéliser des situations complexes</li>
                                <li>📌 Reconnaître les algorithmes et les structures de données usuels</li>
                                <li>📌 S'appuyer sur des schémas de raisonnement</li>
                                <li>📌 Justifier les choix et validant les résultats</li>
                            </ul>
                        </div>
                    `
                    : skill === "Administrer" ? `
                        <div class="text-justify text-gray-700">
                            <p class="font-semibold mb-2">Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.</p>
                            <ul class="list-inside space-y-1">
                                <li>📌 Sécuriser le système d'information</li>
                                <li>📌 Appliquer les normes en vigueur et les bonnes pratiques architecturales et de sécurité</li>
                                <li>📌 Offrir une qualité de service optimale</li>
                                <li>📌 Assurer la continuité d'activité</li>
                            </ul>
                        </div>
                    `
                    : skill === "Gérer" ? `
                        <div class="text-justify text-gray-700">
                            <p class="font-semibold mb-2">Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.</p>
                            <ul class="list-inside space-y-1">
                                <li>📌 Respecter les réglementations sur le respect de la vie privée et la protection des données personnelles</li>
                                <li>📌 Respecter les enjeux économiques, sociaux et écologiques de l’utilisation du stockage de données, ainsi que les différentes infrastructures (data centers, cloud, etc.)</li>
                                <li>📌 S'appuyer sur des bases mathématiques</li>
                                <li>📌 Assurer la cohérence et la qualité</li>
                            </ul>
                        </div>
                    `
                    : skill === "Conduire" ? `
                        <div class="text-justify text-gray-700">
                            <p class="font-semibold mb-2">Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.</p>
                            <ul class="list-inside space-y-1">
                                <li>📌 Adopter une démarche proactive, créative et critique</li>
                                <li>📌 Respecter les règles juridiques et les normes en vigueur</li>
                                <li>📌 Communiquer efficacement avec les différents acteurs d’un projet</li>
                                <li>📌 Sensibiliser à une gestion éthique, responsable, durable et interculturelle</li>
                            </ul>
                        </div>
                    `
                    : skill === "Collaborer" ? `
                        <div class="text-justify text-gray-700">
                            <p class="font-semibold mb-2">Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.</p>
                            <ul class="list-inside space-y-1">
                                <li>📌 Inscrire sa démarche au sein d’une équipe pluridisciplinaire</li>
                                <li>📌 Accompagner la mise en œuvre des évolutions informatiques</li>
                                <li>📌 Veiller au respect des contraintes juridiques</li>
                                <li>📌 Développer une communication efficace et collaborative</li>
                            </ul>
                        </div>
                    `
                    : "Erreur"
            }`,
            icon: 'info',
            confirmButtonText: 'Fermer',
            width: 900,
        });
    };

    const handleInfoClick = (project) => {
        Swal.fire({
            title: '',
            html: `
                <div class="flex flex-col md:flex-row items-start gap-4 text-left text-gray-800">
                    <!-- Image du projet -->
                    <div class="w-full h-full flex flex-col justify-center items-center md:w-1/2">
                        <img src="${project.image}" alt="${project.title}" class="rounded-lg w-full h-auto object-cover shadow-md" />
                    </div>
    
                    <!-- Détails du projet -->
                    <div class="w-full md:w-1/2 space-y-4">
                        <h2 class="text-2xl font-bold text-gray-900">${project.title}</h2>
                        <p><strong>Statut :</strong> ${project.status}</p>
                        <p><strong>Année :</strong> ${project.year}</p>
                        <div>
                            <p class="font-semibold">Description :</p>
                            <p class="text-sm whitespace-pre-line">${project.description}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p class="font-semibold">Technologies utilisées :</p>
                            <div class="grid grid-cols-2 gap-2 mt-2">
                                ${project.technologies.map(tech => {
                                    const { name, iconType, icon } = iconMap[tech] || { name: tech, iconType: "solid", icon: "question" };
                                    return `
                                        <div class="flex items-center gap-2 bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                            <i class="fa-${iconType} fa-${icon} text-lg"></i>
                                            <span class="text-sm">${name}</span>
                                        </div>
                                    `;
                                }).join("")}
                            </div>
                        </div>
                        <div>
                            <p class="font-semibold">Compétences mobilisées :</p>
                            <div class="flex flex-wrap gap-2 mt-1">
                                ${project.skills.map(skill => `
                                    <span class="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">
                                        ${skill}
                                    </span>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            `,
            width: '1200px',
            showCloseButton: true,
            showConfirmButton: false,
            customClass: {
                popup: 'rounded-lg',
            }
        });
    };
    
    


    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col relative">
        <div className={`absolute right-2 top-2 px-3 py-1 font-semibold text-sm rounded-md uppercase ${
                project.status === "En cours" ? "bg-yellow-200 text-yellow-700" :
                project.status === "Terminé" ? "bg-green-100 text-green-700" :
                "bg-red-500"
            }`}>
            {project.status}
        </div>
        {/* Image du projet */}
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
        
        <div className="px-4 pb-2">

            <div className="flex justify-between items-center">
                <div>
                    {/* Titre et année */}
                    <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                    <p className="text-gray-500 text-sm">Année : {project.year}</p>
                </div>
                <div className="flex items-center space-x-1">
                <i
                    className="fas fa-circle-info cursor-pointer bg-blue-100 text-blue-700 hover:bg-blue-500 px-1 py-1 rounded-lg"
                    onClick={() => handleInfoClick(project)}
                ></i>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-link cursor-pointer bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-black px-1 py-1 rounded-lg"></i>
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github cursor-pointer bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-black px-1 py-1 rounded-lg"></i>
                        </a>
                    )}

                </div>
            </div>
    
            {/* Compétences */}
            <div className="mt-3">
                <ul className="flex flex-wrap mt-1">
                    {project.skills.map((skill, index) => (
                    <li key={index} 
                        className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md m-1 cursor-pointer hover:bg-blue-200"
                        onClick={() => handleSkillClick(skill)}
                        rel="noopener noreferrer"
                    >
                        {skill}
                    </li>
                    ))}
                </ul>
            </div>
    
            {/* Technologies */}
            <div className="mt-3">
                <ul className="flex flex-wrap mt-1">
                    {project.technologies.map((tech, index) => (
                        <li key={index} className="text-xl flex items-center bg-purple-100 text-purple-700 px-2 py-1 rounded-md m-1">
                        <i className={`fa-${["java", "react", "node-js", "js", "html5", "css3-alt", "python", "php", "figma"].includes(tech) ? "brands" : "solid"} fa-${tech} flex items-center justify-center`}></i>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  