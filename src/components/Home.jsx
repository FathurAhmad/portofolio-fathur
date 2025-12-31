const Home = () => {
    return (
        <div className="h-screen bg-[#11172a] flex">
            <div className="max-w-5xl flex items-center justify-between mx-auto">
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold text-[#dfe5ec]">Welcome to My Portfolio</h1>
                    <p className="text-lg text-[#dfe5ec]">
                        Junior fullstack developer.
                    </p>
                </div>
                <div>
                    <img className="h-80 rounded-3xl" src="/src/assets/Fotoku.webp" alt="Fotoku" />
                </div>
            </div>
        </div>
    );
};

export default Home;