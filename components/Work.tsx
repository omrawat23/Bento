import {workExperienceData} from '@/components/Userinfo'

export default function Work() {
  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 ml-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-black">/work</h2>
      <div className="border border-black p-4 relative">
        {workExperienceData.map((item) => (
          <div 
            key={item.id} 
            className="relative p-4 border-b last:border-b-0 hover:bg-gray-100 transition duration-300 cursor-pointer text-black"
          >
            <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
            <p className="text-xs sm:text-sm">{item.company} • {item.location}</p>
            <p className="text-xs text-gray-600">{item.period}</p>
            <p className="text-xs mt-2 transition-opacity duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}