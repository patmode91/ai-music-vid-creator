import React from 'react';
import { Button } from "@/components/ui/button";

const VisualEditing = () => {
  return (
    <div>
      <Button className="w-full mb-2">Video Mashup</Button>
      <Button variant="outline" className="w-full mb-2">AI Transitions</Button>
      <Button variant="outline" className="w-full">Visual Effects</Button>
    </div>
  );
};

export default VisualEditing;