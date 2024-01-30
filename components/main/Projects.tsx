import React from "react";
import ProjectCard from "../sub/ProjectCard";
function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div
        className="h-full w-full flex flex-col md:flex-row gap-10  px-10
      py-10"
      >
        <ProjectCard
          src="/omnifood.png"
          title="Omnifood"
          description="The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs!"
          link="https://omnifood-giannis.netlify.app/"
        />
        <ProjectCard
          src="/bank.png"
          title="BankIst"
          description="Home page for a bank that prioritizes it's costumers!"
          link="https://bank-page-giannis.netlify.app/"
        />
        <ProjectCard
          src="/camptravel.png"
          title="CampTravel"
          description="The best app for travellers. Download it with your friends and choose your next destination!"
          link="https://camp-travel-beta.vercel.app/"
        />
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10  px-10">
        <ProjectCard
          src="/myview.png"
          title="My View"
          description="React Admin Dashboard Application!"
          link="https://my-view-app.vercel.app/"
        />
        <ProjectCard
          src="/sneakLand.png"
          title="SneakLand"
          description="Find the right sneaker for you!"
          link="https://shoes-page.vercel.app/"
        />
        <ProjectCard
          src="/threads.png"
          title="Threads"
          description="Make your community with your friends and meet new people!"
          link="https://threads-app-bice-eight.vercel.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
