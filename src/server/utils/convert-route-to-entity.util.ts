const mapping: Record<string, string> = {
  graphs: 'graph',
  organizations: 'organization',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
