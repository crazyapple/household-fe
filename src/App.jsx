import { NotFound } from './pages';
import PrivateRoute from './routes/PrivateRoute';
import { routes } from './routes/routes';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts';

const App = () => {

  return (
    <Routes>
      {routes?.map(({ path, component: Component, isLogin }) => {
        if (isLogin) {
          return (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoute>
                  <AuthLayout>
                    <Component />
                  </AuthLayout>
                </PrivateRoute>
              }
            />
          );
        }

        return <Route key={path} path={path} element={<Component />} />;
      })}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )

}

export default App
