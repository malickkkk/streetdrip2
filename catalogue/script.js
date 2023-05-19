
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4IIP8oUW-55Q2C5LQoMdXCP1YnD4Fyqw",
    authDomain: "streetdrip-b6a1b.firebaseapp.com",
    projectId: "streetdrip-b6a1b",
    storageBucket: "streetdrip-b6a1b.appspot.com",
    messagingSenderId: "18480981564",
    appId: "1:18480981564:web:47dca3fbefc5ad2c4e4539"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  
  


//Fonction pour recuperer ma collection
const getData = async () => {
  const collectionRef = collection(db, "Catalogue");
  const querySnapshot = await getDocs(collectionRef);
  const vetement = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));

 
  displayVetement(vetement);
};


getData();

// Fonction pour fficher ma collection sur le site avec HTML
const displayVetement = (vetement) => {
  const container = document.querySelector('#vetement-container');

  vetement.forEach((obj) => {
    const objElement = document.createElement('div');
    objElement.classList.add('vetement-index');
    objElement.innerHTML = `
      <div class="bg-red-200  border-2 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
        <img class="w-40 h-40 object-cover vetement-image" src="${obj.img}">
        <div class="text-indigo-500 text-xs font-medium">${obj.nom}</div>
        <div class="text-gray-900 text-lg font-medium">${obj.prix}</div>
        <div class="text-base">${obj.description}</div>
      </div>
    `;

  
    objElement.addEventListener('click', () => {
      displayVetementDetails(obj); 
    });

    container.appendChild(objElement);
  });
};
const displayVetementDetails = (vetement) => {
  const container = document.querySelector('#vetement-container');
  container.innerHTML = '';

  const objElement = document.createElement('div');
  objElement.classList.add('vetement-details');
  objElement.innerHTML = `
  <div class="bg-red-200  border-2 rounded shadow p-4 m-2">
    <img class="w-40 h-40 object-cover vetement-image" src="${vetement.img}">
    <div class="text-indigo-500 text-xs font-medium">${vetement.nom}</div>
    <div class="text-gray-900 text-lg font-medium">${vetement.prix}</div>
    <div class="text-base">${vetement.description}</div>
  </div>
`;

  container.appendChild(objElement);
};
  
 