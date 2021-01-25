// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    auth: 'http://192.168.0.12:8084/auth/authenticate',
    financial: {
      transfer: 'http://192.168.0.12:8084/financial/transfer',
      save: 'http://192.168.0.12:8084/financial/save',
      redeem: 'http://192.168.0.12:8084/financial/redeem',
      balance: 'http://192.168.0.12:8084/financial/info'
    }
  },
  demoAccounts: [
    {
      username: "demoAccount1",
      password: "123"
    },
    {
      username: "demoAccount2",
      password: "123"
    },
    {
      username: "demoAccount3",
      password: "123"
    }
  ],
  actionButtons: {
    ppButtons: [
      {
        icon: "wallet",
        label: 'Resgatar',
        function: 'redeem'
      },
      {
        icon: "university",
        label: 'Investir',
        function: 'soon'
      },
      {
        icon: "hand-holding-usd",
        label: 'Doar',
        function: 'soon'
      }
    ],
    ccButtons: [
      {
        icon: "exchange-alt",
        label: 'Transferir',
        function: 'transfer'
      },
      {
        icon: "piggy-bank",
        label: 'Guardar',
        function: 'save'
      },
      {
        icon: "spinner",
        label: 'Pix',
        function: 'soon'
      }
    ]
  } 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
