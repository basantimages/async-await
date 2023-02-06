const posts = [
  {
    title: 'Post One',
    body: 'This is Post One',
    createdAt: new Date()
  },
  {
    title: 'Post Two',
    body: 'This is Post Two',
    createdAt: new Date()
  }
];

const lastActivity = { user: new Date() };

function getPost() {
  posts.forEach((post) => {
    console.log(`Title : ${post.title}, Created at : ${post.createdAt}`);
  })
}

function updateLastUserActivityTime() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      lastActivity.user = new Date();
      res();
    }, 1000);
  })
}

function create3rdPost() {
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
          posts.push({
            title: 'Post Three',
            body: 'This is Post Three',
            createdAt: new Date()
          });
          resolve();
      }, 3000)
  }) 
}

function deletePost(){
  return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if(posts.length > 0) 
          resolve(posts.pop());
        else 
          reject('Error')
      }, 1000);
  })
}


Promise.all([create3rdPost(), updateLastUserActivityTime()])
  .then(() => {
    getPost();
    deletePost()
      .then(e => {
        console.log(e, 'DELETED');
        getPost();
      })
      .catch(e => console.log(e));
  });

