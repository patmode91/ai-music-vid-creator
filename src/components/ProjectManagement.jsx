import React from 'react';
import { Button } from "@/components/ui/button";

const ProjectManagement = ({ project }) => {
  const handleSaveProject = () => {
    // Implement project saving logic
    console.log('Saving project:', project);
  };

  const handleLoadProject = () => {
    // Implement project loading logic
    console.log('Loading project');
  };

  const handleShareProject = () => {
    // Implement project sharing logic
    console.log('Sharing project:', project);
  };

  return (
    <div>
      <Button className="w-full mb-2" onClick={handleSaveProject}>Save Project</Button>
      <Button variant="outline" className="w-full mb-2" onClick={handleLoadProject}>Load Project</Button>
      <Button variant="outline" className="w-full" onClick={handleShareProject}>Share Project</Button>
    </div>
  );
};

export default ProjectManagement;
