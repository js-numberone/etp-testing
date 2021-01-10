import firebase from 'firebase';


// import userData from '../testData.json'
// import estateData from '../estateData.json'

var config = {
  apiKey: "AIzaSyAW8pQVFvg-YuLbrcnUH2PP9mY5Bp6iOKc",
  authDomain: "etp-estate-admin.firebaseapp.com",
  projectId: "etp-estate-admin",
  storageBucket: "etp-estate-admin.appspot.com",
  messagingSenderId: "288745657832",
  appId: "1:288745657832:web:29f49fe5072f89a487005d",
  measurementId: "G-BLXY4QP0RH"
  }

  firebase.initializeApp(config);

  export default firebase;


  // function App() {
  //   //const [spells, setSpells] = React.useState([] as any);
  //   React.useEffect(() => {
  //     const fetchData = async () => {
  //       const db = firebase.firestore()
  //       if (window.location.hostname === "localhost") {
  //         console.log("localhost detected!");
  //         db.settings({
  //           host: "localhost:8080",
  //           ssl: false
  //         });
  //       }
  //         Object.keys(userData).forEach((docKey, index) => {
  //           db.collection('users')
  //           .doc(docKey)
  //           .set(userData[docKey])
  //           Object.keys(estateData).forEach(estateKey => {
  //             db.collection('users')
  //             .doc('user'+ index)
              
  //             .collection('estates')
  //             .doc(estateKey)
  //             .set(estateData[estateKey])
  //           })
    
  //         })
  
          
          
  //         // Object.keys(estateData).forEach(docKey => {
  //         //   db.collection('users')
  //         //   .doc(docKey)
  //         //   .collection('estates')
  //         //   .doc("estate1")
  //         //   .set(estateData[docKey])
  //         // })
  
  
  //       //const data = await db.collection('users').get()
  
  //       //setSpells(data.docs.map(d => d.data()))
  //     }
  //     fetchData()
  //   }, [])
  
  
  
  //   return (
  //     <div className='main-container'>
  //       <div className='sidebar'>
  //         <SideBar/>
  //       </div>
  //       <div className='stacked-components'>
  //         <Header/>
  
  
  //           {/* {spells.map(spell => (
  //             <p key={spell.name}>{spell.name}</p>
  //           ))}         */}
  //       </div>
  //     </div>
      
  //   );
    
  // }