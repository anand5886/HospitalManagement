class Service {
   GetData = (url) => {
      return fetch(url)
         .then(response => response.json())
         .then((data) => {
            return data
         })
   }
   PostHandler(url, body) {
      return fetch(url, {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: body
      })
         .then(res => res.json())
         .then(result => { return result })
         .catch(error => { return error })
   }


}
export const Services = new Service();