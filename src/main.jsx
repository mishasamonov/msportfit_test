import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

// Global error handler for unhandled errors
window.addEventListener('error', (event) => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:6',message:'Global error caught',data:{errorMessage:event.message,errorFilename:event.filename,errorLineno:event.lineno,errorColno:event.colno,errorError:event.error?.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
});

window.addEventListener('unhandledrejection', (event) => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:12',message:'Unhandled promise rejection',data:{reason:event.reason?.message || String(event.reason)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
  // #endregion
});

// #region agent log
fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:7',message:'main.jsx entry point executing',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
// #endregion

try {
  const rootElement = document.getElementById('root');
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:12',message:'root element check',data:{rootExists:!!rootElement},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion

  if (!rootElement) {
    throw new Error('Root element not found');
  }

  const root = ReactDOM.createRoot(rootElement);
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:20',message:'ReactDOM.createRoot successful, rendering App',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:26',message:'App render completed successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
} catch (error) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:29',message:'Error in main.jsx',data:{errorMessage:error.message,errorStack:error.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
  // #endregion
  throw error;
}


