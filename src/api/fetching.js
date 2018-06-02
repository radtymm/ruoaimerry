
export default fetching = (data)=>fetch(data.api + data.apiTail).then((response) => {
  if (response.ok) {
    // console.log('response');
    // console.log(response);
    return response.json();
  }
}).then((json) => {
  // console.log('json');
  // console.log(json)
  return json;
}).catch((error) => {
  // console.log('error');
  // console.error(error);
  return error;
});
