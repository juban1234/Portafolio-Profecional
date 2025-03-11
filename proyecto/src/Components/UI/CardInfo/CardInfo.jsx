// CardInfo.jsx
export const CardInfo = ({ title, content, images = [] }) => {
  return (
    <div className="w-11/12 h-auto sm:w-64 md:w-72 lg:w-96 xl:w-[400px] rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 transition-all duration-300 ease-in-out">
      <div className="px-6 py-4">
        <h2 className="font-semibold text-xl text-gray-800 truncate">{title}</h2>
      </div>

      <div className="px-6 py-4">
        <p className="text-gray-600 text-base" dangerouslySetInnerHTML={{ __html: content}}/>
      </div>

      <div className="px-6 py-4">
 
        <div className="grid grid-cols-2 gap-4">
          {images && images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`image ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover "
            />
          ))}
        </div>
      </div>
    </div>
  );
};



