import React from 'react';


const ArticleCard = ({title, description,source}) => {
  return (
    <div className='border-4 border-blue-400 rounded-xl shadow-lg'>
        <div className='text-white bg-black py-6 px-4 '>
            <h4 className='text-xl font-semibold mb-4 text-center'>{title}</h4>
            <p className='text-center'>{description}</p>
        </div>
        <div className="flex justify-center mt-6 mb-4">
            <a
                href={source}
                download
                className="bg-blue-400 hover:bg-blue-300 hover:text-black text-white py-2.5 px-5 rounded-lg w-40 flex items-center justify-center"
            >
                Download
            </a>
        </div>
    </div>
  )
}

export default ArticleCard;