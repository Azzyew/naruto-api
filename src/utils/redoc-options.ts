import { RedocOptions } from 'nestjs-redoc';

export const redocOptions: RedocOptions = {
  title: 'Naruto API',
  logo: {
    url: 'https://vignette.wikia.nocookie.net/vsbattles/images/1/12/Maito_gai_by_aikawaiichan_db9eirt_by_sennin15-dbl69ps.png/revision/latest?cb=20180201211428',
    altText: 'Might Guy',
  },
  sortPropsAlphabetically: true,
  hideDownloadButton: false,
  auth: {
    enabled: false,
    user: 'admin',
    password: 'admin',
  },
  theme: {
    colors: {
      primary: {
        main: '#61977F',
        light: '#A8C6B9',
        dark: '#8A474E',
        contrastText: '#FFF',
      },
      http: {
        get: '#D7925E',
      },
    },
    rightPanel: {
      backgroundColor: '#346358',
    },
  },
  tagGroups: [
    {
      name: 'Content',
      tags: [
        'Characters',
      ],
    },
  ],
};