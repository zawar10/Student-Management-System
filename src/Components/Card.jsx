import React from "react";

const Card = ( { student}) => {
    return (
        <div className="bg-white/90 rounded-2xl shadow-lg p-6 w-74 h-56 flex flex-col 
                        justify-center items-center hover:shadow-2xl hover:scale-105 transform transition duration-300">
            <h2 className="text-lg text-black mb-6"> <strong> <u>{student.name}</u> </strong> </h2>

            <div className="flex flex-col gap-2 text-sm text-gray-700">
                <p className="text-gray-700 text-sm"> <strong>Roll No :</strong> {student.roll}</p>
                <p className="text-gray-700 text-sm"> <strong>Course :</strong> {student.course}</p>
                <p className="text-gray-700 text-sm"> <strong>Department :</strong> {student.dept}</p>
            </div>
        </div>
    );
};

export default Card;
