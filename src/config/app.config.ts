interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['No Role'],
  customerRoles: [],
  tenantRoles: ['No Role'],
  tenantName: 'Customer',
  applicationName: 'Reward Points app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [],
  getQuoteUrl: 'https://app.roq.ai/proposal/9e685d64-1853-4ee8-b324-35eff77b0661',
};
