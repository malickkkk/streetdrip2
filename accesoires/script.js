
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


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

  
  
//Fonction pour recuperer ma collection
  const displayAccesoire = (accesoire) => {
    const container = document.querySelector('#vetement-container'); 
  
    // Parcourez les données de mon catalogue
    accesoire.forEach((obj) => {
      const objElement = document.createElement('div');
      objElement.classList.add('accesoire-index'); 
      objElement.innerHTML = `
      <div class="bg-red-100  border-2 rounded shadow p-4 m-2 cursor-pointer transition transform hover:scale-105">
      <img class="w-40 h-40 object-cover vetement-image" src="${obj.img}">
      <div class="text-indigo-500 text-xs font-medium">${obj.nom}</div>
      <div class="text-gray-900 text-lg font-medium">${obj.prix}</div>
      <div class="text-base">${obj.description}</div>
    </div>

    `
  
      container.appendChild(objElement);
    });
  };
  
  const getData = async () => {
    const collectionRef = collection(db, "Accesoire");
    const querySnapshot = await getDocs(collectionRef);
    const accesoire = querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
  
 
    displayAccesoire(accesoire);
  };
  
  getData();

  