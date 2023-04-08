import {PostCard,PostWidget,Categories} from '../components'
const posts = [
    {title:'React Testing' ,excerpt : 'Learning React Post',slug:'react-testing',
    author : {name:'Nguyen The Long Hai',photo:{url:'https://icon-library.com/images/author-icon/author-icon-10.jpg'},category : {name: 'Finance'}}
    ,featuredImage :{url:'https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg'}} ,
    {title:'The State of end-to-end testing with Angular' ,excerpt : 'Learning React Post',slug:'the-state-of-end-to-end-testing-with-angular',
    author : {name:'Nguyen The Long Hai',photo:{url:'https://icon-library.com/images/author-icon/author-icon-10.jpg'}}
    ,featuredImage :{url:'https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg'}},
    {title:'React Testing' ,excerpt : 'Learning React Post',slug:'react-testing',
    author : {name:'Nguyen The Long Hai',photo:{url:'https://icon-library.com/images/author-icon/author-icon-10.jpg'}}
    ,featuredImage :{url:'https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg'}}
  
  ]
 export default function Home() {
    return (
      <div className="container mx-auto px-10 mb-8">
        <header className="App-header">
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 col-span-1">
            {posts.map((post, inxdex) => (
                <PostCard post={post} key={post.title}/>
            ))}
            </div>
            <div className='lg:col-span-4 col-span-1'>
                <div className="lg:sticky relative top-8">
                    {/* <PostWidget /> */}
                    <Categories />
                </div>
            </div>
        </div>
      </div>
    );
  }