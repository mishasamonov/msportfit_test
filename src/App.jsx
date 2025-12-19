import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRouter from './router/AppRouter';
import './styles/global.scss';

// #region agent log
fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:7',message:'App component rendering',data:{importsLoaded:true},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
// #endregion

function App() {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:11',message:'App function executing',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
  // #endregion

  try {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:15',message:'Before Header import check',data:{HeaderType:typeof Header},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion

    return (
      <BrowserRouter>
        <div className="app-shell" style={{ minHeight: '100vh', backgroundColor: '#0d0d0d', display: 'flex', flexDirection: 'column' }}>
          {/* #region agent log */}
          {(() => { fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:20',message:'Rendering Header component',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{}); return null; })()}
          {/* #endregion */}
          <Header />
          <main style={{ flex: 1 }}>
            {/* #region agent log */}
            {(() => { fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:23',message:'Rendering AppRouter component',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{}); return null; })()}
            {/* #endregion */}
            <AppRouter />
          </main>
          {/* #region agent log */}
          {(() => { fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:26',message:'Rendering Footer component',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{}); return null; })()}
          {/* #endregion */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  } catch (error) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:30',message:'Error in App component',data:{errorMessage:error.message,errorStack:error.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    throw error;
  }
}

export default App;


