import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Dashboard from '../components/Dashboard';
import ProjectManagement from '../components/ProjectManagement';
import MusicIntegration from '../components/MusicIntegration';
import VisualEditing from '../components/VisualEditing';
import CharacterAnimation from '../components/CharacterAnimation';

const Index = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [musicFeatures, setMusicFeatures] = useState(null);
  const [generatedVisuals, setGeneratedVisuals] = useState(null);
  const [characterAnimation, setCharacterAnimation] = useState(null);

  const handleProjectCreate = () => {
    setActiveProject({ id: Date.now(), name: 'New Project', status: 'Ready to start' });
  };

  const handleProjectLoad = (project) => {
    setActiveProject(project);
  };

  const handleMusicAnalysis = (features) => {
    setMusicFeatures(features);
  };

  const handleVisualsGeneration = (visuals) => {
    setGeneratedVisuals(visuals);
  };

  const handleAnimationGeneration = (animation) => {
    setCharacterAnimation(animation);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">AI Music Video Mashup & Character Animation</h1>
      
      <Dashboard 
        activeProject={activeProject}
        onProjectCreate={handleProjectCreate}
        onProjectLoad={handleProjectLoad}
      />
      
      {activeProject && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
            </CardHeader>
            <CardContent>
              <ProjectManagement project={activeProject} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Music Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <MusicIntegration 
                project={activeProject} 
                onMusicAnalysis={handleMusicAnalysis}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Visual Editing</CardTitle>
            </CardHeader>
            <CardContent>
              <VisualEditing 
                project={activeProject}
                musicFeatures={musicFeatures}
                onVisualsGeneration={handleVisualsGeneration}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Character Animation</CardTitle>
            </CardHeader>
            <CardContent>
              <CharacterAnimation 
                project={activeProject}
                musicFeatures={musicFeatures}
                onAnimationGeneration={handleAnimationGeneration}
              />
            </CardContent>
          </Card>
        </div>
      )}
      
      {!activeProject && (
        <div className="text-center mt-8">
          <p className="text-xl mb-4">No active project. Create a new one or load an existing project to get started.</p>
          <Button onClick={handleProjectCreate}>Create New Project</Button>
        </div>
      )}
    </div>
  );
};

export default Index;
