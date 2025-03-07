
// CardInfo.js
export const CardInfo = ({ title, content }) => {
        return (
                <>
                
          <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 ">

            <div className="px-6 py-4">
              <h2 className="font-semibold text-xl text-gray-800 truncate">{title}</h2>
            </div>
      
            <div className="px-6 py-4">
              <p className="text-gray-600 text-base">{content}</p>
            </div>
      
          </div>
          
          </>
        );
      };
      