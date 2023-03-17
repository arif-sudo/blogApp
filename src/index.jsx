import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import configureStore from './myredux/store/configureStore';
import { addBlog } from './myredux/actions/blogaction';
import App from './routers/App';
import { Provider } from 'react-redux';
import './style.css';
import { getBlogsFromDatabase } from './myredux/actions/blogaction';
const mystore = configureStore();


// mystore.subscribe(()=>{
//   console.log(mystore.getState());
// })

// const blog1 = store.dispatch(addBlog({img:"https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg",title:"redux js",desc:"redux is funny"}))
// const blog2 = store.dispatch(addBlog({img:"https://reactjs.org/logo-og.png",title:"react js",desc:"redux is funny"}))
// store.dispatch(editBlog(blog1.blog.id,{title:"update"}))
// store.dispatch(removeBlog({id:blog1.blog.id}))


 mystore.dispatch(addBlog({img:"https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage.jpg",title:"redux js",desc:"redux is funny"}))
 mystore.dispatch(addBlog({img:"https://reactjs.org/logo-og.png",title:"react js",desc:"redux is funny"}))


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
  // <Provider store={mystore}>
  // <App />
  // </Provider>
//   </React.StrictMode>
// );

const result = (
  <Provider store={mystore}>
    <App/>
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

mystore.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById('root'))
})