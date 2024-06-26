// components/StayConnected.tsx
import React from 'react';
import { FaUsersBetweenLines } from "react-icons/fa6";
import { MdTipsAndUpdates } from "react-icons/md";
import { TbFileAlert } from "react-icons/tb";
interface SharedButtonProps {
  className: string;
  children: React.ReactNode;
}

const sharedButtonClasses = 'py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300';

const SharedButton: React.FC<SharedButtonProps> = ({ className, children }) => (
  <button className={`${sharedButtonClasses} ${className}`}>{children}</button>
);

const StayConnected: React.FC = () => {
  return (
    <div className="my-8 p-5 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-black">Stay connected</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="w-[100%] flex justify-center">
            <FaUsersBetweenLines className="text-9xl text-black w-20 h-30" />
          </div>
          <h3 className="text-xl font-semibold text-black mt-2 text-center">Join Our Team</h3>
          <p className="text-black mt-2 text-center">Search open positions that match your skills and interest.</p>
          <SharedButton className="mt-4 w-full">Search Accenture Jobs</SharedButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="w-[100%] flex justify-center">
            <MdTipsAndUpdates className="text-9xl text-black w-20 h-30" />
          </div>
          <h3 className="text-xl font-semibold text-black mt-2 text-center">Keep Up to Date</h3>
          <p className="text-black mt-2 text-center">Stay ahead with career tips, insider perspectives, and industry-leading insights.</p>
          <SharedButton className="mt-4 w-full">Read Careers Blog</SharedButton>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <div className="w-[100%] flex justify-center">
            <TbFileAlert className="text-9xl text-black w-20 h-30" />
          </div>
          <h3 className="text-xl font-semibold text-black mt-2 text-center">Job Alert Emails</h3>
          <p className="text-black mt-2 text-center">Personalize your subscription to receive job alerts, latest news and insider tips.</p>
          <SharedButton className="mt-4 w-full">Register for Job Alerts</SharedButton>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
