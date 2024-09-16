import React from 'react';
import { Button } from "@/components/ui/button";

const MusicIntegration = () => {
  return (
    <div>
      <Button className="w-full mb-2">Select Music</Button>
      <Button variant="outline" className="w-full">Edit Audio</Button>
    </div>
  );
};

export default MusicIntegration;