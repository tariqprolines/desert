import React, { Suspense, lazy } from 'react';
import MyErrorBoundary from './MyErrorBoundary';  
const ExampleComponent = React.lazy(() => import('./ ExampleComponent'));  
const ExamComponent = React.lazy(() => import('./ ExamComponent'));  
  
const Codesplit = () => (  
  <div>  
    <MyErrorBoundary>  
      <Suspense fallback={<div>Loading...</div>}>  
        <section>  
          <ExampleComponent />  
          <ExamComponent />  
        </section>  
      </Suspense>  
    </MyErrorBoundary>  
  </div>  
);  

export default Codesplit;