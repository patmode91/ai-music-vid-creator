import React from 'react';
import { Button } from "@/components/ui/button";

const ProjectManagement = () => {
  return (
    <div>
      <Button className="w-full mb-2">Create New Project</Button>
      <Button variant="outline" className="w-full mb-2">Save Project</Button>
      <Button variant="outline" className="w-full">Load Project</Button>
    </div>
  );
};

export default ProjectManagement;