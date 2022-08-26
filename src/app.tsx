export function onRouteChange({ matchedRoutes }) {
  console.log(matchedRoutes);
  if (matchedRoutes.length) {
    document.title =
      matchedRoutes[matchedRoutes.length - 1].route.title || 'react umi';
  }
}
