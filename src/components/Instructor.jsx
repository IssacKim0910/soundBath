import React from 'react';
import Card from "./Card";

const Instructor = () => {
    return (
        <>
            <div className="h-[700px]">

                <div className="p-4 text-center">
                    <h1 className="text-2xl font-bold">강사 소개</h1>
                    <p>강사 소개 페이지입니다.</p>
                </div>

                <div className="p-4 w-[400px]">
                    <Card/>
                </div>
            </div>

        </>
    );
};

export default Instructor;
