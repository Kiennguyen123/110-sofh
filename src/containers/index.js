import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouterWithPaths from '@components/common/RouterWithPaths';
import Loadable from 'react-loadable';
import Footer from './layout/footer';
import { PATH_NAME } from '@configs/constants/common';

function Loading() {
  return <div></div>;
}

function NotFound() {
  return (
    <>
      <h2>Not found</h2>
    </>
  );
}

function Layout(props) {
  const {
    location: { pathname },
  } = props;
  const routers = [
    {
      path: [PATH_NAME.HOME],
      component: Loadable({
        loader: () => import('@containers/listPatients'),
        loading: Loading,
      }),
    },
    {
      path: PATH_NAME.REPORT,
      component: Loadable({
        loader: () => import('@containers/report'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.CREATININ],
      component: Loadable({
        loader: () => import('@containers/creatinin'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.BODY_MASS_INDEX],
      component: Loadable({
        loader: () => import('@containers/bodyMassIndex'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.SPECIALIZED_DICTIONARY],
      component: Loadable({
        loader: () => import('@containers/specializedDictionary'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.PROFESSIONAL_DOCUMENT],
      component: Loadable({
        loader: () => import('@containers/professionalDocument'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.LIST_DOCTORS],
      component: Loadable({
        loader: () => import('@containers/listDoctors'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.TREATMENT_RECORD],
      component: Loadable({
        loader: () => import('@containers/treatmentRecords'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.PROFESSIONAL_DOCUMENT_DETAIL],
      component: Loadable({
        loader: () =>
          import('@containers/professionalDocument/detail'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.LOOKUP_DECIASE_CODE],
      component: Loadable({
        loader: () => import('@containers/lookupDeciaseCode'),
        loading: Loading,
      }),
    },
    {
      path: [PATH_NAME.UTILITIES],
      component: Loadable({
        loader: () => import('@containers/utilities'),
        loading: Loading,
      }),
    },
  ];

  // const checkPage = () => {
  //   const index = routers.findIndex((router) => {
  //     return typeof router.path === 'string'
  //       ? router.path === pathname || pathname.include
  //       : router.path.indexOf(pathname) !== -1;
  //   });

  //   if (index !== -1) return true;

  //   return false;
  // };

  return (
    <>
      <Switch>
        {routers.map((route, index) => {
          return (
            <RouterWithPaths
              exact
              path={route.path}
              key={index}
              component={route.component}
            />
          );
        })}
        <Route path="*" component={NotFound} />
      </Switch>
      {/* {checkPage() && <Footer />} */}
      <Footer />
    </>
  );
}

export default Layout;
