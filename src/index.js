import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting(){
    return <h1>hi sneha</h1>
    //return React.createElement('h2' , {} , 'hi sneha');
    // return React.createElement('div' , {} , 
    //     React.createElement('h1' , {} , 'this is another way')
    // );
};
// const Greet_Again = ()=>{
//     return <h1>Hi sneha again</h1>
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
//root.render(<Greet_Again />);

/*jsx rules*/
/* nested component
return 1 element
React.fragment or <> </>
className instead of class
close every element
formatting*/
const Abc = ()=>{
    return(
        <>
            <Name />
            <Age />
        </>
    );
};
const Name = ()=>{
    return <h1>Achal</h1>
}
const Age = ()=>{
    return <h4>24</h4>
}
root.render(<Abc />);

/*const Booklist = ()=>{
    return(
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};
const Book = ()=>{
    return (
        <>
           <Title />
           <Author />
           <Image />
        </>
    );
};
const Title = ()=>{
    return <h1>Title</h1>
}
const Author = ()=>{
    return <h2>Author</h2>
}
const Image = ()=>{
    return <p>Image</p>
}
root.render(<Booklist />)
*/
/*const Booklist = ()=>{
    return(
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};
const Book = ()=>{
    return (
        <>
           <Title />
           <Author />
           <Image />
        </>
    );
};

const Title = ()=>{
    return <h1>The Alchemist </h1>
}
const Author = ()=>{
    return <h2> Paulo Coelho</h2>
}
const Image = ()=>{
    return <img src = "https://m.media-amazon.com/images/I/61HAE8zahLL._SY425_.jpg" alt = "title"></img>
}
root.render(<Booklist />)*/
/*
const Booklist = ()=>{
    return(
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
};
let author = "abc";
let title = "pqr"
const Book = ()=>{
    return (
        <>
           <Title />
           <Author />
           <Image />
        </>
    );
};


const Title = ()=>{
    return <h1>{title}</h1>
}
const Author = ()=>{
    return <h2>{author}</h2>
}
const Image = ()=>{
    return <img src = "https://m.media-amazon.com/images/I/61HAE8zahLL._SY425_.jpg" alt = "title"></img>
}
root.render(<Booklist />)
*/
/*
function Namaste (){
    return(
        <>
            <Person name = "SNEHA" />
            <Person name = "achal" occupation = "engineer"/>
        </>
    );
};
const Person = (props)=>{
     return(
        <>
             <h4>{props.name}</h4>
             <h4>{props.occupation}</h4>
        </>
      
     );
};
root.render(<Namaste />);
const Booklist = ()=>{
    return(
        <section>
            <Book title = "My Life"/>
            <hr />
            <Book title = "Lots of Love" author = "sneha"/>
            <hr />
            <Book image = "https://m.media-amazon.com/images/I/61HAE8zahLL._SY425_.jpg"/>
            <hr />
            <Book />
            <hr />
        </section>
    );
};

const Book = (props)=>{
    return (
        <>
           <h1>{props.title}</h1>
           <h2>{props.author}</h2>
           <img src = {props.image} alt = {props.title}></img>
        </>
    );
};

root.render(<Booklist />)

const firstBook = {
    title : "YOU ONLY LIVE ONCE",
    author : "STUTI CHANGLE",
    image : "https://m.media-amazon.com/images/I/71dNsRuYL7L._SY342_.jpg",

}
const secondBook = {
    title : "The Alchemist ",
    author : " Paulo Coelho ",
    image : "https://m.media-amazon.com/images/I/61HAE8zahLL._SY425_.jpg",
}

const Bookcollection = ()=>{
    return(
        <>
           <Booky 
           title = {firstBook.title}
           author = {firstBook.author}
           image = {firstBook.image} />
           <hr />
            <Booky 
           title = {secondBook.title}
           author = {secondBook.author}
           image = {secondBook.image} />
        </>
    );
};

const Booky = (props)=>{
      return(
        <>
          <h1>{props.title}</h1>
          <h4>{props.author}</h4>
          <img src = {props.image} alt = {props.title}></img>
        </>
      );
};
root.render(<Bookcollection />);

/*destructuring*/
/*
const Booky = (props)=>{
    const {title , image , author} = props;
    return(
      <>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <img src = {image} alt = {title}></img>
      </>
    );
};

const Booky = ({title , image , author})=>{
    
    return(
      <>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <img src = {image} alt = {title}></img>
      </>
    );
};

const Booky = (props)=>{
    const {title , image , author,children} = props;
    return(
      <>
        <h1>{title}</h1>
        <h4>{author}</h4>
        <img src = {image} alt = {title}></img>
        {children}
      </>
    );
};*/

/*simple list*/
const Books = [
{
    title : "YOU ONLY LIVE ONCE",
    author : "STUTI CHANGLE",
    image : "https://m.media-amazon.com/images/I/71dNsRuYL7L._SY342_.jpg",
    id : 1,
},
{
    title : "The Alchemist ",
    author : " Paulo Coelho ",
    image : "https://m.media-amazon.com/images/I/61HAE8zahLL._SY425_.jpg",
    id:2,
},
]
// const Booklistie = ()=>{
//     return(
//         <section>
//         {/*{Books}invalid*/}
//         {Books.map(
            
//             (b1) => {
//                     return <h2>{b1.title}</h2>
//             }
//         )
//         }
//         </section>
//     );
// };

const Shelf = ()=>{
    return(
        <>
        {
            Books.map(
                (b2)=>{
                    console.log(b2);
                    const {title , author , image , id} = b2;
                    return (
                        <>
                        <b2 title = {title} image = {image} author = {author} key = {id} />;
                        </>
                    );
                })
}
        </>
    );
}

root.render(<Shelf />)