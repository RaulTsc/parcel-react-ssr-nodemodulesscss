// Dead simple component for the hello world (hi mom!)

import React from 'react';
import {Separator} from '@everreal/er-common-react-components/lib/components/common/Separator/Separator';

import './HelloWorld.scss';

export default function HelloWorld() {
  return (
    <div>
      <h1 className="hello-world">Hello world!</h1>
      <Separator />
    </div>
  );
}
