"use client"
import { useState } from 'react';
import Image from 'next/image';
import { SparklesIcon } from 'lucide-react';

interface ProjectData {
  title: string;
  image: string;
  description: string;
  tags: string[];
  link: {
    github: string;
    twitter?: string;
    live?: string;
  };
}

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-80 rounded-lg overflow-hidden border border-gray-300 shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <Image
        src={project.image} // Replace with dynamic image URL
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />

      {/* Overlay on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-between p-4 text-white rounded-lg">
          <div>
            {/* Title and Tags */}
            <h3 className="text-2xl font-semibold flex items-center mb-2">
              {project.title}
              <SparklesIcon className="w-5 h-5 text-purple-400 ml-2" />
            </h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-lime-200 text-black text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex justify-between items-center">
            {project.link.github && (
              <a
                href={project.link.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                GitHub
              </a>
            )}
            {project.link.twitter && (
              <a
                href={project.link.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Twitter
              </a>
            )}
            {project.link.live && (
              <a
                href={project.link.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
