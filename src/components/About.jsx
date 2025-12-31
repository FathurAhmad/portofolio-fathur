const About = () => {
    return (
        <div className="h-screen bg-[#11172a]  flex">
            <div className="max-w-5xl flex items-center justify-between mx-auto gap-40">
                <div>
                    <img className="h-80 rounded-3xl" src="/src/assets/Fotoku.webp" alt="Fotoku" />
                </div>
                <p className="text-lg text-[#dfe5ec]">
                    Mahasiswa S1 Teknologi Informasi Universitas Brawijaya dengan spesialisasi di bidang Web Programming dan Application Development. Berpengalaman membangun aplikasi responsif menggunakan Laravel, Tailwind CSS, serta aplikasi mobile dengan integrasi cloud melalui Firebase Authentication dan Supabase.
                </p>
            </div>
        </div>
    );
};

export default About;