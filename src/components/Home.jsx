const Home = () => {
    return (
        <div id="home" className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(17,23,42,1)),url('/images/rektorat.jpg')] bg-cover bg-bottom ">
            <div className="h-screen max-w-5xl flex flex-col-reverse md:flex-row text-center md:text-start items-center mx-auto md:gap-0 gap-10 justify-center md:justify-between">
                <div className="flex flex-col text-wrap w-[60%] text-white">
                    <p className="text-xl">Halo, Aku</p>
                    <h1 className="text-5xl font-bold mb-5">Ahmad Fathur Rahman</h1>
                    <p className="text-2xl">
                        Seorang Mahasiswa Teknologi Informasi yang tertarik pada pengembangan web dan aplikasi mobile. 
                    </p>
                </div>
                <div className="md:w-[35%] w-[70%] bg-[#dfe5ec] rounded-tl-[100%]  rounded-tr-[100%]  rounded-br-[100%] rounded-bl-[100%] shadow-xl overflow-hidden">
                    <img className="scale-[140%] origin-bottom hover:scale-[160%] transition-transform" src="/images/foto-tanpa-background.png" alt="Ahmad Fathur Rahman" />
                </div>
            </div>
        </div>
    );
};

export default Home;