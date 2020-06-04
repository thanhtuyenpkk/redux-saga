import { CommonActions, DrawerActions } from '@react-navigation/native';

let _navigator;
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(name, params) {
  _navigator.dispatch(
    CommonActions.navigate({
      name,
      params,
    }),
  );
}

function goBack() {
  _navigator.dispatch(
    CommonActions.goBack()
  );
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}

function getCurrentRoute() {
  if (!navigator || !navigator.state.nav) {
    return null;
  }
  return _navigator.state.nav.routes[_navigator.state.nav.index] || null;
}

export default {
  setTopLevelNavigator,
  navigate,
  openDrawer,
  goBack,
  getCurrentRoute,
};
