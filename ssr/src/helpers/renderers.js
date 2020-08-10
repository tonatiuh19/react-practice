import React from 'react'
import {renderToString} from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
  const content = renderToString(<Home />);
  return  `
    <html>
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bunde.js"></script>
        </body>
    </html>
  `;
}