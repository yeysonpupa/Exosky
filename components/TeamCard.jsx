'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const TeamCard = ({ imgUrl, name, role, linkedinUrl, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt={name}
      className="min-w-[170px] min-h-[200px] rounded-[32px] object-cover"
      style={{ width: '170px', height: '200px', objectFit: 'cover' }}
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] md:mr-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {name}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {role}
        </p>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/arrow.svg"
            alt="arrow"
            className="w-[40px] h-[40px] object-contain"
          />
        </a>
      </div>
    </div>
  </motion.div>
);

export default TeamCard;
