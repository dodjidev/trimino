import { Aside } from './components/shared/Aside'
import Header from './components/shared/Header'
import { Routes , Router } from 'react-router-dom'
import { confirmDialog, Dialog } from 'primereact';
import { Button } from 'primereact';
import { useEffect } from 'react';
import { ConfirmDialog } from 'primereact';
import { Calendar } from 'primereact';
function App() {

   const dl = ()=>{
      confirmDialog({
         message: "Are you sure",
         header: 'Confirmation',
         icon: 'pi pi-exclamation-triangle',
         accept: () => console.log('accepted'),
         reject: () => console.log('rejected')
       }).show()
   }
  useEffect(()=>{
      
  })
  return (
    <div className="">
        <div className="flex">
            <div className='w-auto'>
               <Aside />
            </div>
            <div className='w-[100vw]'>
               <Header />
               <div className="m-5 h-[85vh] shadow-lg p-3">
                  Body
                  <Button onClick={dl}>
                     Content
                  </Button>
                  <Calendar />
                  <ConfirmDialog visible={true} onHide={() => console.log('hide')} message="Are you sure you want to proceed?"
                   header="Confirmation" icon="pi pi-exclamation-triangle" accept={()=> {}} reject={()=>{}} />
               </div>
            </div>
        </div>
    </div>
  );

}

export default App;
