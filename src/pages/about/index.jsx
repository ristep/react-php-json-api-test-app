import React, { useState, useEffect } from "react";
import toc from 'remark-toc';
import Markdown from 'react-markdown';

import { Card } from "react-bootstrap";
import ReactJson from "react-json-view";

const AboutPage = (props) =>{
  const { userData } = props;
	const [markdown, setMarkdown] = useState('');
  const [url] = useState("https://raw.githubusercontent.com/ristep/php-json-api-test-app/master/README.md");

  useEffect(() => {
      fetch(url)
        .then(function (response) {
          if(response.ok){
            return response.text();
          }
          throw new Error('Error message.');
        })
        .then(function (data) {
          setMarkdown( data );
        })
        .catch(function (err) {
      });
  }, [url])

	return(
		<div>
        <Card className="markdown-body mainMargin">
          <Markdown
            className="result"
            source={markdown}
            skipHtml={false}
            escapeHtml={false}
            plugins={[toc]}
          />
        </Card>
        <ReactJson src={userData} />
		</div> 
  	)
}

export default AboutPage;