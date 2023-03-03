
//!===================================The Items=================================
const colors = ['#da974b','#E8B01F','#DBCB89','#71BCF3','#E0474C','#7FB8B4','#B2B1B1','#9F4C9D','#0073BC'];
const cards = document.querySelectorAll('.card');
const select = document.querySelector("#select");

const divClasses = document.querySelector('#classes');
const divEnseignants = document.querySelector('#enseignants');
const divSalles = document.querySelector('#salles');

const addCours = document.querySelectorAll('.add-cours');
const selectModule = document.querySelector('#select_module');
const selectEnseignant = document.querySelector('#select_enseignant');
const selectDebut = document.querySelector('#select_debut');
const selectFin = document.querySelector('#select_fin');
const selectSalle = document.querySelector('#select_salle');
const errorModal = document.querySelector('.error-modal');
const btnSaveModal = document.querySelector('#save');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const closeModa = document.querySelector('.day-content');

let jour = 0;
//!===================================The Events=================================

       //*close modal    
       closeModal.addEventListener('click',()=>{modal.classList.remove('open')})

    addCours.forEach(btn=>{
        btn.addEventListener('click',(e)=>{

            //*open modal
            modal.classList.toggle('open')
        } )
    })
         
 //!===================================The Functions=================================

 
 


    

