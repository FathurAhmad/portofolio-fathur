import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
    const projects = [
        {
            title: "Shinedu",
            desc: "Learning Management System (LMS) berbasis web yang dirancang untuk memfasilitasi proses pembelajaran secara daring.",
            category: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", ],
            img: "/images/Shinedu.png"
        },
        {
            title: "IMoney",
            desc: "Aplikasi pengelolaan keuangan pribadi yang membantu pengguna dalam mencatat pemasukan dan pengeluaran mereka.",
            category: ["Android", "Java", "Firebase", "Supabase"],
            img: "/images/Imoney.png"
        },
    ];

    return (
        <div className="bg-[#0f172a] min-h-screen py-16 px-4 md:px-20 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Project Showcase</h2>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="rounded-3xl shadow-2xl"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            {/* Card Container */}
                            <div className="flex flex-col md:flex-row bg-white text-slate-900 min-h-[300px] rounded-3xl overflow-hidden">

                                {/* Sisi Kiri: Gambar (50%) */}
                                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                {/* Sisi Kanan: Konten (50%) */}
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl font-bold mb-4 text-slate-800 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-lg italic">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="mt-8 flex flex-wrap">
                                            {project.category.map((category, index) => (
                                                <span key={index} className="text-teal-600 font-bold text-sm uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full">{category}</span>
                                            ))}
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;