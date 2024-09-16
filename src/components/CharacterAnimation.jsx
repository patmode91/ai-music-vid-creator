import React from 'react';
import { Button } from "@/components/ui/button";

const CharacterAnimation = () => {
  return (
    <div>
      <Button className="w-full mb-2">Import Character</Button>
      <Button variant="outline" className="w-full mb-2">Generate Choreography</Button>
      <Button variant="outline" className="w-full">Custom Animation</Button>
    </div>
  );
};

export default CharacterAnimation;