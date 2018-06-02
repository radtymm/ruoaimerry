import fetching from './fetching';

export default {
  // 普通发票添加
  homeReqUrl: (data, apiTail) => fetching({
    api: 'https://app.ruoaihunli.com/',
    apiTail: apiTail||'',
    data
  }),
}
