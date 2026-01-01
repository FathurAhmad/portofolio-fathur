const About = () => {
    return (
        <div id="about" className="min-h-screen bg-[#11172a] text-white flex flex-col items-center justify-center gap-10 py-5">
            <h1 className="text-5xl font-bold">About Me</h1>
            <div className="max-w-5xl flex flex-col gap-10 md:flex-row md:gap-0 items-center justify-between">
                <div className="bg-[#1e253e] rounded-3xl shadow-xl w-auto">
                    <img className="h-[400px] w-[300px] rounded-3xl object-cover" src="/images/Fotoku.webp" alt="Ahmad Fathur Rahman" />
                </div>
                <div  className="text-lg flex flex-wrap flex-col md:text-justify text-center md:w-[60%] w-full px-4">
                    <p>
                        Mahasiswa S1 Teknologi Informasi Universitas Brawijaya dengan spesialisasi di bidang Web Programming dan Application Development. Berpengalaman membangun aplikasi responsif menggunakan Laravel, Tailwind CSS, serta aplikasi mobile dengan integrasi cloud melalui Firebase Authentication dan Supabase.
                    </p>
                    <br />
                    <p>
                        Memiliki kemampuan problem-solving yang baik, komunikatif, dan mampu bekerja secara mandiri maupun dalam tim. Bersemangat untuk terus belajar teknologi baru.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;