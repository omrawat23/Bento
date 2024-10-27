
export default function TableOfContents() {
  const items = [
    {
      id: '01',
      title: 'Full Stack Developer Intern',
      company: 'Flib',
      location: 'Gurgaon',
      period: 'May 2024 - October 2024',
      description: 'Engineered the Flib web app, focusing on frontend architecture and performance optimization. Enhanced SEO and load times with image optimization and lazy loading. Tech stack: Next.js 14, TypeScript, Hygraph, Tailwind CSS, Framer Motion.',
    },
    {
      id: '02',
      title: 'CSR Intern',
      company: 'CountryEdu Private Limited',
      location: 'Gurgaon',
      period: 'June 2023 - July 2023',
      description: 'Identified and resolved website issues, including broken links and formatting. Collaborated as a team member to improve the website and wrote content for various services.',
    },
  ];

  return (
    <div className="max-w-4xl px-4 sm:px-6 lg:px-8 ml-2">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-black">/work</h2>
      <div className="border border-black p-4 relative">
        {items.map((item) => (
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