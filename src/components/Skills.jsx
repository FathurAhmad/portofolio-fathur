const Skills = () => {
    const skills = [
        {
            name: "HTML",
            image: "/skills/html5.svg"
        },
        {
            name: "CSS",
            image: "/skills/css3.svg"
        },
        {
            name: "JavaScript",
            image: "/skills/javascript.svg"
        },
        {
            name: "PHP",
            image: "/skills/php.png"
        },
        {
            name: "Laravel",
            image: "/skills/laravel.png"
        },
        {
            name: "Java",
            image: "/skills/java.svg"
        },
        {
            name: "Android",
            image: "/skills/android.png"
        },
        {
            name: "Firebase",
            image: "/skills/firebase.svg"
        },
        {
            name: "MySQL",
            image: "/skills/mysql.png"
        },
        {
            name: "React",
            image: "/skills/react.png"
        },
        {
            name: "Tailwind CSS",
            image: "/skills/tailwind.png"
        },
        {
            name: "Git",
            image: "/skills/git.svg"
        },
    ];

    return (
        <div id="skills" className=" min-h-screen bg-[#1e253e] flex flex-col items-center justify-center py-5 text-white">
            <h1 className="text-5xl font-bold items-center mb-10">Skills</h1>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-16">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-[#DFE5EC] p-3 rounded-2xl flex flex-col items-center shadow-xl hover:scale-110 transition-transform duration-300">
                        <img src={skill.image} alt={skill.name} className="h-20 w-20 object-contain" />
                        <h2 className="text-xl text-[#1E253E] font-semibold">{skill.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
