import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': '55b74d74e8msh2cbf38442d9c97ep11764ajsn2d4dc323018d',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),

      getCryptoHistory: builder.query({
        query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
        
      }),
      
    })
 });



 export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
  //  useGetExchangesQuery,
    useGetCryptoHistoryQuery,
 } = cryptoApi; //react hook 
  
 /*
 // Note: To access this endpoint you need premium plan
      getExchanges: builder.query({
        query: () => createRequest('/exchanges'),
      }),
      */