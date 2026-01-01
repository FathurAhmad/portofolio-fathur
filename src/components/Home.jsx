const Home = () => {
    return (
        <div id="home" className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(17,23,42,1)),url('/images/rektorat.jpg')] bg-cover bg-bottom ">
            <div className="h-screen max-w-5xl flex flex-col-reverse md:flex-row text-center md:text-start items-center mx-auto justify-center md:justify-between">
                <div className="flex flex-col text-white">
                    <p className="text-xl">Halo, Aku</p>
                    <h1 className="text-5xl font-bold">Ahmad Fathur Rahman</h1>
                    <p className="text-2xl">
                        Junior fullstack developer.
                    </p>
                </div>
                <div className="w-[35%] bg-[#dfe5ec] rounded-tl-[100%]  rounded-tr-[100%]  rounded-br-[100%] rounded-bl-[100%] shadow-xl overflow-hidden">
                    <img className="scale-[140%] origin-bottom hover:scale-[160%] transition-transform" src="/images/foto-tanpa-background.png" alt="Ahmad Fathur Rahman" />
                </div>
            </div>
        </div>
    );
};

export default Home;