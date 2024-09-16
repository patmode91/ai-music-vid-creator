import React from 'react';
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="flex space-x-4">
        <Button>New Project</Button>
        <Button variant="outline">Load Project</Button>
        <Button variant="outline">Share Project</Button>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Current Project</h3>
        <p>No active project. Create a new one or load an existing project to get started.</p>
      </div>
    </div>
  );
};

export default Dashboard;