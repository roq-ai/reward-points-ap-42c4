const mapping: Record<string, string> = {
  addresses: 'address',
  cards: 'card',
  customers: 'customer',
  merchants: 'merchant',
  transactions: 'transaction',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
