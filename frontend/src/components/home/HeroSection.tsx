import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import { HeroSectionType } from '@/types/home';
import { urlFor } from '@/sanity/image';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Props = {
  content: HeroSectionType | null;
};

export const HeroSection = ({content} : Props) => {
  const heroItems = content?.slides;
      
    return(
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Swiper
            direction={'vertical'}
            effect={'fade'}
            loop={true}
            autoplay={{
                delay: 2500,
            }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="mySwiper  h-[100vh] "
        >
            {heroItems?.map((item, index) => (
                <SwiperSlide key={index}>
                <div
                  style={{
                    backgroundImage: `url(${urlFor(item.image).url()})`,
                  }}
                  className="flex mt-[6vh] sm:mt-[8vh] flex-col bg-cover bg-center bg-no-repeat relative items-center justify-center h-full w-full"
                >
                  <div className={`absolute top-0 left-0 p-12 md:p-20 lg:p-28 text-${item.color} max-w-[90%]`}>
                    <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
                      {item.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg drop-shadow-md sm:max-w-1/2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              
            ))}

            <Link href={'/products'} className='absolute flex items-center gap-2 bottom-5 text-xl bg-white px-6 py-2 z-10 animate-bounce shadow-2xl text-yellow-700 cursor-pointer rounded-full left-1/2 -translate-x-[50%] hover:scale-95 transition-all'>Explore <ExternalLink style={{height: "16px"}} /> </Link>
            
        </Swiper>
      </motion.div>
    )
}