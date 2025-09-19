import React from "react";
import { Projects } from '../data/projects'

export interface Project {
    id: string;
    title: string;
    date: string;
    excerpt: string;
  }

export const ProjectList = () => {

    return Projects.map(project => <article key={project.id} className="border-b border-gray-200 dark:border-gray-700 pb-8">
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <span>{project.date}</span>
        <span>•</span>
        <h2 className="text-2xl font-bold">
            {project.title}
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{project.excerpt}</p>
    </div>
  </article>);
}