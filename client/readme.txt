Axios response object


{
  data: [
    {
      "_id": "1",
      "title": "Revolver",
      "artist": "The Beatles",
      "year": 1966
    },
    {
      "_id": "2",
      "title": "Pet Sounds",
      "artist": "The Beach Boys",
      "year": 1966
    },
    {
      "_id": "3",
      "title": "Highway 61 Revisited",
      "artist": "Bob Dylan",
      "year": 1965
    }
  ],
  status: 200,
  statusText: "OK",
  headers: {
    "content-type": "application/json"
  },
  config: {
    url: "http://localhost:3000/api/albums",
    method: "get",
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json;charset=utf-8"
    },
    timeout: 0,
    withCredentials: false,
    responseType: "json",
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1
  },
  request: {...}
}