const Contact = () => {
    const socialMedia = [
        {
            name: "Instagram",
            image: "/images/instagram.svg",
            url: "https://www.instagram.com/fathur.rrh/",
        },
        {
            name: "LinkedIn",
            image: "/images/linkedin.svg",
            url: "https://www.linkedin.com/in/ahmad-fathur-rahman-0505733a3/",
        },
        {
            name: "GitHub",
            image: "/images/github.png",
            url: "https://github.com/FathurAhmad",
        },
    ];
    return (
        <section id="contact" className="min-h-screen text-white flex flex-col items-center text-center justify-center mx-auto gap-y-5 px-5 bg-[#1E253E]">
            <h1 className="text-5xl font-bold text-center mb-10 text-white">Contact Me</h1>
            <p className="text-wrap">Tertarik bekerja sama atau memiliki pertanyaan? Silakan hubungi saya melalui kontak di bawah ini.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {socialMedia.map((media, index) => (
                    <a key={index} href={media.url} className="bg-[#DFE5EC] p-4 rounded-lg shadow-lg w-[110px] h-[110px] flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300">
                        <img src={media.image} alt={media.name} className="h-12 w-12 object-contain" />
                        <p className="font-bold text-[#1E253E]">{media.name}</p>
                    </a>
                ))}
            </div>
            {/* <div className="bg-white p-8 rounded-lg shadow-lg">
                <form action="https://formspree.io/f/mayvlrze" method="POST" className="space-y-6"> 
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
                    </div>
                </form>
            </div> */}
        </section>
    );
};

export default Contact;