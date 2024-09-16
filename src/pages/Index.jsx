import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Dashboard from '../components/Dashboard';
import ProjectManagement from '../components/ProjectManagement';
import MusicIntegration from '../components/MusicIntegration';
import VisualEditing from '../components/VisualEditing';
import CharacterAnimation from '../components/CharacterAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Music Video Mashup & Character Animation</h1>
      <Dashboard />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Management</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectManagement />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Music Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <MusicIntegration />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Visual Editing</CardTitle>
          </CardHeader>
          <CardContent>
            <VisualEditing />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Character Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <CharacterAnimation />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
