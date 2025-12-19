import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// #region agent log
fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppRouter.jsx:3',message:'AppRouter imports loaded',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
// #endregion

const Home = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppRouter.jsx:7',message:'Loading Home component',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  return import('../pages/Home/Home').catch(err => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppRouter.jsx:9',message:'Error loading Home',data:{errorMessage:err.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    throw err;
  });
});
const Programs = lazy(() => {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppRouter.jsx:14',message:'Loading Programs component',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  return import('../pages/Programs/Programs').catch(err => {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppRouter.jsx:16',message:'Error loading Programs',data:{errorMessage:err.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    throw err;
  });
});
const ProgramDetails = lazy(() => import('../pages/ProgramDetails/ProgramDetails'));
const Exercises = lazy(() => import('../pages/Exercises/Exercises'));
const ExerciseDetails = lazy(() => import('../pages/ExerciseDetails/ExerciseDetails'));
const Calculators = lazy(() => import('../pages/Calculators/Calculators'));
const Products = lazy(() => import('../pages/Products/Products'));
const Faq = lazy(() => import('../pages/Faq/Faq'));
const Login = lazy(() => import('../pages/Auth/Login'));
const Register = lazy(() => import('../pages/Auth/Register'));

const Loader = () => (
  <div className="container" style={{ padding: '3rem 0', color: '#a3a3a3' }}>
    Завантаження...
  </div>
);

function AppRouter() {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/1129dec2-91e6-436e-a63e-3584f7e0fbc1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'AppRouter.jsx:23',message:'AppRouter function executing',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  // #endregion

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:id" element={<ProgramDetails />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/exercises/:id" element={<ExerciseDetails />} />
        <Route path="/calculators" element={<Calculators />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<div className="container" style={{ padding: '3rem 0' }}>Сторінку не знайдено</div>} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;


