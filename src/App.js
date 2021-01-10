import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import AptPicker from './components/AptPicker';
import {Table} from 'reactstrap'

function App() {
  const [value, onChange] = useState(new Date());

  

  useEffect(()=>{
    //    fetch("https://q6ujtwmipc.execute-api.eu-central-1.amazonaws.com/dev",{mode:'no-cors'}).
    //    then(blob=>blob.json()).
    //    then(data => {
    //        console.log(data.json());
    //        return data;}).
    //    catch(error => {
    //         console.log(error);
    //         return error;
    //     })

    (async() => {
       const response = await fetch("https://q6ujtwmipc.execute-api.eu-central-1.amazonaws.com/dev");
       console.log(await response.json()); 
        
    })();
    console.log('inside use effect');
    },[])

  return (
      <div className='container border border-secondary rouned center'>

            <Calendar onChange={onChange} value={value} />
            
            <br/>
                      
            <div className="row">
                <div className="col-12 center text-center">
                        <Table dark responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th><strong>Неділя</strong></th>
                                    <th><strong>Понеділок</strong></th>
                                    <th><strong>Вівторок</strong></th>
                                    <th><strong>Середа</strong></th>
                                    <th><strong>Четвер</strong></th>
                                    <th><strong>П'ятниця</strong></th>
                                    <th><strong>Субота</strong></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("9-10")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                <tr>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                    <td onClick={()=>slotSelected("10-11")}>9 00 - 10 00</td>
                                </tr>
                                

                            </tbody>
                        </Table>
            
                </div>
            </div>

            <AptPicker />
      </div>
  );
}

function slotSelected(slotId){

    console.log(slotId + " selected!");
}



export default App;